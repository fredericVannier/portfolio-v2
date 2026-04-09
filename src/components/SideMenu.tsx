import { Link } from "react-router-dom";

const SideMenu = () => {
  return (
    <div className="hidden md:block fixed right-0 w-[200px] z-[99]">
      <div className="flex justify-evenly">
        <div className="h-screen w-px bg-white/10" />
        <div className="flex flex-col justify-between items-center text-accent text-[1.1rem] font-bold">
          <Link to="/projets">
            <p className="mt-[8vh] hover:text-accent-yellow transition-colors">Projets</p>
          </Link>
          <Link to="/contact">
            <p className="mb-[8vh] hover:text-accent-yellow transition-colors">Contact</p>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SideMenu;
