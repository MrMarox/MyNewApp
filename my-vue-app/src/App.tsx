import "./assets/styles/global.scss";
// import Footer from "./modules/Footer";
import Banner from "./modules/Banner";
import Home from "./containers/Home/Home";
import Sponsors from "./containers/Sponsors/Sponsors";
import Security from "./containers/Security/Security";
import Activity from "./containers/Activity/Activity";

function App() {
    return (
        <>
            <Banner />
            <Home />
            <Sponsors />
            <Security />
            <Activity />
            {/* <PeopleSaid /> */}
            {/* <Newsletter />  */}
            {/* <Footer /> */}
        </>
    );
}

export default App;
