import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";
import '../App.css';

export default function NavBar() {
  return (
    <header className="sticky shadow-md bg-blue-700 flex-1 overflow-y-auto box-shadow">
      <div className="container mx-auto">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-black"
            className="inline-flex items-center py-6 px-3 mr-4 text-blue-100 rounded hover-text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Samuel Pike - UI/UX Developer
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="bg-blue-800 shadow text-blue-500"
            className="inline-flex items-center py-6 px-3 mr-4 rounded text-blue-200 hover-text-green-800 tracking-widest"
          >
            My Portfolio
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="  bg-blue-800 text-blue-500 shadow"
            className="inline-flex items-center py-6 px-3 mr-4 rounded text-blue-200 hover-text-green-800 tracking-widest"
          >
            My Skills
          </NavLink>
          <div className="nav__socialIcons py-3 px-3 my-6 pt-6 flex-end">
            <SocialIcon
              url="https://www.linkedin.com/in/samuel-pike-557350207/"
              className="mr-4"
              target="_blank"
              bgColor="rgb(24, 74, 140)"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="mailto:sampike1994@gmail.com"
              className="mr-4"
              bgColor="rgb(24, 74, 140)"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://github.com/sam-pike561"
              className="mr-4"
              bgColor="rgb(24, 74, 140)"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
            <SocialIcon
              url="https://twitter.com/pike_webdev"
              className="mr-4"
              bgColor="rgb(24, 74, 140)"
              target="_blank"
              fgColor="#fff"
              style={{ height: 35, width: 35 }}
            />
          </div>
        </nav>

      </div>
    </header>
  );
}
