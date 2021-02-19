import React from "react";
import image from "../SAAM-1966.39.3_1.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="key blue"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl text-gray-900 font-bold cursive leading-none lg:leading snug home-name">
          Hello. I'm <span className="sc-145t7ak-0 eJlubi">Sam</span>
        </h1>
      </section>
    </main>
  );
}
