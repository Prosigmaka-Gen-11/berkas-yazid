import { Link } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";

export default function Menu() {
  const auth = useSelector((state) => state.auth);

  return (
    <div className="container">
      <h3>
        Hello, {auth.userData.firstName} {auth.userData.lastName}
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
