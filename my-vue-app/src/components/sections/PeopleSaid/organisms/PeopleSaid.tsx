import Text from "../molecules/Text";
import Box from "../molecules/Box";
import "../../../../styles/organisms/PeopleSaid.scss";

export default function PeopleSaid() {
    const ID = "Bu Dian Turjiah";
    const contents =
        "My data is absolutely secured here, I can shopping with no worries. Totally recommend!";
    const titleText = "What are People Said";
    const src = "/avatar.png";
    const subTitle =
        "Here is a couple of testimonials from our loyal users that trust Chika as a secure shopping and transaction partner.";
    return (
        <>
            <div className="container">
                <div className="title">
                    <Text titleTEXT={titleText} subtitleTEXT={subTitle} />
                </div>
                <div className="boxes">
                    <div className="card">
                        <Box
                            NameID={ID}
                            subtitleTEXT={contents}
                            location={src}
                        />
                    </div>
                    <div className="card">
                        <Box
                            NameID={ID}
                            subtitleTEXT={contents}
                            location={src}
                        />
                    </div>
                </div>
            </div>
        </>
    );
}
