import "../assets/styles/_global.scss";
import "../assets/styles/_reset.scss";
import "../assets/styles/_button.scss";
import "../assets/styles/_layout.scss";
import "../assets/styles/_colors.scss";
import "../assets/styles/_layout.scss";
import "../assets/styles/_mixins.scss";
import "../assets/styles/_utils.scss";
import "../assets/styles/_variables.scss";
import Home from "../containers/Home/Home";
import Sponsors from "../containers/Sponsors/Sponsors";
import Security from "../containers/Security/Security";
import Activity from "../containers/Activity/Activity";
import Opinions from "../containers/Opinions/Opinions";
import Newsletter from "../containers/Newsletter/Newsletter";

function App() {
    return (
        <>
            <Home />
            <Sponsors />
            <Security />
            <Activity />
            <Opinions />
            <Newsletter />
        </>
    );
}

export default App;
