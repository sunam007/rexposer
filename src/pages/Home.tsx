import HeroAboutUs from "../components/Home/HeroAboutUs";
import HeroSlider from "../components/Home/HeroSlider";
import Portfolio from "../components/Home/Portfolio";
import Services from "../components/Home/Services";

const Home = () => {
  return (
    <>
      <div>
        <HeroSlider />
        <HeroAboutUs />
        <Portfolio />
        <Services />
      </div>
    </>
  );
};

export default Home;
