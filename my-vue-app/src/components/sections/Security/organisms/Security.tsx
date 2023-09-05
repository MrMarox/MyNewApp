import SecurityRight from "../molecules/SecurityRight";
import SecurityLeft from "../molecules/SecurityLeft";
import "../../../../styles/organisms/Security.scss";

export default function Security() {
    const titleText = "100% Totally Secured Virtual Credit Card.";
    const subText =
        " Create your own virtual credit card and we will protect your data and prevent it from data leak while you use that.";
    const buttonText = "Try For Free";
    const src = "/pic2.png";
    return (
        <>
            <div className="security">
                <SecurityLeft location={src} />
                <SecurityRight
                    titleTEXT={titleText}
                    subtitleTEXT={subText}
                    buttonTEXT={buttonText}
                />
            </div>
        </>
    );
}
