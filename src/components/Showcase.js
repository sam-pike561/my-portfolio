import React from 'react';
import './Showcase.css';
import Survstat from '../2.png';
import Amazon from '../3.png';
import Wiki from '../1.png';
import House from '../SAAM-1966.39.3_1.jpg';

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
            <div className="card">
              <a href="https://glacial-wave-16608.herokuapp.com/">
                <div className="face face1">
                  <div className="content">
                    <button className=" border-2 border-green-700 border-opacity-40 p-3 bg-green-800 shadow-md float text-2xl bg-green-900 hover:bg-green-700 text-white cursive font-bold py-2 px-2 rounded mx-auto my-5px">
                      GO TO APP
                    </button>
                    <img src={Survstat} alt=""/>
                  </div>
                </div>
              </a>
              <div className="face face2">
                <div className="content">
                  <p>This slick survey app first receives the client and brings them through Google's o-auth flow. This requires an Express server as well as PassportJS to gain permission from Google to access the client's profile information. A unique ID number is provided to the user who is asynchronously stored inside the database with Mongoose and MongoDB. Now registered, the user can pay to update credits with Stripe and Redux or click the survey icon and fill a template to email to customers, requiring a yes/no response. There is also a review page to confirm the information in the survey and the amount of credits required. Once clicked, the first response from each recipient triggers an update of state; changing and returning the survey results to the UI in individual project cards, inside the homepage, for the client to review the results.</p>
                  <a href="#">Source Code</a>
                </div>
              </div>
            </div>
            <div className="card">
              <a href="">
                <div className="face face1">
                  <div className="content">
                    <button className=" border-2 border-green-700 border-opacity-40 p-3 bg-green-800 shadow-md float text-2xl bg-green-900 hover:bg-green-700 text-white cursive font-bold py-2 px-2 rounded mx-auto my-5px">
                      GO TO APP
                    </button>
                    <img src={Amazon} alt=""
                    />
                  </div>
                </div>
              </a>
              <div className="face face2">
                <div className="content">
                  <p>  Fake online bookstore turned fake online behemoth -- This clone uses React and it's libraries to replicate the box-modeled aesthetic we know and love from the original app to a tee! React Router is for the navigation between home, sign-in and checkout routes in an SPA. Also, the lightweight React Context API is stored as an added data-layer. This in turn helps keep track of, and update, pieces of state determining user-authentication, shopping cart updates and additional checkout functionality... Firebase for hosting.</p>
                  <a href="#">Source Code</a>
                </div>
              </div>
            </div>
            <div className="card">
              <a href="https://widget-d0kajbcbj.vercel.app/">
                <div className="face face1">
                  <div className="content">
                    <button className=" border-2 border-green-700 border-opacity-40 p-3 bg-green-800 shadow-md float text-2xl bg-green-900 hover:bg-green-700 text-white cursive font-bold py-2 px-2 rounded mx-auto my-5px">
                      GO TO APP
                    </button>
                    <img src={Wiki} alt=""/>
                  </div>
                </div>
              </a>
              <div className="face face2">
                <div className="content">
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Quas cum cumque minus iste veritatis provident at.</p>
                  <a href="#">Source Code</a>
                </div>
              </div>
            </div>
            <strong>"The path of least resistance is rarely the path to wisdom."</strong>
          </div>

        </div>
      </div>

    )
}

export default Showcase
