import "./assets/styles/global.scss";
// import Footer from "./modules/Footer";
import Banner from "./modules/Banner";
import Home from "./containers/Home/Home";
import Sponsors from "./containers/Sponsors/Sponsors";
import Security from "./containers/Security/Security";
import Activity from "./containers/Activity/Activity";
import Opinions from "./containers/Opinions/Opinions";
import Newsletter from "./containers/Newsletter/Newsletter";

function App() {
    return (
        <>
            <Banner />
            <Home />
            <Sponsors />
            <Security />
            <Activity />
            <Opinions />
            <Newsletter />
            {/* <Footer /> */}
        </>
    );
}

export default App;
