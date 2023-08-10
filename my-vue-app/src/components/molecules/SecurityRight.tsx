import Subtitle from "../atom/Subtitle";
import Title from "../atom/Title";

export default function SecurityRight ({titleTEXT, subtitleTEXT}: {titleTEXT: string; subtitleTEXT: string;}){
    return(
        <>
            <Title>{titleTEXT}</Title>
            <Subtitle>{subtitleTEXT}</Subtitle>
        </>
    )
}
