import Featured from "../../components/featured/Featured";
import FeaturedProperties from "../../components/featuredProperties/FeaturedProperties";
import Footer from "../../components/footer/Footer";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Navbar from "../../components/navbar/Navbar";
import About from "../../components/about/about";
import PropertyList from "../../components/propertyList/PropertyList";
import "./home.css";

const Home = () => {
  return (
    <div>
      <Navbar />
      <Header/>
      <div className="homeContainer">
      <h1 className="homeTitle">Featured cities</h1>
        <Featured/>
        <h1 className="homeTitle">Browse by stadiums</h1>
        <PropertyList/>
        <h1 className="homeTitle">Events guests loved</h1>
        <FeaturedProperties/>
        <About/>
        <MailList/>
        <Footer/>
      </div>
    </div>
  );
};

export default Home;
