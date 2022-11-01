import { JournalContext } from "../App";
import { useContext } from "react";

export default function List() {
  const context = useContext(JournalContext);

  function deleteHandler(id) {
    const copy = context.journal;
    const filtered = copy.filter((item) => item.id != id);
    context.setJournal(filtered);
  }

  function editHandler(id) {
    const copy = context.journal;
    const filtered = copy.filter((item) => item.id === id);
    context.setForm(filtered[0]);
  }

  return (
    <div>
      <h3>Journal list</h3>
      <div className="list">
        {context.journal.map((item) => (
          <div key={item.id} className="card">
            <p>
              <span>ID:{item.id}</span> <span>{item.date}</span>
            </p>
            <h4>{item.subject}</h4>
            <p>{item.text}</p>
            <button onClick={() => editHandler(item.id)}>Edit</button>{" "}
            <button onClick={() => deleteHandler(item.id)}>Delete</button>
          </div>
        ))}
      </div>
    </div>
  );
}
