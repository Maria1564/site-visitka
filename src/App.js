import AboutUs from "./Pages/AboutUs/AboutUs";
import Home from "./Pages/Home/Home";
import Portfolio from "./Pages/Portfolio/Portfolio";
import Reviews from "./Pages/Reviews/Reviews";
import Footer from "./layouts/Footer/Footer";
import Navbar from "./layouts/Navbar/Navbar";
import { Routes, Route } from "react-router-dom";

function App() {
  return (
    <div className="App">
      <Navbar />

      <main>
        <Routes>
          <Route path="/" element={<Home />}></Route>
          <Route path="/aboutUs" element={<AboutUs />}></Route>
          <Route path="/portfolio" element={<Portfolio />}></Route>
          <Route path="/reviews" element={<Reviews />}></Route>
        </Routes>
      </main>

      <Footer />
      
    </div>
  );
}

export default App;
