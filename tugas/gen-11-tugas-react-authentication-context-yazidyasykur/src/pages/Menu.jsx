import { useContext } from "react";
import { Link } from "react-router-dom";
import { AuthContext } from "../utils/AuthProvider";

export default function Menu() {
  const { userData } = useContext(AuthContext);

  return (
    <div className="container">
      <h3>
        Hello, {userData.firstName} {userData.lastName}
      </h3>
      <h5>What are you looking for?</h5>
      <ul>
        <li>
          <Link to="/items">View All Items</Link>
        </li>
        <li>
          <Link to="/category">View Items by Categories</Link>
        </li>
      </ul>
    </div>
  );
}
