import { Link } from "react-router-dom";
import "./searchItem.css";

const SearchItem = ({item}) => {
  return (
    <div className="searchItem">
      <img
        src={item.photos[0]} alt="" className="siImg" />
      <div className="siDesc">
        <h1 className="siTitle">{item.name}</h1>
        <span className="siDistance">{item.MatchDescription} event </span>
        <span className="siTaxiOp">Free child ticket</span>
        <span className="siSubtitle">
          Stadium seat
        </span>
        <span className="siFeatures">
          {item.type}
        </span>
        <span className="siCancelOp">Free cancellation </span>
        <span className="siCancelOpSubtitle">
          You can cancel later, so lock in this great y!
        </span>
      </div>
      <div className="siDetails">
      {item.rating && <div className="siRating">
          <span>Excellent</span>
          <button>{item.rating}</button>
        </div>}
        <div className="siDetailTexts">
        <span className="siPrice">${item.cheapestSeat}</span>
          <span className="siTaxOp">Includes taxes and fees</span>
          <Link to={`/stadium/${item._id}`}>
          <button className="siCheckButton">See availability</button>
          </Link>
        </div>
      </div>
    </div>
  );
};

export default SearchItem;
