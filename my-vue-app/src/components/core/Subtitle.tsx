import "../../styles/atom/Subtitle.scss";

export default function Subtitle({
    children,
}: {
    children: JSX.Element | string;
}) {
    return <h4 className="subtitle">{children}</h4>;
}
