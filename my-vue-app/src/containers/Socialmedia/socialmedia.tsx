import "./socialmedia.scss";

export default function Socialmedia() {
    return (
        <section className="socialmedia section">
            <div className="socialmedia__container grid">
                <p className="socialmedia__text">
                    Hej! Obserwuj nas w mediach społecznościowych, aby nie
                    przegapić żadnej oferty.
                </p>
                <img className="socialmedia__img" src="/social.png" />
            </div>
        </section>
    );
}
