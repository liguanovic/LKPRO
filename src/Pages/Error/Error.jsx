import { useNavigate } from 'react-router-dom';

import './Error.css';

const Error = () => {
    const navigate = useNavigate();

    const goToHome = () => {
        navigate('/');
    };

    return (
        <main className="error-page">
            <h1>404 - Page Not Found</h1>
            <p>Désolé, la page demandée n'existe pas.</p>
            <button onClick={goToHome}>Retour à l'accueil</button>
        </main>
    );
};

export default Error;
