import Title from "../../../core/Title";

export default function Text({ titleTEXT }: { titleTEXT: string }) {
    return (
        <>
            <div className="title_text">
                <Title>{titleTEXT}</Title>
            </div>
        </>
    );
}
