import "./Header.scss";
import "./Navigaton.scss";
export default function Header() {
    return (
        <>
            <div id="overlay" className="overlay hidden"></div>
            <header className="header">
                <div className="header__container flex">
                    <a href="#" className="header__logo">
                        <img
                            src="/doya-logo.png"
                            alt="Doya - logo aplikacji"
                            className="logo"
                        />
                    </a>
                    <nav className="navigation--desktop">
                        <ul>
                            <li>
                                <a href="" className="active ">
                                    Strona główna
                                </a>
                            </li>
                            <li>
                                <a href="">Blog</a>
                            </li>
                            <li>
                                <a href="">FAQ</a>
                            </li>
                            <li>
                                <a href="">Kontakt</a>
                            </li>
                        </ul>
                    </nav>

                    <a href="#" className="btn btn--small header__btn">
                        Pobierz aplikację
                    </a>
                    <button id="toggle-mobile" className="btn-menu">
                        <svg
                            width="20"
                            height="16"
                            viewBox="0 0 20 16"
                            fill="none"
                            xmlns="http://www.w3.org/2000/svg"
                        >
                            <path
                                opacity="0.6"
                                d="M0.124103 1.33333C0.124103 0.596954 0.721057 0 1.45744 0H18.6667C19.403 0 20 0.596954 20 1.33333C20 2.06971 19.403 2.66667 18.6667 2.66667H1.45744C0.721056 2.66667 0.124103 2.06971 0.124103 1.33333ZM0 8C0 7.26362 0.596954 6.66667 1.33333 6.66667H18.6667C19.403 6.66667 20 7.26362 20 8C20 8.73638 19.403 9.33333 18.6667 9.33333H1.33333C0.596955 9.33333 0 8.73638 0 8ZM0 14.6667C0 13.9303 0.596953 13.3333 1.33333 13.3333H18.6667C19.403 13.3333 20 13.9303 20 14.6667C20 15.403 19.403 16 18.6667 16H1.33333C0.596953 16 0 15.403 0 14.6667Z"
                                fill="#737373"
                            />
                        </svg>
                    </button>

                    <div id="menu-mobile" className="navigation--mobile hidden">
                        <div className="menu">
                            <div className="flex menu__top">
                                <p className="menu__top-heading">Menu</p>

                                <button id="hide-menu" className="btn-menu">
                                    <svg
                                        width="16"
                                        height="16"
                                        viewBox="0 0 16 16"
                                        fill="none"
                                        xmlns="http://www.w3.org/2000/svg"
                                    >
                                        <path
                                            fill-rule="evenodd"
                                            clip-rule="evenodd"
                                            d="M5.1725 7.999L0.5865 3.413C-0.1955 2.633 -0.1955 1.365 0.5865 0.585C1.3665 -0.195 2.6345 -0.195 3.4145 0.585L8.0005 5.171L12.5865 0.585C13.3665 -0.195 14.6345 -0.195 15.4145 0.585C16.1945 1.365 16.1945 2.633 15.4145 3.413L10.8285 7.999L15.4145 12.585C16.1945 13.365 16.1945 14.633 15.4145 15.413C14.6345 16.193 13.3665 16.193 12.5865 15.413L8.0005 10.827L3.4145 15.413C2.6345 16.193 1.3665 16.193 0.5865 15.413C-0.1955 14.633 -0.1955 13.365 0.5865 12.585L5.1725 7.999Z"
                                            fill="#5956E9"
                                        />
                                    </svg>
                                </button>
                            </div>
                            <nav className="menu__list">
                                <ul>
                                    <li>
                                        <a href="" className="active ">
                                            Strona główna
                                        </a>
                                    </li>
                                    <li>
                                        <a href="">Blog</a>
                                    </li>
                                    <li>
                                        <a href="">FAQ</a>
                                    </li>
                                    <li>
                                        <a href="">Kontakt</a>
                                    </li>
                                </ul>
                            </nav>
                            <div className="menu__cta">
                                <a href="#" className="btn btn--small">
                                    Pobierz aplikację
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </header>
            <script src="./script.js"></script>
        </>
    );
}
