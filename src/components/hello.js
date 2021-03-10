import Wiki from '../1.png';
import House from '../SAAM-1966.39.3_1.jpg';
import imageAbout from "../http___cdn.cnn.com_cnnnext_dam_assets_200501171629-home-computers-9.jpg";
import imageBlue from '../pexels-steve-johnson-1509534.jpg';
import moose from '../IMG_4384.jpg';
import { SocialIcon } from "react-social-icons";
import './About.css';
import imageBain from '../IMG_4402.jpg';
import '../App.css';

function Showcase() {
    return (
      <div>
        <img

          src={House}
          alt="key blue"
          className="home bg-attachment-fixed home__image no-repeat absolute center-relative object-cover w-full h-full bg-size-cover rgb(40, 204, 86)"
        />
        <div className="showcase">
          <div className="container">
            <h1 className=" app-title text-6xl font-bold text-gray-100 border-rounded-sm bg-blue-600 cursive leading-none lg:leading snug home-name cols-3 rounded">
              About Me

            </h1>
<hr/>
            <div className="relative rounded-sm shadow-lg bg-blue-400 w-full flex flex-row flex-wrap p-2 antialiased" style={
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
                  <div className="text-normal text-white hover:text-gray-200 cursor-pointer py-6 "><span className="border-b border-dashed pb-1" >> Currently living in South Florida and VERY eager to relocate!</span></div>
                    <button className=" border-2 border-gray-300 hover:border-opacity-50 p-3 bg-blue-400 shadow-md float text-2xl bg-opacity-50 hover:border-white  text-white cursive font-bold py-2 px-2  mx-auto my-5px rounded">
                      View Resumé
                    </button>
                    <div className="certificates">
                      <img
                        className="rounded-sm border-2 border-black border-opacity-40 p-3 bg-blue-300 shadow-md float"
                      src="https://udemy-certificate.s3.amazonaws.com/image/UC-082f3e8d-b8a8-4e84-89ae-06447f4fb9d5.jpg?v=1614761713000" alt=""/>
                    </div>
                </div>
              </div>
            </div>

          </div>
          </div>

        </div>


    )
}

export default Showcase
