import "../../styles/atom/InputEmail.scss";

export default function InputEmail() {
    return (
        <>
            <label>
                <input type="text" placeholder="Enter your e-mail here"></input>
                <button className="input">Subscribe</button>
            </label>
        </>
    );
}
