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

    useEffect(() => {
        fetchContacts();
    }, []);

    return (
        <>
            <section id="content-wrap" className="site-page">
                <div className="row">
                    <div className="col-twelve">
                        <section>
                            <div className="content-media">
                                <div className="entry-text">
                                    <div className="entry-header">
                                        <h1 className="entry-title"><a href="">Total contacts</a></h1>
                                    </div>
                                </div>
                            </div>
                            <div className="primary-content">
                                <AdminContacts contacts={contacts}/>
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacts