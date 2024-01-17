import Navbar from "../../components/navbar/Navbar";
import Hero from "../../components/hero/Hero";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import BestSeller from "../../components/bestSeller/BestSeller";
// import styles from "./Home.module.css";
const Home = () => {
  return (
    <div>
      <Navbar />
      <Hero />
      <BestSeller />
      <About />
      <Contact />
    </div>
  );
};
export default Home;
