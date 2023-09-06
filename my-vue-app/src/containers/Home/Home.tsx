import "./Home.scss";
import "../../assets/styles/colors.scss";
const data = {
    title: "Smart Transaction, Secured Privacy.",
    subtitle:
        "Pay everything with us to avoid data and privacy leak to your personal credit card even all you banking accounts.",
    src: "/pic1.png",
    buttonText: "Get Started",
};

export default function Home() {
    return (
        <>
            <div className="home">
                <div className="home_left">
                    <h1 className="title">{data.title}</h1>
                    <h4 className="subtitle">{data.subtitle}</h4>
                    <button className="button">{data.buttonText}</button>
                </div>
                <div className="home_right">
                    <img src={data.src} alt="website-logo1111" />
                </div>
            </div>
        </>
    );
}
