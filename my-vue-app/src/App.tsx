import "./App.scss";
// import Footer from "./modules/Footer";
import Banner from "./modules/Banner";
// import Home from "./modules/Home";
import Security from "./components/sections/Security/organisms/Security";
import Start from "./components/sections/Start/organisms/Start";
import Sponsors from "./components/sections/Sponsors/Sponsors";
import Activity from "./components/sections/Activity/organisms/Activity";
import PeopleSaid from "./components/sections/PeopleSaid/organisms/PeopleSaid";
import Newsletter from "./components/sections/Newsletter/organisms/Newsletter";

function App() {
    return (
        <>
            <Banner />
            {/* <Home /> */}
            <Start />
            <Sponsors />
            <Security />
            <Activity />
            <PeopleSaid />
            <Newsletter />
            {/* <Footer /> */}
        </>
    );
}

export default App;
