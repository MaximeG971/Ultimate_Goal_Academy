import { Outlet } from "react-router-dom";
import Navbar from "./components/navbar/Navbar";

function App() {
  return (
    <div className="nav">
      <Outlet />
      <Navbar />
    </div>
  );
}

export default App;
