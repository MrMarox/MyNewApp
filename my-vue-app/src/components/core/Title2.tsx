import "../../styles/atom/Title2.scss";

export default function Title({
    children,
}: {
    children: JSX.Element | string;
}) {
    return <h3 className="title">{children}</h3>;
}
