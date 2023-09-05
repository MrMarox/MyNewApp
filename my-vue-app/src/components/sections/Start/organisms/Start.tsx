import StartLeft from "../molecules/StartLeft";
import StartRight from "../molecules/StartRight";
import "../../../../styles/organisms/Start.scss";

export default function Start() {
    const titleText = "Smart Transaction, Secured Privacy.";
    const subText =
        "Pay everything with us to avoid data and privacy leak to your personal credit card even all you banking accounts.";
    const src = "/pic1.png";
    const buttonText = "Get Started";
    return (
        <>
            <div className="start">
                <StartLeft
                    titleTEXT={titleText}
                    subtitleTEXT={subText}
                    buttonTEXT={buttonText}
                />
                <StartRight location={src} />
            </div>
        </>
    );
}
