import './footer.css';

const Footer = () => {
    return (
        <footer className="footer">
        <p>© {new Date().getFullYear()} Marvel Characters Viewer</p>
            <p>
                Datos obtenidos desde la <a href="https://developer.marvel.com/" target="_blank" rel="noopener noreferrer">API oficial de Marvel</a>
            </p>
        </footer>

    );
};

export default Footer;
