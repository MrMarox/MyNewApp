import "./Opinions.scss";
const data = {
    ID: "Bu Dian Turjiah",
    contents:
        "My data is absolutely secured here, I can shopping with no worries. Totally recommend!",
    title: "What are People Said",
    src: "/avatar.png",
    subtitle:
        "Here is a couple of testimonials from our loyal users that trust Chika as a secure shopping and transaction partner.",
};

export default function Opinions() {
    return (
        <>
            <div className="opinions">
                <div className="opinions_title">
                    <h2 className="title">{data.title}</h2>
                    <h4 className="subtitle">{data.subtitle}</h4>
                </div>
                <div className="opinions_boxes">
                    <div className="card">
                        <div className="card_avatar">
                            <img src={data.src} alt="avatar" />
                        </div>
                        <div className="card_text">
                            <h4 className="content">{data.contents}</h4>
                            <p className="id">{data.ID}</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_avatar">
                            <img src={data.src} alt="avatar" />
                        </div>
                        <div className="card_text">
                            <h4 className="content">{data.contents}</h4>
                            <p className="id">{data.ID}</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card_avatar">
                            <img src={data.src} alt="avatar" />
                        </div>
                        <div className="card_text">
                            <h4 className="content">{data.contents}</h4>
                            <p className="id">{data.ID}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
