import React from 'react'
import './Resumé.css';
import bg from '../bg.jpg';
import moon from '../moon.png';
import mountain from '../mountain.png';
import road from '../road.png';

function Resumé() {
    return (
        <div className="container">

    <section>
      <img src={bg} id="bg" />
      <img src={moon} id="moon" />
      <img src={mountain} id="mountain" />
      <img src={road} id="road" />
      <h2 id="text">Sam Pike - UI/UX</h2>
    </section>
    <section style="margin-top: 100px;">
<iframe src="https://docs.google.com/document/d/e/2PACX-1vTrohn3B2Vm1J2xiBAfD6RBAm8WVqRnYNL6s0ri8UKn6CskjSzbc08TeMOIDAWQThs6BDfcUMENjnTf/pub?embedded=true"style="width:600px; height:100vh;" frameborder="0"></iframe>
    </section>
        </div>
    )
}

export default Resumé
