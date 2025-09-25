import React, { useState } from 'react';
import './ContactForm.css';

const ContactForm = () => {
    const [emailError, setEmailError] = useState('');
    const [phoneError, setPhoneError] = useState('');
    const [submitStatus, setSubmitStatus] = useState('');

    const validateEmail = (email) => {
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return emailRegex.test(email);
    };

    const validatePhone = (phone) => {
        const phoneRegex = /^\d+$/;
        return phoneRegex.test(phone);
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        const form = event.target;
        const formData = new FormData(form);
        const email = formData.get('email');
        const phone = formData.get('phone');

        if (!validateEmail(email)) {
            setEmailError('L\'adresse email doit contenir un "@" et un "."');
            return;
        }

        if (!validatePhone(phone)) {
            setPhoneError('Le numéro de téléphone doit contenir uniquement des chiffres.');
            return;
        }

        setEmailError('');
        setPhoneError('');

        try {
            const response = await fetch('https://api.web3forms.com/submit', {
                method: 'POST',
                body: formData,
            });

            if (response.ok) {
                setSubmitStatus('Votre message a été envoyé avec succès !');
                form.reset();
            } else {
                setSubmitStatus('Une erreur est survenue, veuillez réessayer.');
            }
        } catch (error) {
            setSubmitStatus('Une erreur est survenue, veuillez réessayer.');
        }
    };

    return (
        <section id="contactForm">
            <form onSubmit={handleSubmit}>
                <input type="hidden" name="access_key" value="c5cbc35b-cd76-4f8d-833b-40eb24242a57" />
                <fieldset>
                    <input type="text" name="first_name" id="first_name" aria-label="Prénom" placeholder='Nom' required />
                    <input type="text" name="last_name" id="last_name" aria-label="Nom" placeholder='Prénom' required />
                </fieldset>
                <fieldset>
                    <input type="email" name="email" id="email" aria-label="E-mail" placeholder='Email' required />
                    <input type="text" name="phone" id="phone" aria-label="Téléphone" placeholder='Téléphone' required />
                </fieldset>
                <textarea name="message" id="message" rows="5" aria-label="Message" placeholder='Message' className="form-control" required></textarea>
                {emailError && <p className="error-message">{emailError}</p>}
                {phoneError && <p className="error-message">{phoneError}</p>}
                {submitStatus && <p className="submit-status">{submitStatus}</p>}
                <input className='send-btn' type="submit" value="Envoyer" />
            </form>
        </section>
    );
};

export default ContactForm;
