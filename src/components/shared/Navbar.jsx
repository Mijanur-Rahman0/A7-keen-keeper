import React from "react";
import logoImg from "../../assets/images/logo.png";
import { Link, NavLink } from "react-router";
import { ChartLine, Clock3, House } from "lucide-react";
import MyNavLink from "./MyNavLink";

const Navbar = () => {
  return (
    <>
      <nav className=" bg-base-100 shadow-sm">
        <div className="navbar container mx-auto">
        <div className="navbar p-1 container mx-auto">
          <div className="dropdown">
            <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                {" "}
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M4 6h16M4 12h8m-8 6h16"
                />{" "}
              </svg>
            </div>
            <ul
              tabIndex="-1"
              className="menu menu-sm dropdown-content bg-base-100 rounded-box z-1 mt-3 w-52 p-2 shadow"
              >
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
          <img src={logoImg} alt="" />
        </div>
        <div className="navbar hidden lg:flex justify-end">
          <ul className="menu menu-horizontal px-1 gap-2">
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
      </div>
      </nav>
{/* 
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
      </nav> */}
    </>
  );
};

export default Navbar;
