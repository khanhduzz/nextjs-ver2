import { useState } from 'react';
import Notification from '@/common/components/Notification';
import { ContactDTO, contacts } from '../models/Contact';

const ContactForm = () => {
    const [formData, setFormData] = useState({
        cName: '',
        cEmail: '',
        cWebsite: '',
        cMessage: ''
    });

    const [notification, setNotification] = useState<{ message: string; type: 'success' | 'error' } | null>(null);

    const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value
        });
    };

    const handleSubmit = async (e: React.FormEvent) => {
        e.preventDefault();

        try {
            const response = await fetch('/api/contact-form', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                setNotification({ message: 'Form submitted successfully', type: 'success' });
                console.log('Form submitted successfully');
                let contact: ContactDTO = {
                    cName: formData.cName,
                    cEmail: formData.cEmail,
                    cWebsite: formData.cWebsite,
                    cMessage: formData.cMessage
                }
                const existingContacts = sessionStorage.getItem("contacts");
                let contactsArray: ContactDTO[] = existingContacts ? JSON.parse(existingContacts) : [];

                contactsArray.push(contact);

                sessionStorage.setItem("contacts", JSON.stringify(contactsArray));
                console.log("Contact: ", contacts);

                setFormData({ cName: '', cEmail: '', cWebsite: '', cMessage: '' });
            } else {
                setNotification({ message: 'Form submission failed', type: 'error' });
                console.error('Form submission failed');
            }
        } catch (error) {
            setNotification({ message: 'An error occurred. Please try again.', type: 'error' });
            console.error('An error occurred:', error);
        }
    };

    return (
        <>
            <div>
                {notification && (
                    <Notification
                        message={notification.message}
                        type={notification.type}
                        onClose={() => setNotification(null)}
                    />
                )}
            </div>
            <form name="cForm" id="cForm" method="post" onSubmit={handleSubmit}>
                <fieldset>
                    <div className="form-field">
                        <input
                            name="cName"
                            type="text"
                            id="cName"
                            className="full-width"
                            placeholder="Your Name"
                            value={formData.cName}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <input
                            name="cEmail"
                            type="text"
                            id="cEmail"
                            className="full-width"
                            placeholder="Your Email"
                            value={formData.cEmail}
                            onChange={handleChange}
                            required
                        />
                    </div>
                    <div className="form-field">
                        <input
                            name="cWebsite"
                            type="text"
                            id="cWebsite"
                            className="full-width"
                            placeholder="Website"
                            value={formData.cWebsite}
                            onChange={handleChange}
                        />
                    </div>
                    <div className="message form-field">
                        <textarea
                            name="cMessage"
                            id="cMessage"
                            className="full-width"
                            placeholder="Your Message"
                            value={formData.cMessage}
                            onChange={handleChange}
                            required
                        ></textarea>
                    </div>
                    <button type="submit" className="submit button-primary full-width-on-mobile">
                        Submit
                    </button>
                </fieldset>
            </form>
        </>
    );
}

export default ContactForm;
