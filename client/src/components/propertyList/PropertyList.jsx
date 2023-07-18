import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("http://localhost:8080/api/stadium/countByType");
  console.log(data)
    const images = [
    "https://i.pinimg.com/474x/37/f6/2e/37f62e37b17ef35ebbe249ff70750945.jpg",
    "https://i.pinimg.com/474x/78/9e/51/789e510b82cd4d2ddb56bc3d2510fc83.jpg",
    "https://i.pinimg.com/474x/4b/56/e6/4b56e6bfc089e17db154558aff851b2a.jpg",
    "https://i.pinimg.com/474x/d2/f8/46/d2f8464a29134162f9655dbc24ea74f0.jpg",
    "https://i.pinimg.com/474x/89/fb/24/89fb246895d0227f3ba734d3a49a4137.jpg",
  ];
  return (
    <div className="pList">
      {loading ? (
        "loading please wait"
      ) : (
        <>
      {data &&
            images.map((img,i) => (
              <div className="pListItem" key={i}>
                <img
                  src={img}
                  alt=""
                  className="pListImg"
                />
                <div className="pListTitles">
                  <h1>{data[i]?.type}</h1>
                  <h2>{data[i]?.count} {data[i]?.type}</h2>
                </div>
              </div>
            ))}
        </>
      )}
    </div>
  );
};

export default PropertyList;
