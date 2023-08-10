export default function Subtitle({
    children,
}: {
    children: JSX.Element | string;
}) {
    return <h2 className="subtitle">{children}</h2>;
}
