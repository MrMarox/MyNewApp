import SecurityRight from "../molecules/SecurityRight";
import SecurityLeft from "../molecules/SecurityLeft";

export default function Security() {
    const titleText = "100% Totally Secured Virtual Credit Card.";
    const subText =
        " Create your own virtual credit card and we will protect your data and prevent it from data leak while you use that.";
    const src = "../../image/logo.png";
    return (
        <>
            <SecurityRight titleTEXT={titleText} subtitleTEXT={subText} />
            <SecurityLeft location={src} />
        </>
    );
}
