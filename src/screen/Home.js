import React from "react";
import CardProduct from "../components/CardProduct";
import { useDispatch } from "react-redux";

const Home = () => {
  const [data, setData] = React.useState([]);

  React.useEffect(() => {
    const getData = () => {
      const urlData =
        "https://api.autoxanh.com/products?_start=0&_limit=12&_sort=updatedAt%3ADESC";
      return fetch(urlData)
        .then((res) => res.json())
        .then((res) => {
          setData(res);
        });
    };
    getData();
  }, []);

  console.log("data", data);
  return (
    <div className="home-page">
      {data.map((item, index) => {
        return (
          <CardProduct
            key={index}
            srcImage={item.images[0].url}
            title={item.title}
            price={item.price}
            priceSale={item.sale_price}
          />
        );
      })}
      <CardProduct />
      <CardProduct />
    </div>
  );
};

export default Home;
