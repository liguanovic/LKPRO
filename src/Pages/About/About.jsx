import about from "../../data/about.json";
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
                        section.paragraphs.map((p, i) => <p key={i}>{p}</p>)}

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
                                        <span>{section.contactInfo.phone2}</span>
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
