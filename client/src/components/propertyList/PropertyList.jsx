import useFetch from "../../hooks/useFetch";
import "./propertyList.css";

const PropertyList = () => {
  const { data, loading, error } = useFetch("http://localhost:8080/api/stadium/countByType");
  console.log(data)
    const images = [
    "https://i.pinimg.com/474x/37/f6/2e/37f62e37b17ef35ebbe249ff70750945.jpg",
    "https://i.pinimg.com/474x/76/9c/d2/769cd2e31a3346546e3dcf8e57dc7805.jpg",
    "https://i.pinimg.com/474x/a8/8b/9a/a88b9ae22e2bc04ca221a2a15ae1447b.jpg",
    "https://i.pinimg.com/474x/93/fa/eb/93faeb3406f68946b686a62faacc7f39.jpg",
    "https://i.pinimg.com/474x/0f/52/a7/0f52a7f6140b2384a8d9d05ad2b501b8.jpg",
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
