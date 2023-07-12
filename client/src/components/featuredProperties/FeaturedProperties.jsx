import "./featuredProperties.css";

const FeaturedProperties = () => {
  return (
    <div className="fp">
      <div className="fpItem">
        <img
          src="https://i.pinimg.com/474x/62/dc/9d/62dc9d89fe7ce8bd137d9fc0d7fcc8de.jpg"
          alt="summer party poster"
          className="fpImg"
        />
        <span className="fpName">Summer party</span>
        <span className="fpCity">Nyayo stadium,Nairobi</span>
        <span className="fpPrice">Starting from $30</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://i.pinimg.com/474x/ff/4d/08/ff4d0877517d7d335c21ce36932f6cf8.jpg"
          alt=""
          className="fpImg"
        />
        <span className="fpName">Summer art exhibition</span>
        <span className="fpCity">Makongeni, Thika</span>
        <span className="fpPrice">Starting from $10</span>
        <div className="fpRating">
          <button>9.3</button>
          <span>Exceptional</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://i.pinimg.com/474x/9c/17/ee/9c17eebf142683f97ece1670796de0a6.jpg"
          alt="Match day"
          className="fpImg"
        />
        <span className="fpName">AFC vs Kakamega HBZ</span>
        <span className="fpCity">Makongeni, Thika</span>
        <span className="fpPrice">Starting from $9</span>
        <div className="fpRating">
          <button>8.8</button>
          <span>Excellent</span>
        </div>
      </div>
      <div className="fpItem">
        <img
          src="https://i.pinimg.com/474x/47/af/45/47af45e5a59d6414300574145ef3f53c.jpg"
          alt="Match day"
          className="fpImg"
        />
        <span className="fpName">Kaloleni vs Eastleigh</span>
        <span className="fpCity">Kajiado county</span>
        <span className="fpPrice">Starting from $15</span>
        <div className="fpRating">
          <button>8.9</button>
          <span>Excellent</span>
        </div>
      </div>
    </div>
  );
};

export default FeaturedProperties;
