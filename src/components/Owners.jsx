import React from "react";
import photoA from '../assets/images/Mario and Adrian A.jpg'
import photoB from '../assets/images/Mario.jpg'

const Owners = (props) => {
  return (
    <div className="story">
      <div className="left-side">
        <h1>Little Lemon</h1>
        <h2>Mario and Adrian</h2>
        <p>Fueled by memories of family recipes, Mario and Adrian created Little Lemon. Together, with Mario's culinary magic and Adrian's warm hospitality, they share a slice of their heritage. Expect fresh, local ingredients, crafted into dishes that transport you to the heart of the Mediterranean. Come join us for a celebration of laughter, conversation, and delicious food!</p>
      </div>
      <div className="right-side">
        <img id="photoA" src={photoA} alt=""/>
        <img id="photoB" src={photoB} alt=""/>
      </div>
    </div>
  )
};

export default Owners;