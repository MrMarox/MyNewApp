import "./Security.scss";
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
                <div className="security__left">
                    <img
                        className="security__image"
                        src={data.src}
                        alt="website-logo1111"
                    />
                </div>
                <div className="security__right">
                    <h1 className="security__title">{data.title}</h1>
                    <h4 className="security__subtitle">{data.subtitle}</h4>
                    <button className="security__button">
                        {data.buttonText}
                    </button>
                </div>
            </div>
        </>
    );
}
