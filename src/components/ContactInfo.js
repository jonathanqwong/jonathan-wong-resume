import React, { useState, useEffect } from 'react';
import contactInfoData from '../mock/contact.json';

const ContactInfo = () => {
    const [contactInfo, setContactInfo] = useState(null);
    const email = contactInfo?.email;
    const phone = contactInfo?.phone;
    const linkedin = contactInfo?.linkedin;
    const github = contactInfo?.github;

    useEffect(() => {
        setContactInfo(contactInfoData?.contactInfo);
        // fetch('/data.json')
        //     // .then(response => response.json())
        //     .then(data => setContactInfo(contactInfoData))
        //     .catch(error => console.error('Error fetching contact info:', error));
    }, []);

    if (!contactInfo) {
        return <div>Loading...</div>;
    }

    return (
        <section className="contact-info">
            <h2>Contact Information</h2>
            <ul>
                <li>Email: {email}</li>
                <li>Phone: {phone}</li>
                <li>LinkedIn: {linkedin}</li>
                <li>GitHub: {github}</li>
            </ul>
        </section>
    );
};

export default ContactInfo;
