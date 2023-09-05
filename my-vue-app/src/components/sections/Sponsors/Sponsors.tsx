import "../../../styles/organisms/Sponsors.scss";

export default function Sponsors() {
    const srcI = "/sponsor1.png";
    const srcII = "/sponsor2.png";
    const srcIII = "/sponsor3.png";
    const srcIV = "/sponsor4.png";
    const srcV = "/sponsor5.png";
    return (
        <>
            <div className="sponsors">
                <img src={srcI} alt="website-logo1111" />

                <img src={srcII} alt="website-logo1111" />

                <img src={srcIII} alt="website-logo1111" />

                <img src={srcIV} alt="website-logo1111" />

                <img src={srcV} alt="website-logo1111" />
            </div>
        </>
    );
}
