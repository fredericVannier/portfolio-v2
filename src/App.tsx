import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import Webdev from "./Pages/Webdev";
import Graphist from "./Pages/Graphist";
import Home from "./Pages/Home";
import Contact from "./Pages/Contact";
import Topit from "./Pages/Topit";
import SpaceExplorer from "./Pages/SpaceExplorer";
import Petsit from "./Pages/Petsit";
import Cyberpunk from "./Pages/Cyberpunk";
import Avatar from "./Pages/Avatar";
import EsportLogo from "./Pages/EsportLogo";
import Agora from "./Pages/Agora";
import Projets from "./Pages/Projets";
import SideMenu from "./components/SideMenu";
import Button from "./components/Button";
import Name from "./components/Name";
import MobileNav from "./components/MobileNav";
import CyberpunkLogo from "./Pages/CyberpunkLogo";
import IcoSystem from "./Pages/IcoSystem";

const App = () => {
  return (
    <Router>
      <SideMenu />
      <Button />
      <Name />
      <MobileNav />
      <div className="w-full h-full">
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="/web" element={<Webdev />} />
          <Route path="/graphist" element={<Graphist />} />
          <Route path="/topit" element={<Topit />} />
          <Route path="/space-explorer" element={<SpaceExplorer />} />
          <Route path="/petsit" element={<Petsit />} />
          <Route path="/icoSystem" element={<IcoSystem />} />
          <Route path="/cyberpunk" element={<Cyberpunk />} />
          <Route path="/avatar" element={<Avatar />} />
          <Route path="/esport" element={<EsportLogo />} />
          <Route path="/agora-coaching" element={<Agora />} />
          <Route path="/projets" element={<Projets />} />
          <Route path="/cyberpunk-logo" element={<CyberpunkLogo />} />
        </Routes>
      </div>
    </Router>
  );
};

export default App;
