import { Outlet } from "react-router-dom";
import Topbar from "./components/Topbar";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";

export default function App() {
  return (
    <>
      <Topbar />
      <Navbar />
      <main>
        <Outlet />
      </main>
      <Footer/>
    </>
  );
}
