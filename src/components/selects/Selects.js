import React from "react";
import "./SelectsStyles.css";

import Wedding from "../../assets/wedding.jpg";
import Birthday from "../../assets/birthday.jpg";
import Graduation from "../../assets/graduation-parties.jpg";
import Festivals from "../../assets/festivals.jpg";
import Art from "../../assets/art-exhibitions.jpg";
import Holidays from "../../assets/holidays.jpg";
import SelectsImg from "../SelectsImg/SelectsImg";

function Selects() {
  return (
    <div name="views" className="selects">
      <div className="container">
        <SelectsImg bgImg={Wedding} text="Wedding" />
        <SelectsImg bgImg={Birthday} text="Birthdays" />
        <SelectsImg bgImg={Graduation} text="Graduation" />
        <SelectsImg bgImg={Festivals} text="Festivals" />
        <SelectsImg bgImg={Art} text="Art Exhibitions" />
        <SelectsImg bgImg={Holidays} text="Holidays" />
      </div>
    </div>
  );
}

export default Selects;
