import Subtitle from "../../../core/Subtitle";

export default function Text({
    NameID,
    subtitleTEXT,
    location,
}: {
    NameID: string;
    subtitleTEXT: string;
    location: string;
}) {
    return (
        <>
            <div className="card_avatar">
                <img src={location} alt="avatar" />
            </div>
            <div className="card_text">
                <Subtitle>{subtitleTEXT}</Subtitle>
                <p>{NameID}</p>
            </div>
        </>
    );
}
