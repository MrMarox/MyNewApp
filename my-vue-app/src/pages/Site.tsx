import Header from "../containers/Header/Header";
import Showcase from "../containers/Showcase/Showcase";
import Application from "../containers/Application/application";
import AR from "../containers/Ar/ar";
import Offers from "../containers/offers/offers";
import Socialmedia from "../containers/Socialmedia/socialmedia";
import Footer from "../containers/Footer/footer";

export default function Site() {
    return (
        <>
            <Header />
            <Showcase />
            <Application />
            <AR />
            <Offers />
            <Socialmedia />
            <Footer />
        </>
    );
}
