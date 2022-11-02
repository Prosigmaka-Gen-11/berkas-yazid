import axios from "axios";
import { useContext } from "react";
import { useEffect } from "react";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../utils/AuthProvider";

export default function CategoryMenu() {
  const [categories, setCategories] = useState([]);
  const { token } = useContext(AuthContext);
  const navigate = useNavigate();

  useEffect(() => {
    getCategories();
  }, []);

  function getCategories() {
    axios
      .get("https://dummyjson.com/products/categories", {
        headers: {
          Authorization: "Bearer " + token,
        },
      })
      .then((res) => setCategories(res.data));
  }

  return (
    <div className="container">
      <h3>Categories :</h3>
      <button
        onClick={() => {
          navigate("../");
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
