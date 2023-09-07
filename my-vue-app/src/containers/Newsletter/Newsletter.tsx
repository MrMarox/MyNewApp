import "./Newsletter.scss";
const title = "Subscribe to Our Newsletter and Get a 10% Off Coupon Code";
export default function Newsletter() {
    return (
        <>
            <div className="newsletter">
                <div className="newsletter__title">
                    <h2>{title}</h2>
                </div>
                <div>
                    <label className="newsletter__input">
                        <input
                            className="newsletter__text"
                            type="text"
                            placeholder="Enter your e-mail here"
                        ></input>
                        <button className="newsletter__button-input">
                            Subscribe
                        </button>
                    </label>
                </div>
            </div>
        </>
    );
}
