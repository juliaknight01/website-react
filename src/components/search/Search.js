import React from "react";
import "./SearchStyles.css";

function Search() {
  return (
    <div name="book" className="search">
      <div className="container">
        <div className="left">
          <div className="right"></div>
          <div className="search-col-2">
            <div className="box"></div>
            <div className="box"></div>
          </div>
        </div>
        <div className="right">
          <div className="promo">
            <h4 className="save">GET AN ADDITIONAL 15% OFF</h4>
            <p className="offers">VIEW ALL CURRENT OFFERS</p>
          </div>
          <form>
            <div className="date">
              <div className="input-wrap">
                <label>Check-In</label>
                <input type="date" />
              </div>
              <div className="input-wrap">
                <label>Check-Out</label>
                <input type="date" />
              </div>
            </div>
            <button>Availibilities</button>
          </form>
        </div>
      </div>
    </div>
  );
}

export default Search;
