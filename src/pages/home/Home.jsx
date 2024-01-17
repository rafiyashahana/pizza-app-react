import Header from "../../components/header/Header";
import About from "../../components/about/About";
import Contact from "../../components/contact/Contact";
import BestSeller from "../../components/bestSeller/BestSeller";
// import styles from "./Home.module.css";
const Home = () => {
  return (
    <div>
      <Header />
      <BestSeller />
      <About />
      <Contact />
    </div>
  );
};
export default Home;
