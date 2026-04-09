import { Link } from "react-router-dom";

const Name = () => {
  return (
    <div className="hidden md:block pl-[5vw] pt-[8vh] fixed z-[2]">
      <Link to="/">
        <p className="text-[1.3rem] font-[200] tracking-[0.7rem] text-white hover:text-accent transition-colors"
           style={{ fontVariantCaps: "all-small-caps" }}>
          Frédéric
          <br />
          Vannier
        </p>
      </Link>
    </div>
  );
};

export default Name;
