import axios from "axios";
import { useEffect } from "react";
import { useState } from "react";
import { useSelector } from "react-redux";
import { Link, useNavigate } from "react-router-dom";

export default function CategoryMenu() {
  const [categories, setCategories] = useState([]);
  const auth = useSelector((state) => state.auth);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);

  function getCategories() {
    axios
      .get("https://dummyjson.com/products/categories", {
        headers: {
          Authorization: "Bearer " + auth.token,
        },
      })
      .then((res) => setCategories(res.data));
  }

  return (
    <div className="container">
      <h3>Categories :</h3>
      <button
        onClick={() => {
          navigate("/menu");
        }}
      >
        Go Back
      </button>
      <ul>
        {categories.map((item) => (
          <li key={item}>
            <Link to={item}>{item}</Link>
          </li>
        ))}
      </ul>
    </div>
  );
}
