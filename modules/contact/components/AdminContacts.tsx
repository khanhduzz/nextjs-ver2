import { ContactDTO } from "../models/Contact"

type AdminContactsProps = {
    contacts: ContactDTO[];
  };

const AdminContacts = (contacts : AdminContactsProps) => {
    return (
        <>
            <article className="brick entry format-standard animate-this">
                <table className="contact-table">
                    <thead>
                        <tr>
                            <th>Name</th>
                            <th>Email</th>
                            <th>Website</th>
                            <th>Message</th>
                        </tr>
                    </thead>
                    <tbody>
                        {contacts.contacts.map((contact, index) => (
                            <tr key={index}>
                                <td>{contact.cName}</td>
                                <td>{contact.cEmail}</td>
                                <td>
                                    <a href={contact.cWebsite} target="_blank" rel="noopener noreferrer">
                                        {contact.cWebsite}
                                    </a>
                                </td>
                                <td>{contact.cMessage}</td>
                            </tr>
                        ))}
                    </tbody>

                    <style jsx>{`
                .contact-table {
                    width: 100%;
                    border-collapse: collapse;
                    margin-top: 16px;
                }
                .contact-table th, .contact-table td {
                    padding: 12px;
                    border: 1px solid #ddd;
                    text-align: left;
                }
                .contact-table th {
                    background-color: #f4f4f4;
                }
                .contact-table a {
                    color: #3498db;
                    text-decoration: none;
                }
                .contact-table a:hover {
                    text-decoration: underline;
                }
            `}</style>
                </table>
            </article>
        </>
    )
}

export default AdminContacts