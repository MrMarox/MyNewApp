import "./Showcase.scss";

export default function Showcase() {
    return (
        <>
            <section className="showcase">
                <div className="showcase__container flex">
                    <div className="showcase__text">
                        <h1 className="heading heading--1">
                            Aplikacja na zakupy do gadżetów i prezentów
                        </h1>
                        <p>
                            Zyskaj 10% zniżki na pierwsze zamówienie, wydając
                            ponad $20 na dowolny produkt!
                        </p>
                        <a href="#" className="btn">
                            Pobierz aplikację
                        </a>
                    </div>
                    <img
                        src="/showcase.png"
                        alt="Zdjęcie sekcji głównej"
                        className="showcase__img showcase__img--desktop"
                    />
                    <img
                        src="/showcase-mobile.png"
                        alt="Zdjęcie sekcji głównej - mobile"
                        className="showcase__img showcase__img--mobile"
                    />
                </div>
            </section>
        </>
    );
}
