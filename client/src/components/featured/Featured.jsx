import useFetch from "../../hooks/useFetch";
import "./featured.css";

const Featured = () => {
  return (
    <div className="featured">
      <div className="featuredItem">
        <img
          src="https://i.pinimg.com/474x/f7/b8/ee/f7b8ee522de61a8d05ee200b1c077d81.jpg"
          alt="nairobi city"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Nairobi</h1>
          <h2>3events</h2>
        </div>
      </div>
      
      <div className="featuredItem">
        <img
          src="https://i.pinimg.com/474x/b5/23/6c/b5236c45649305578641f366aad27145.jpg"
          alt="Kajiado city"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Kajiado</h1>
          <h2> 4events</h2>
        </div>
      </div>
      <div className="featuredItem">
        <img
          src="https://i.pinimg.com/474x/a1/d4/cb/a1d4cb9f2fe8c724860e14d8014ed620.jpg"
          alt="Thika city"
          className="featuredImg"
        />
        <div className="featuredTitles">
          <h1>Thika town</h1>
          <h2>5events</h2>
        </div>
      </div>
    </div>
  );
};

export default Featured;
