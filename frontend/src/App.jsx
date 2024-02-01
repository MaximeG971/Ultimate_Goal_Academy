import { useMediaQuery } from "react-responsive";
import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import NavbarDesktop from "./components/navbarDesktop/NavbarDesktop";
import Footer from "./components/footer/Footer";

function App() {
  const isDesktop = useMediaQuery({ minWidth: 700 });

  return (
    <div className="nav">
      {isDesktop && <NavbarDesktop />}
      {!isDesktop && <Navbar />}
      <Footer />
      <Outlet />
    </div>
  );
}

export default App;
