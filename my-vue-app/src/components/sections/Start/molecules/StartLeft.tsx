import Subtitle from "../../../core/Subtitle";
import Title from "../../../core/Title";
import Button from "../../../core/Button";

export default function StartLeft({
    titleTEXT,
    subtitleTEXT,
    buttonTEXT,
}: {
    titleTEXT: string;
    subtitleTEXT: string;
    buttonTEXT: string;
}) {
    return (
        <>
            <div className="start_left">
                <Title>{titleTEXT}</Title>
                <Subtitle>{subtitleTEXT}</Subtitle>
                <Button>{buttonTEXT}</Button>
            </div>
        </>
    );
}
