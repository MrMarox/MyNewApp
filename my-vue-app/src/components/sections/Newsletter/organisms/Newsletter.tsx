import Title from "../molecules/Title";
import Input from "../molecules/Input";

import "../../../../styles/organisms/Newsletter.scss";

export default function Newsletter() {
    const titleText =
        "Subscribe to Our Newsletter and Get a 10% Off Coupon Code";
    return (
        <>
            <div className="newsletter">
                <div className="newsletter_title">
                    <Title titleTEXT={titleText} />
                </div>
                <div className="newsletter_input">
                    <Input />
                </div>
            </div>
        </>
    );
}
