import axios from "axios";
import { useNavigate, useParams } from "react-router-dom";
import { useState } from "react";
import { useEffect } from "react";
import { useContext } from "react";
import { AuthContext } from "../utils/AuthProvider";
import Product from "../components/Product";

export default function CategoryList() {
  const params = useParams();
  const [products, setProducts] = useState([]);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    getProducts();
  }, []);

  function getProducts() {
    axios
      .get(
        "https://dummyjson.com/auth/products/category/" + params.categoryName,
        {
          headers: {
            Authorization: "Bearer " + token,
          },
        }
      )
      .then((res) => setProducts(res.data.products));
  }
  return (
    <div className="container">
      <h3>Products of "{params.categoryName}" category:</h3>
      <button
        onClick={() => {
          navigate("../");
        }}
      >
        Go Back
      </button>
      <div>
        <ul>
          {products.map((item) => (
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
    </div>
  );
}
