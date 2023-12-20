import React from 'react';
import './ContactPage.css';

const ContactPage = () => {
    return (
        <div className="contact-page-container">
            <h2>Contact Us</h2>
            <p>
                Contact us if you have any questions or feedback!{' '}
                <a href="mailto:animepage@gmail.com">animepage@gmail.com</a>.
            </p>
        </div>
    );
};

export default ContactPage;
