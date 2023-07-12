import "./searchItem.css";

const SearchItem = () => {
  return (
    <div className="searchItem">
      <img
        src="https://i.pinimg.com/474x/2e/57/a8/2e57a8904eca15dfa7eb3619b4009b45.jpg"
        alt="Nyayo stadium"
        className="siImg"
      />
      <div className="siDesc">
        <h1 className="siTitle">Nyayo Stadium</h1>
        <span className="siDistance">Mombasa Road</span>
        <span className="siTaxiOp">Free child ticket</span>
        <span className="siSubtitle">
          Stadium seat
        </span>
        <span className="siFeatures">
          most seats with centre view
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great price today!
        </span>
      </div>
      <div className="siDetails">
        <div className="siRating">
          <span>Excellent</span>
          <button>8.9</button>
        </div>
        <div className="siDetailTexts">
          <span className="siPrice">$11</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <button className="siCheckButton">See availability</button>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
