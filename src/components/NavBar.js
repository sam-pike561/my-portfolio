import React from "react";
import { NavLink } from "react-router-dom";
import { SocialIcon } from "react-social-icons";

export default function NavBar() {
  return (
    <header className="bg-blue-500">
      <div className="container mx-auto flex justify-between">
        <nav className="flex">
          <NavLink
            to="/"
            exact
            activeClassName="text-black"
            className="inline-flex items-center py-6 px-3 mr-4 text-blue-100 hover-text-green-800 text-4xl font-bold cursive tracking-widest"
          >
            Samuel Pike - UI Developer
          </NavLink>
          <NavLink
            to="/post"
            activeClassName="text-blue-100 bg-blue-700"
            className="inline-flex items-center py-6 px-3 mr-4 rounded text-blue-200 hover-text-green-800"
          >
            Blog Posts
          </NavLink>
          <NavLink
            to="/project"
            activeClassName="text-blue-100 bg-blue-700"
            className="inline-flex items-center py-6 px-3 mr-4 rounded text-blue-200 hover-text-green-800"
          >
            Projects
          </NavLink>
          <NavLink
            to="/about"
            activeClassName="text-blue-50 bg-blue-700"
            className="inline-flex items-center py-6 px-3 mr-4 rounded text-blue-200 hover-text-green-800"
          >
            About Me!
          </NavLink>
        </nav>
        <div className="inline-flex py-3 px-3 my-6">
          <SocialIcon
            url="https://www.linkedin.com/in/samuel-pike-557350207/"
            className="mr-4"
            target="_blank"
            bgColor="rgb(31, 97, 185)"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="mailto:sampike1994@gmail.com"
            className="mr-4"
            bgColor="rgb(31, 97, 185)"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
          <SocialIcon
            url="https://twitter.com/pike_webdev"
            className="mr-4"
            bgColor="rgb(31, 97, 185)"
            target="_blank"
            fgColor="#fff"
            style={{ height: 35, width: 35 }}
          />
        </div>
      </div>
    </header>
  );
}
