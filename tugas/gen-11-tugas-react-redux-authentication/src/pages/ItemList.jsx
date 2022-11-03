import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import Product from "../components/Product";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    getItem();
  }, []);

  function getItem() {
    axios
      .get("https://dummyjson.com/auth/products", {
        headers: {
          Authorization: "Bearer " + auth.token,
        },
      })
      .then((res) => {
        setItems(res.data.products);
      });
  }

  return (
    <div className="container">
      <h3>Item List</h3>
      <button onClick={() => navigate("/menu")}>Go Back</button>
      <ul>
        {items.map((item) => (
          <Product
            title={item.title}
            brand={item.brand}
            desc={item.description}
            img={item.images[0]}
            description={item.description}
            price={item.price}
          />
        ))}
      </ul>
    </div>
  );
}
