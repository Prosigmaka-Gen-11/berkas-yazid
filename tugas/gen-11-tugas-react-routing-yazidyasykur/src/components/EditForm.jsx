import { useState } from "react";
import axios from "axios";
import { useEffect } from "react";
import { useNavigate, useParams } from "react-router-dom";

export default function EditForm() {
  const navigate = useNavigate();

  const genderList = [
    { value: "M", label: "Male" },
    { value: "F", label: "Female" },
    { value: "X", label: "Unidentified" },
  ];

  const typeList = [
    "Normal",
    "Fire",
    "Water",
    "Grass",
    "Electric",
    "Ice",
    "Fighting",
    "Poison",
    "Ground",
    "Flying",
    "Psychic",
    "Bug",
    "Rock",
    "Ghost",
    "Dark",
    "Dragon",
    "Steel",
    "Fairy",
  ];

  const initialState = {
    name: "",
    catchDate: "",
    gender: "",
    type: [],
    base: "",
    description: "",
  };

  const [input, setInput] = useState({
    ...initialState,
  });

  function handleFormInput(event, propertyName, inputType) {
    if (inputType != "checkbox") {
      setInput({ ...input, [propertyName]: event.target.value });
    } else {
      if (event.target.checked) {
        let array = input.type;
        array.push(event.target.value);
        setInput({ ...input, [propertyName]: array });
      } else {
        let array = input.type;
        var index = array.indexOf(event.target.value);
        if (index !== -1) {
          array.splice(index, 1);
        }
        setInput({ ...input, [propertyName]: array });
      }
    }
  }

  async function handleSubmit(event) {
    event.preventDefault();
    await axios.put(`http://localhost:3000/pokemon/${input.id}`, input);
    navigate("/pokemon");
  }

  const params = useParams();

  useEffect(() => {
    getById(params.pokemonId);
  }, []);

  async function getById(id) {
    const pokemon = await axios.get("http://localhost:3000/pokemon/" + id);
    setInput(pokemon.data);
  }

  return (
    <div className="functioncomp">
      <h2>Pokemon Edit Form</h2>

      <form onSubmit={handleSubmit} className="functionForm">
        <label>
          Pokemon Name <br />
          <input
            type="text"
            value={input.name}
            onChange={(event) => handleFormInput(event, "name")}
          />
        </label>

        <br />

        <label>
          Catch Date <br />
          <input
            type="date"
            value={input.catchDate}
            onChange={(event) => handleFormInput(event, "catchDate")}
          />
        </label>

        <br />

        <p>Gender : </p>
        {genderList.map((item) => (
          <label key={item.value}>
            <input
              type="radio"
              name="gender"
              value={item.value}
              checked={input.gender == item.value}
              onChange={(event) => handleFormInput(event, "gender")}
            />
            {item.label}
          </label>
        ))}

        <br />

        <p>Type : </p>
        {typeList.map((item) => (
          <label key={item}>
            <input
              type="checkbox"
              name="type"
              value={item}
              checked={input.type.indexOf(item) !== -1}
              onChange={(event) => {
                handleFormInput(event, "type", "checkbox");
                console.log(input.type);
              }}
            />
            {item}
          </label>
        ))}

        <br />

        <label>
          Base : <br />
          <select
            value={input.base}
            onChange={(event) => handleFormInput(event, "base")}
          >
            <option value="" disabled>
              - Select Base-
            </option>
            <option value="Plant">Plant</option>
            <option value="Animal">Animal</option>
            <option value="Mythological">Mythological</option>
          </select>
        </label>

        <br />

        <label>
          Additional Description <br />
          <textarea
            value={input.description}
            onChange={(event) => handleFormInput(event, "description")}
          />
        </label>

        <button>Submit Edit</button>
      </form>
    </div>
  );
}
