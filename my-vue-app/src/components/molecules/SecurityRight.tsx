import Subtitle from "../atom/Subtitle";
import Title from "../atom/Title";

function SecurityTitle ({title, subtitle}: {title: string; subtitle: string;}){
return(
        <>
            <Title>{Title}</Title>
            <Subtitle>{Subtitle}</Subtitle>
        </>
    )
}
