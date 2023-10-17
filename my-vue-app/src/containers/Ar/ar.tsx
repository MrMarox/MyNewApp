import "./ar.scss";

export default function ar() {
    return (
        <section className="ar section">
            <div className="ar__container grid">
                <div className="ar__text">
                    <h2 className="heading heading--1">Poznaj produkty w AR</h2>
                    <p>
                        Czy próbowałeś rzeczywistości rozszerzonej? Przestań
                        patrzeć na ndune galerie i zacznij doświadczać każdego
                        przedmiotu.
                    </p>
                </div>
                <img
                    src="/ar.png"
                    alt="ekran sklepu"
                    className="ar__img ar__img--desktop"
                />
                <img
                    src="/ar-mobile.png"
                    alt="ekran sklepu - mobile"
                    className="ar__img ar__img--mobile"
                />
            </div>
        </section>
    );
}
