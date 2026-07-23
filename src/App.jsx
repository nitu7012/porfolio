import HeroSection from "./componenst/hero/HeroPage";
import Navbar from "./componenst/navBar/NavBarPage";
import SelectedWorks from "./componenst/selectWork/SelectedWorks";
import ServicesSection from "./componenst/services/ServicesSection";

const App = () => {
  return (
    <>
    <Navbar/>
    <HeroSection/>
    <ServicesSection/>
    <SelectedWorks/>
    </>
  );
};

export default App;