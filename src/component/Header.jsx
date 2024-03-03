import React from "react";
import { LOGO_SRC, ROUTES } from "../utils/Constants";
import { Link } from "react-router-dom";

const Header = () => {
  return (
    <div>
      <div className=" border-2 border-red-600">
        <Link to={ROUTES.HOME}>
          <img className="w-24" src={LOGO_SRC} alt="logo" />
          <h4 className="test-red">Video Player</h4>
        </Link>
      </div>
    </div>
  );
};

export default Header;
