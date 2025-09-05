import CGVdata from '../../data/CGVdata.json';

import './CGV.css';

const CGV = () => {
    return (
        <main id="cgv-container">
            <h1>Conditions Générales de Vente (CGV)</h1>
            {CGVdata.CGV.map(({ article, title, content }) => (
                <section key={article}>
                    <h2>Article {article} - {title}</h2>
                    <p>{content}</p>
                </section>
            ))}
        </main>
    );
};

export default CGV;
