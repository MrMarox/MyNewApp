import "./Newsletter.scss";
const title = "Subscribe to Our Newsletter and Get a 10% Off Coupon Code";
export default function Newsletter() {
    return (
        <>
            <div className="newsletter">
                <div className="newsletter_title">
                    <h2>{title}</h2>
                </div>
                <div className="newsletter_input">
                    <label>
                        <input
                            className="text"
                            type="text"
                            placeholder="Enter your e-mail here"
                        ></input>
                        <button className="input">Subscribe</button>
                    </label>
                </div>
            </div>
        </>
    );
}
