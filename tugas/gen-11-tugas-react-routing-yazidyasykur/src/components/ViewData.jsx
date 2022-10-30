import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import axios from "axios";

export default function ViewData() {
  const [allData, setAllData] = useState([]);

  useEffect(() => {
    getData();
  }, []);

  async function getData() {
    const pokemonData = await axios.get("http://localhost:3000/pokemon");
    setAllData(pokemonData.data);
  }

  async function deleteHandler(id) {
    await axios.delete(`http://localhost:3000/pokemon/${id}`);
    getData();
  }

  return (
    <div className="classcomp">
      <h3>Pokemon Data</h3>
      <table>
        <thead>
          <tr>
            <td>ID</td>
            <td>Name</td>
            <td>Catch Date</td>
            <td>Gender</td>
            <td>Type</td>
            <td>Base</td>
            <td>Description</td>
            <td>Action</td>
          </tr>
        </thead>

        <tbody>
          {allData.map((item) => (
            <tr key={item.id}>
              <td>{item.id}</td>
              <td>{item.name}</td>
              <td>{item.catchDate}</td>
              <td>{item.gender}</td>
              <td>
                <ul>
                  {item.type.map((type) => (
                    <li key={type}>{type}</li>
                  ))}
                </ul>
              </td>
              <td>{item.base}</td>
              <td>{item.description}</td>
              <td>
                <Link to={"/pokemon/" + item.id}>
                  <button>Details</button>
                </Link>
                <Link to={`/pokemon/${item.id}/edit`}>
                  <button>Edit</button>
                </Link>
                <button onClick={() => deleteHandler(item.id)}>Delete</button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
      <Link to="/">
        <button>Go Back</button>
      </Link>
    </div>
  );
}
