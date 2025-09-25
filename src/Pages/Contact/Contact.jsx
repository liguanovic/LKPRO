import ContactForm from "../../components/ContactForm/ContactForm";
import "./Contact.css";

const Contact = () => {
    return (
        <main>
            <section id="contact">
                <h1>Nous contacter</h1>
                <p>Pour toutes les questions ou demandes de devis, veuillez utiliser le formulaire ci-dessous nnous vous recontacterons dans un délai de 24 à 48 heures.</p>

                <ContactForm />
            </section>
        </main>
    )
}

export default Contact