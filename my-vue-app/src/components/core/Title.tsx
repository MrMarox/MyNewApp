import "../../styles/atom/Title.scss";

export default function Title({
    children,
}: {
    children: JSX.Element | string;
}) {
    return <h2 className="title">{children}</h2>;
}
