import { BrowserRouter, Routes, Route } from "react-router-dom";
import Homepage from "./pages/Homepage";
import About from "./pages/About";
import Membership from "./pages/Membership";
import PPAprofessionals from "./pages/PPAprofessionals";
import CPIDprofessionals from "./pages/CPIDprofessionals";
import DSIprofessionals from "./pages/DSIprofessionals";
import Members from "./pages/Members";
import Register from "./pages/Register";
import DSIpersonaldeltail from "./pages/DSIpersonaldetail";
import { library } from "@fortawesome/fontawesome-svg-core";
import { fas } from "@fortawesome/free-solid-svg-icons";

library.add(fas);

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Homepage />} />
        <Route path="about" element={<About />} />
        <Route path="membership" element={<Membership />} />
        <Route path="ppa-professionals" element={<PPAprofessionals />} />
        <Route path="cpid-professionals" element={<CPIDprofessionals />} />
        <Route path="dsi-professionals" element={<DSIprofessionals />} />
        <Route path="members" element={<Members />} />
        <Route path="register" element={<Register />} />
        <Route path="dsi/:id" element={<DSIpersonaldeltail />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
