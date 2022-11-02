import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { useNavigate } from "react-router-dom";
import Product from "../components/Product";
import { AuthContext } from "../utils/AuthProvider";

export default function ItemList() {
  const [items, setItems] = useState([]);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    getItem();
  }, []);

  function getItem() {
    axios
      .get("https://dummyjson.com/auth/products", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => {
        setItems(res.data.products);
      });
  }

  return (
    <div className="container">
      <h3>Item List</h3>
      <button onClick={() => navigate("../")}>Go Back</button>
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
