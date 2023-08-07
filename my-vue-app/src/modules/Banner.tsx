import "../styles/Banner.scss";

export default function Banner() {
  return (
    <header>
      <img src="../image/logo.png" alt="website-logo" />
      <ul className="menu">
        <li className="menu-item">Pricing</li>
        <li className="menu-item">Features</li>
        <li className="menu-item">Blog</li>
        <li className="menu-item">Try Free</li>
      </ul>
    </header>
  );
}
