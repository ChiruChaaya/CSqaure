import Navbar from "./compenents/Navbar";
import About from "./sections/About";
import Contact from "./sections/Contact";
import Home from "./sections/Home";
import Prices from "./sections/Prices";
import Services from "./sections/Service";



export default function App() {
  return (
    <div className="min-h-svh scroll-smooth bg-[#183A3B] text-white">
      <Navbar />
      <Home />
      <About/>
      <Services/>
      <Prices/>
      <Contact/>
    </div>
  );
}