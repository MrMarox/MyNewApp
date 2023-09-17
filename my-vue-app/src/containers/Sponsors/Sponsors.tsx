import "./Sponsors.scss";

const data = {
    srcI: "/sponsor1.png",
    srcII: "/sponsor2.png",
    srcIII: "/sponsor3.png",
    srcIV: "/sponsor4.png",
    srcV: "/sponsor5.png",
};
export default function Sponsors() {
    return (
        <>
            <div className="sponsors">
                <img
                    className="sponsors__image"
                    src={data.srcI}
                    alt="website-logo1111"
                />

                <img
                    className="sponsors__image"
                    src={data.srcII}
                    alt="website-logo1111"
                />

                <img
                    className="sponsors__image"
                    src={data.srcIII}
                    alt="website-logo1111"
                />

                <img
                    className="sponsors__image"
                    src={data.srcIV}
                    alt="website-logo1111"
                />

                <img
                    className="sponsors__image"
                    src={data.srcV}
                    alt="website-logo1111"
                />
            </div>
        </>
    );
}
