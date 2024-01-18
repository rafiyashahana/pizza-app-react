import Home from "./pages/home/Home";
import Navbar from "./components/navbar/Navbar";
import Menu from "./pages/menu/Menu";
import { BrowserRouter, Routes, Route } from "react-router-dom";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Navbar />}>
          <Route index element={<Home />} />
          <Route path="/menu" element={<Menu />} />
          <Route path="/contact" element={<Home />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
