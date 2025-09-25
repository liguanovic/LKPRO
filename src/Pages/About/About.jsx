import about from "../../data/about.json";
import logoClub from '../../data/logos.json';
import ReactMarkdown from "react-markdown";

import './About.css';

const About = () => {
    return (
        <main className="about-page">
            <header className="about-header">
                <h1>{about.title}</h1>
                <figure className="aboutFigure">
                    <img
                        className="aboutPicture"
                        src={`${process.env.PUBLIC_URL}/${about.image.src}`}
                        alt={about.image.alt}
                    />
                    <figcaption className="aboutCaption">
                        <span className="aboutCaptionTop">
                            Équipementier sportif — Personnalisation de tenues
                        </span>
                        <span className="aboutCaptionBottom">
                            matériel pour clubs, associations et équipes sportives
                        </span>
                    </figcaption>
                </figure>
            </header>

            {about.sections.map((section, index) => (
                <section key={index}>
                    <h2>{section.heading}</h2>

                    {section.paragraphs &&
                        section.paragraphs.map((p, i) => (
                            <ReactMarkdown key={i}>
                                {p}
                            </ReactMarkdown>
                        ))}

                    {section.list && (
                        <ul>
                            {section.list.map((item, i) => (
                                <li key={i}>
                                    <i className="fa-solid fa-check"></i>
                                    <span>{item}</span>
                                </li>
                            ))}
                        </ul>
                    )}

                    {section.heading === "Ils nous font confiance" && (
                        <section className="confiance">
                            <h2>Parmis eux</h2>
                            <p>Plusieurs clubs amateurs, professionnels et associations nous font confiance, parmi eux :</p>
                            <div className="logo-slider">
                                <div className="logo-track">
                                    {logoClub.concat(logoClub).map((logo, index) => (
                                        <img
                                            key={index}
                                            src={`${process.env.PUBLIC_URL}/${logo.src}`}
                                            alt={logo.alt}
                                            className="confiance-logo"
                                        />
                                    ))}
                                </div>
                            </div>
                        </section>
                    )}

                    {section.heading === "Contactez-nous" && (
                        <section className="contact-info">
                            {section.contactInfo && (
                                <div>
                                    <p>
                                        <i className="fa-solid fa-envelope"></i>
                                        <a href={`mailto:${section.contactInfo.email}`}>
                                            {section.contactInfo.email}
                                        </a>
                                    </p>

                                    <p>
                                        <i className="fa-solid fa-phone"></i>
                                        <span>{section.contactInfo.phone}</span>
                                    </p>
                                    <p>
                                        <i className="fa-brands fa-whatsapp"></i>
                                        <a className="whatsapp-link"
                                            href="https://api.whatsapp.com/send?phone=33678502276&text=Bonjour,%20je%20vous%20contacte%20depuis%20votre%20site."
                                            target="_blank"
                                            rel="noopener noreferrer"
                                        >
                                            {section.contactInfo.phone2}
                                        </a>
                                    </p>
                                </div>
                            )}
                        </section>
                    )}

                    {section.image && (
                        <figure className="aboutFigure">
                            <img
                                className="aboutPicture"
                                src={`${process.env.PUBLIC_URL}/${section.image.src}`}
                                alt={section.image.alt}
                            />
                            <figcaption className="aboutCaption">
                                <span className="aboutCaptionTop">{section.image.caption}</span>
                            </figcaption>
                        </figure>
                    )}
                </section>
            ))}
        </main>
    );
};

export default About;
