import "./Security.scss";
import "../../assets/styles/colors.scss";
const data = {
    title: "100% Totally Secured Virtual Credit Card.",
    subtitle:
        "Create your own virtual credit card and we will protect your data and prevent it from data leak while you use that.",
    src: "/pic2.png",
    buttonText: "Try For Free",
};

export default function Security() {
    return (
        <>
            <div className="security">
                <div className="security_left">
                    <img src={data.src} alt="website-logo1111" />
                </div>
                <div className="security_right">
                    <h1 className="title">{data.title}</h1>
                    <h4 className="subtitle">{data.subtitle}</h4>
                    <button className="button">{data.buttonText}</button>
                </div>
            </div>
        </>
    );
}
