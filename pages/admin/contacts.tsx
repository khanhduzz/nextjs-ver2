import Pagination from "@/common/components/Pagination";
import AdminContacts from "@/modules/contact/components/AdminContacts"
import { ContactDTO } from "@/modules/contact/models/Contact";
import { useEffect, useState } from "react";

const Contacts = () => {
    const [contacts, setContacts] = useState<ContactDTO[]>([]);
    const [currentPage, setCurrentPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);

    const fetchContacts = async (page = 1) => {
        try {
            const response = await fetch(`/api/contact-form?page=${page}&pageSize=10`);
            if (!response.ok) {
                throw new Error("Failed to fetch contacts");
            }

            const data = await response.json();
            setContacts(data.data || []);
            setCurrentPage(data.currentPage || 1);
            setTotalPages(data.totalPages || 1);
        } catch (error) {
            console.error("Error fetching contacts:", error);
        }
    };

    const handlePageChange = (newPage: number) => {
        window.location.href = `?page=${newPage}`;
    }

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <>
            {contacts && contacts.length > 0 ? (
                <>
                    <section id="page-header">
                        <div className="row current-cat">
                            <div className="col-full">
                                <h1>All Request Contacts</h1>
                            </div>
                        </div>
                    </section>
                    <section id="bricks">
                        <div className="row masonry w-72">
                            <AdminContacts contacts={contacts} />
                        </div>
                        <Pagination
                            currentPage={currentPage}
                            totalPages={totalPages ?? 0}
                            onPageChange={handlePageChange}
                        />
                    </section>
                </>
            ) : (<section id="page-header">
                <div className="row current-cat">
                    <div className="col-full">
                        <h1>No Requests Contacts</h1>
                    </div>
                </div>
            </section>)}
        </>
    )
}

export default Contacts