import React from "react";
import logoImg from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router";
import { ChartLine, Clock3, House } from "lucide-react";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  return (
    <nav className="shadow">
      <div className="flex justify-between p-4  container mx-auto">
        <img src={logoImg} alt="" />
        <ul className="flex gap-2">
          <li>
            <MyNavLink to={"/"}>
              <House />
              Home
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/timeline"}>
              <Clock3 />
              Timeline
            </MyNavLink>
          </li>
          <li>
            <MyNavLink to={"/stats"}>
              <ChartLine />
              Stats
            </MyNavLink>
          </li>
        </ul>
      </div>
    </nav>
  );
};

export default Navbar;
