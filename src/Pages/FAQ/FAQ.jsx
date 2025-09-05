import FAQData from '../../data/FAQdata.json';

import './FAQ.css';
const FAQ = () => {
    return (
        <main id="faq-container">
            <h1>Foire Aux Questions (FAQ)</h1>
            {FAQData.faq.map(({ question, answer }, index) => (
                <section key={index}>
                    <h2>{question}</h2>
                    <p>{answer}</p>
                </section>
            ))}
        </main>
    );
};

export default FAQ;
