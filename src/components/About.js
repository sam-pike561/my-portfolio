import React from "react";
import image from "../SAAM-1966.39.3_1.jpg";
import imageAbout from "../http___cdn.cnn.com_cnnnext_dam_assets_200501171629-home-computers-9.jpg";
import imageBlue from '../pexels-steve-johnson-1509534.jpg';
import moose from '../IMG_4384.jpg';
import { SocialIcon } from "react-social-icons";
import './About.css';
import imageBain from '../IMG_4402.jpg';
import '../App.css';


export default function Home() {
  return (
      <main className="home">

        <img
          src={image}
          alt="key blue"
          className="home home__image no-repeat absolute center-relative object-cover w-full h-full bg-size-cover rgb(40, 204, 86)"
        />

      <section className="mx-auto min-h-full min-w-100px  px-8">

          <br />
          <div className="relative margin-0
          flex flex-row flex-wrap p-2">
          <h1 className=" about-title text-6xl font-bold text-gray-100 border-rounded-sm bg-purple-700 cursive leading-none lg:leading snug home-name cols-3">
            About Me

          </h1>
            <div className="mx-auto w-1/2 padding__top">

              <div className="relative rounded-lg shadow-lg bg-green-800 w-full flex flex-row flex-wrap p-2 antialiased" style={
                {
                  "background-image": "url('https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
                  "background-repeat": "no-repeat",
                  "background-size": "cover",
                  "background-blend-mode": "multiply",
                }
              }
              >
                <div className="md:w-1/3 w-full align-middle border-double">
                  <img className=" bouncy rounded-sm shadow-lg antialiased border-2 border-green-700 border-opacity-40 p-3 bg-white shadow-md" src={moose} alt="me" />
                </div>
                <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
                  <div className="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
                    <div className="text-2xl text-white leading-tight cursive">Samuel Pike, React Developer, 26</div>
                    <div className="text-normal text-white hover:text-gray-200 cursor-pointer py-6 "><span className="border-b border-dashed border-gray-500 pb-1" >> +1 Year experience in React.js and Node.js!</span></div>
                    <div className="text-normal text-white hover:text-gray-200 cursor-pointer py-6 "><span className="border-b border-dashed border-gray-500 pb-1 cols-3" >> Building REST-ful APIs utilizing React, Node, MongoDB, Express, Firebase, Vercel, as well as Redux state management and Stripe for payment processing!  </span></div>
                    <div className="text-normal text-white hover:text-gray-200 cursor-pointer py-6 "><span className="border-b border-dashed border-gray-500 pb-1" >> Self-taught, self-managed and searching for full-time opportunity in UI/UX Development!</span></div>
                    <div className="text-normal text-white hover:text-gray-200 cursor-pointer py-6 "><span className="border-b border-dashed border-gray-500 pb-1" >> Currently living in South Florida and VERY eager to relocate!</span></div>
                    <button className=" border-2 border-green-600 border-opacity-40 p-3 bg-green-800 shadow-md float text-2xl bg-green-900 hover:border-gray-500 bg-green-700 text-white cursive font-bold py-2 px-2 rounded mx-auto my-5px">
                      View Resumé
                    </button>
                  </div>
                </div>
              </div>
              <div className=" md:w-1/3 flex home__row ">
                <img
                  className="rounded-sm border-2 border-black border-opacity-40 p-3 bg-blue-300 shadow-md float"
                src="https://udemy-certificate.s3.amazonaws.com/image/UC-ec1fedab-adaa-42e9-9ce7-06c0eb988a3c.jpg?v=1613199815000" alt=""/>

                <img
                  className="rounded-sm border-2 border-black border-opacity-40 p-3 bg-blue-300 shadow-md float"
                src="https://udemy-certificate.s3.amazonaws.com/image/UC-082f3e8d-b8a8-4e84-89ae-06447f4fb9d5.jpg?v=1614761713000" alt=""/>
              </div>
            </div>

          </div>
        </section>
      </main>
  );
}
