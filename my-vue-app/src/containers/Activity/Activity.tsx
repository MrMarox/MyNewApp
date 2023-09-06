import "./Activity.scss";
import "../../assets/styles/colors.scss";
const data = {
    title: "Easy to Track All Your Banking Activity.",
    subtitle:
        "Menage everything easily with us, you can track all your card expenses directly in Chika. We also protect your:",
    src: "/pic3.png",
    buttonText: "Get Started",
};

export default function Activity() {
    return (
        <>
            <div className="activity">
                <div className="activity_left">
                    <h1 className="title">{data.title}</h1>
                    <h4 className="subtitle">{data.subtitle}</h4>
                    <button className="button">{data.buttonText}</button>
                </div>
                <div className="activity_right">
                    <img src={data.src} alt="website-logo1111" />
                </div>
            </div>
        </>
    );
}
