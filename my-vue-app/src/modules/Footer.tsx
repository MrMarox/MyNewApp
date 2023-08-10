import "../styles/Footer.scss";

export default function Footer() {
    return (
        <div className="footer">
            <div className="left">
                <img src="../image/logo.png" alt="website-logo" />
                <a>
                    Helping people from data and privacy leak especially when
                    transaction.
                </a>
                <div className="socials">
                    <div className="icon">.</div>
                    <div className="icon">.</div>
                    <div className="icon">.</div>
                </div>
            </div>
            <div className="right">
                <ul className="menu">
                    <a>About</a>
                    <li className="menu-item">Company</li>
                    <li className="menu-item">Pricing</li>
                    <li className="menu-item">Profile</li>
                    <li className="menu-item">Careers</li>
                </ul>
                <ul className="menu">
                    <a>Resources</a>
                    <li className="menu-item">Contact</li>
                    <li className="menu-item">Application</li>
                    <li className="menu-item">FAQ</li>
                    <li className="menu-item">Features</li>
                </ul>
                <ul className="menu">
                    <a>Legals</a>
                    <li className="menu-item">Privacy Policy</li>
                    <li className="menu-item">Copyright</li>
                    <li className="menu-item">Disclaimer</li>
                    <li className="menu-item">Terms</li>
                </ul>
            </div>
        </div>
    );
}
