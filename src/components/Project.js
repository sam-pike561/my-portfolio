import React from 'react';
import imageAbout from "../http___cdn.cnn.com_cnnnext_dam_assets_200501171629-home-computers-9.jpg";
import moose from '../Moose.jpg';
import './About.css';


export default function Project() {
  return (
    <div>
      <img
        src={imageAbout}
        alt="key blue"
        className="home__image no-repeat absolute center-fixed object-cover w-full h-full
        bg-size-cover"
      />

      div
      <section className=" mx-auto min-h-screen lg:pt-16 px-8">

        <br/>
        <div className=" relative margin-0
        flex flex-row flex-wrap p-2">
          <div className="mx-auto w-2/3">

            <div className="rounded-lg shadow-lg bg-red-300 w-full flex flex-row flex-wrap p-4 antialiased " style={
              {
                "background-image": "url('https://images.unsplash.com/photo-1578836537282-3171d77f8632?ixlib=rb-1.2.1&ixid=eyJhcHBfaWQiOjEyMDd9&auto=format&fit=crop&w=1950&q=80')",
                "background-repeat": "no-repeat",
                "background-size": "cover",
                "background-blend-mode": "multiply",
              }
            }>
              <div className="md:w-1/3 w-full">
                <img className="rounded-lg shadow-lg antialiased" src={moose} />
              </div>
              <div className="md:w-2/3 w-full px-3 flex flex-row flex-wrap">
                <div className="w-full text-right text-gray-700 font-semibold relative pt-3 md:pt-0">
                  <div className="text-2xl text-white leading-tight cursive">Moose Pike, Branch Manager, 14 months</div>
                  <div className="text-normal text-gray-200 hover:text-gray-200 cursor-pointer py-6 cursive"><span className="border-b border-dashed border-gray-500 pb-1" >> 1 year experience in React and Node. Also, utilizing MERN and other tech for RESTful API creation.</span></div>
                  <button className=" float text-2xl bg-gray-900 hover:bg-purple-700 text-white cursive font-bold py-2 px-4 rounded-full mx-auto">
                    View Resumé
                  </button>
                </div>
              </div>
            </div>

          </div>
        </div>


      </section>
    </div>);

    }
