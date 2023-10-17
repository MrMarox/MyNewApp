import "./offers.scss";

export default function Offers() {
    return (
        <section className="offers section">
            <div className="offers__container flex grid">
                <img src="/offer.png" className="offers__img--desktop" />
                <div className="offers__text">
                    <span className="label">Orginalna platforma</span>
                    <h2 className="heading heading--2">
                        Najgorętsze oferty w internecie
                    </h2>
                    <p>
                        Znajdz idealny prezent lub przedmioty codziennego użytku
                        na wyciągniecie ręki
                    </p>
                </div>
                <img src="/offer-mobile.png" className="offers__img--mobile" />
            </div>
        </section>
    );
}
