import "./hotel.css";
import Navbar from "../../components/navbar/Navbar";
import Header from "../../components/header/Header";
import MailList from "../../components/mailList/MailList";
import Footer from "../../components/footer/Footer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faCircleArrowLeft,
  faCircleArrowRight,
  faCircleXmark,
  faLocationDot,
} from "@fortawesome/free-solid-svg-icons";
import { useState } from "react";

const Hotel = () => {
  const [slideNumber, setSlideNumber] = useState(0);
  const [open, setOpen] = useState(false);

  const photos = [
    {
      src: "https://i.pinimg.com/474x/2e/57/a8/2e57a8904eca15dfa7eb3619b4009b45.jpg",
    },
    {
      src: "https://i.pinimg.com/474x/12/7b/c2/127bc2bbcfabf83e071bd29fa7e6d96b.jpg",
    },
    {
      src: "https://i.pinimg.com/474x/53/68/09/5368096abbb6b4bb8b9d24bfe8547a93.jpg",
    },
    {
      src: "https://i.pinimg.com/474x/24/b4/ec/24b4ecbab46c9712190a48cbe8a79386.jpg",
    },
    {
      src: "https://i.pinimg.com/474x/8f/f8/38/8ff8388938e85c7c59ace2dd8875161b.jpg",
    },
    {
      src: "https://i.pinimg.com/474x/d2/f8/46/d2f8464a29134162f9655dbc24ea74f0.jpg",
    },
  ];

  const handleOpen = (i) => {
    setSlideNumber(i);
    setOpen(true);
  };

  const handleMove = (direction) => {
    let newSlideNumber;

    if (direction === "l") {
      newSlideNumber = slideNumber === 0 ? 5 : slideNumber - 1;
    } else {
      newSlideNumber = slideNumber === 5 ? 0 : slideNumber + 1;
    }

    setSlideNumber(newSlideNumber)
  };

  return (
    <div>
      <Navbar />
      <Header type="list" />
      <div className="hotelContainer">
        {open && (
          <div className="slider">
            <FontAwesomeIcon
              icon={faCircleXmark}
              className="close"
              onClick={() => setOpen(false)}
            />
            <FontAwesomeIcon
              icon={faCircleArrowLeft}
              className="arrow"
              onClick={() => handleMove("l")}
            />
            <div className="sliderWrapper">
              <img src={photos[slideNumber].src} alt="" className="sliderImg" />
            </div>
            <FontAwesomeIcon
              icon={faCircleArrowRight}
              className="arrow"
              onClick={() => handleMove("r")}
            />
          </div>
        )}
        <div className="hotelWrapper">
          <button className="bookNow">Reserve or Book Now!</button>
          <h1 className="hotelTitle">Nyayo staium</h1>
          <div className="hotelAddress">
            <FontAwesomeIcon icon={faLocationDot} />
            <span>Mombasa road Nairobi</span>
          </div>
          <span className="hotelDistance">
            Excellent location 3000 seats
          </span>
          <span className="hotelPriceHighlight">
            Book a seat here and get free child seat
          </span>
          <div className="hotelImages">
            {photos.map((photo, i) => (
              <div className="hotelImgWrapper" key={i}>
                <img
                  onClick={() => handleOpen(i)}
                  src={photo.src}
                  alt=""
                  className="hotelImg"
                />
              </div>
            ))}
          </div>
          <div className="hotelDetails">
            <div className="hotelDetailsTexts">
              <h1 className="hotelTitle">Watch a match in th heart of the city</h1>
              <p className="hotelDesc">
              Nyayo National Stadium is a multi-purpose stadium in Nairobi, Kenya. 
              It is located at the square of Mombasa Road, Langata Road and the Aerodrome Road. 
              It is approximately two kilometers from the City Center, directly opposite Nairobi Mega Mall, formerly known as Nakumatt Mega. The stadium was built in 1983 for a capacity of 15,000.
              It is currently used mostly for football matches.
              The popular AFC Leopards football club plays most of its home games at Nyayo stadium. 
              The stadium is also used for athletics , swimming and various ceremonies most common of which are National Holiday celebrations. 
              Other facilities at the Nyayo Stadium include a gymnasium and a 50-metre swimming pool. 
              Rugby union club Mwamba RFC used the Nyayo National Stadium for home games. 
              </p>
            </div>
            <div className="hotelDetailsPrice">
              <h1>Perfect for watching matches!</h1>
              <span>
                Located in the real heart of Nairobi, this property has an
                excellent location score of 9.8!
              </span>
              <h2>
                <b>$50</b> (one adult seat)
              </h2>
              <button>Reserve or Book Now!</button>
            </div>
          </div>
        </div>
        <MailList />
        <Footer />
      </div>
    </div>
  );
};

export default Hotel;
