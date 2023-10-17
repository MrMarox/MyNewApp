import "./application.scss";

export default function Application() {
    return (
        <section className="application section">
            <div className="application__container flex">
                <div className="flex">
                    <p className="application__info">Jak działa aplikacja</p>
                </div>
                <div className="grid">
                    <img
                        src="/application.png"
                        className="application__img--desktop"
                    />
                    <div className="application__text">
                        <span className="label">Utwórz konto</span>
                        <h2 className="heading heading--2">
                            Odkryj orginalne produkty
                        </h2>
                        <p>
                            Istnieje ponad 950 kategorii akualizowanych
                            codziennie na podstawiepopularnych recenzji witryn i
                            ocen użytkowników
                        </p>
                    </div>
                    <img
                        src="/application-mobile.png"
                        className="application__img--mobile"
                    />
                </div>
            </div>
        </section>
    );
}
