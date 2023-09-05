import ActivityLeft from "../molecules/ActivityLeft";
import ActivityRight from "../molecules/ActivityRight";
import "../../../../styles/organisms/Activity.scss";

export default function activity() {
    const titleText = "Easy to Track All Your Banking Activity";
    const subText =
        "Menage everything easily with us, you can track all your card expenses directly in Chika. We also protect your:";
    const src = "/pic3.png";
    const buttonText = "Get Started";
    return (
        <>
            <div className="activity">
                <ActivityLeft
                    titleTEXT={titleText}
                    subtitleTEXT={subText}
                    buttonTEXT={buttonText}
                />
                <ActivityRight location={src} />
            </div>
        </>
    );
}
