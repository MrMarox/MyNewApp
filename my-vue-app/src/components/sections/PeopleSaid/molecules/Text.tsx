import Subtitle from "../../../core/Subtitle";
import Title2 from "../../../core/Title2";

export default function Text({
    titleTEXT,
    subtitleTEXT,
}: {
    titleTEXT: string;
    subtitleTEXT: string;
}) {
    return (
        <>
            <div className="title_text">
                <Title2>{titleTEXT}</Title2>
                <Subtitle>{subtitleTEXT}</Subtitle>
            </div>
        </>
    );
}
