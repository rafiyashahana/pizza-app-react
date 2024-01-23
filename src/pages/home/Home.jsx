import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import Menu from "../../pages/menu/Menu";
import BestSeller from "../../components/bestSeller/BestSeller";
import styles from "./Home.module.css";
import Footer from "../../components/footer/Footer";
import Hero from "../../components/hero/Hero";

const Home = () => {
  return (
    <div className={styles.container}>
      <Hero />
      <BestSeller />
      <About />
      <Menu />
      <Contact />
      <Footer />
    </div>
  );
};
export default Home;
