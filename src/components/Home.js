import React, { Component } from "react";
import image1 from "../SAAM-1966.39.3_1.jpg";
import image2 from "../SAAM-1966.39.6_1.jpg";
import About from "./About";
import Post from './Post';
import Project from './Project';
import Showcase from './Showcase';


class Home extends Component {
  render() {
    return (
      <main className="home">
        <img
          src={image1}
          alt="key blue"
          className="home__image fixed home absolute center-fixed object-cover w-full h-full bg-size-cover"
        />
        <section className="relative justify-center min-h-screen min-w-screen pt-80 lg:pt-64 px-8">
          <h1 className="text-6xl font-bold text-gray-900 cursive leading-none lg:leading snug home-name cols-3">
            Hello.

          </h1>
          <h1 className="text-6xl font-bold text-gray-900 cursive leading-none lg:leading snug home-name cols-3">
            I'm Sam.
            <br className="margin-2"/>
          </h1>
          <button style={{hover:"bounce"}} className="text-3xl bg-gray-900 hover:bg-gray-700 text-white cursive font-bold py-4 px-8 rounded-full">
            View Projects
          </button>
          <button className="text-3xl bg-purple-900 hover:bg-purple-700 text-white cursive font-bold py-4 px-8 rounded-full ml-3 mt-3">
            View Resume
          </button>
        </section>
      </main>
    );
  }
}

export default Home;
