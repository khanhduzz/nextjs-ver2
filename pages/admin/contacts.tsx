import AdminContacts from "@/modules/contact/components/AdminContacts"
import { contacts } from "@/modules/contact/models/Contact"


const Contacts = () => {
    console.log("big one contacts: ", contacts);
    
    return (
        <>
            <section id="content-wrap" className="site-page">
                <div className="row">
                    <div className="col-twelve">
                        <section>
                            <div className="content-media">
                                <div className="entry-text">
                                    <div className="entry-header">
                                        <h1 className="entry-title"><a href="single-standard.html">Total contacts</a></h1>
                                    </div>
                                </div>
                            </div>
                            <div className="primary-content">
                                <AdminContacts />
                            </div>
                        </section>
                    </div>
                </div>
            </section>
        </>
    )
}

export default Contacts