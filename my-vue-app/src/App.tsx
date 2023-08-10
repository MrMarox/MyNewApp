import "./App.scss";
import Footer from "./modules/Footer";
import Banner from "./modules/Banner";
import Home from "./modules/Home";
import Security from "./components/organism/Security";


function App() {
  return (
    <>
      <Banner />
      <Home />
      <Security/>
      <Footer />
    </>
  );
}

export default App;
