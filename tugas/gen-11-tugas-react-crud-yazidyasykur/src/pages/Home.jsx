import { Link } from "react-router-dom";

export default function Home() {
  return (
    <div>
      <h4>Welcome to Pokemon Database System</h4>
      <p>What are you looking for?</p>

      <ul>
        <li>
          <Link to="pokemon">See the database</Link>
        </li>
        <li>
          <Link to="insert">Submit a data</Link>
        </li>
      </ul>
    </div>
  );
}
