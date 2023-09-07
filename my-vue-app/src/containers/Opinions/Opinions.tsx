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
                <div className="opinions__textbox">
                    <h2 className="opinions__title">{data.title}</h2>
                    <h4 className="opinions__subtitle">{data.subtitle}</h4>
                </div>
                <div className="opinions__cardbox">
                    <div className="card">
                        <div className="card__avatar">
                            <img
                                className="card__image"
                                src={data.src}
                                alt="avatar"
                            />
                        </div>
                        <div className="card__text">
                            <h4 className="card__content">{data.contents}</h4>
                            <p className="card__id">{data.ID}</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__avatar">
                            <img
                                className="card__image"
                                src={data.src}
                                alt="avatar"
                            />
                        </div>
                        <div className="card__text">
                            <h4 className="card__content">{data.contents}</h4>
                            <p className="card__id">{data.ID}</p>
                        </div>
                    </div>
                    <div className="card">
                        <div className="card__avatar">
                            <img
                                className="card__image"
                                src={data.src}
                                alt="avatar"
                            />
                        </div>
                        <div className="card__text">
                            <h4 className="card__content">{data.contents}</h4>
                            <p className="card__id">{data.ID}</p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
}
