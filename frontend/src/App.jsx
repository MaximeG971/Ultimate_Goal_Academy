import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";
import NavbarDesktop from "./components/navbarDesktop/NavbarDesktop";

function App() {
  return (
    <div className="nav">
      <NavbarDesktop />
      <Navbar />
      <Outlet />
    </div>
  );
}

export default App;
