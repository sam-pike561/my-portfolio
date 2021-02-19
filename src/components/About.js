import React from "react";
import image from "../SAAM-1966.39.6_1.jpg";

export default function Home() {
  return (
    <main>
      <img
        src={image}
        alt="key blue"
        className="absolute object-cover w-full h-full"
      />
      <section className="relative flex justify-center min-h-screen pt-12 lg:pt-64 px-8">
        <h1 className="text-6xl font-bold text-gray-900 cursive leading-none lg:leading snug home-name">
          About Me!
        </h1>
      </section>
    </main>
  );
}
