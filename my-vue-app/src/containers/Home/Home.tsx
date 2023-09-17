import "./Home.scss";

const data = {
    title: "Smart Transaction, Secured Privacy.",
    subtitle:
        "Pay everything with us to avoid data and privacy leak to your personal credit card even all you banking accounts.",
    src: "/pic1.png",
    buttonText: "Get Started",
};

export default function Home() {
    return (
        <div className="home">
            <div className="home__left">
                <h1 className="home__title">{data.title}</h1>
                <h4 className="home__subtitle">{data.subtitle}</h4>
                <button className="home__button">{data.buttonText}</button>
            </div>
            <div className="home__right">
                <img
                    className="home__image"
                    src={data.src}
                    alt="website-logo1111"
                />
            </div>
        </div>
    );
}
