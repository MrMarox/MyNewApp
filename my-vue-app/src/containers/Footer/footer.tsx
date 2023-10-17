import "./footer.scss";

export default function Footer() {
    return (
        <footer className="footer">
            <div className="container flex">
                <div className="footer__logo">
                    <a className="footer__logo-wrapper" href="#">
                        <img src="/doya-logo.png" />
                    </a>
                    <p>ul. Przemysłowa 234, Tarnów 33-100</p>
                </div>
                <div className="footer__text">
                    <p>© Doya™, 2021. All rights reserved.</p>
                    <p>
                        Obrazki zastosowane w projekcie są użyte jedynie w
                        celach wizualizacyjnych.
                    </p>
                </div>
            </div>
        </footer>
    );
}
