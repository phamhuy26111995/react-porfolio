import React from "react";
import { Link } from "react-scroll";

const Header = () => {
  return (
    <header className="py-8">
      <div className="container mx-auto">
        <div className="flex justify-between items-center">
          <a href="#">
            <p className="text-2xl font-bold text-gradient">PHAM</p>
            <p className="text-2xl font-bold text-gradient">HUY</p>
          </a>
          <Link smooth="true" spy="true" to="contact">
            <button className="btn btn-sm">Work with me</button>
          </Link>
        </div>
      </div>
    </header>
  );
};

export default Header;
