import "./propertyList.css";

const PropertyList = () => {
  return (
    <div className="pList">
      <div className="pListItem">
        <img
          src="https://i.pinimg.com/474x/37/f6/2e/37f62e37b17ef35ebbe249ff70750945.jpg"
          alt="Nyayo stadium"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Nyayo Stadium</h1>
          <h2>Mombasa road Narobi</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://i.pinimg.com/474x/78/9e/51/789e510b82cd4d2ddb56bc3d2510fc83.jpg"
          alt="Kasarani stadium"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Kasarani Stadium</h1>
          <h2>Kasarani Nairobi</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://i.pinimg.com/474x/4b/56/e6/4b56e6bfc089e17db154558aff851b2a.jpg"
          alt="Kondele stadium"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Kondele Stadium</h1>
          <h2>Kisumu</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://i.pinimg.com/474x/d2/f8/46/d2f8464a29134162f9655dbc24ea74f0.jpg"
          alt="Thika"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Thika Stadium</h1>
          <h2>Thika Town</h2>
        </div>
      </div>
      <div className="pListItem">
        <img
          src="https://i.pinimg.com/474x/89/fb/24/89fb246895d0227f3ba734d3a49a4137.jpg"
          alt="Mombasa"
          className="pListImg"
        />
        <div className="pListTitles">
          <h1>Mombasa Stadium</h1>
          <h2>Mombasa town</h2>
        </div>
      </div>
    </div>
  );
};

export default PropertyList;
