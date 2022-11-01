import Form from "./components/Form";
import { createContext, useState } from "react";
import List from "./components/List";
import "./assets/app.css";

export const JournalContext = createContext();

export default function App() {
  if (!localStorage.getItem("journalArray")) {
    localStorage.setItem("journalArray", JSON.stringify([]));
  }

  const [journal, setJournal] = useState(
    JSON.parse(localStorage.getItem("journalArray"))
  );

  const [form, setForm] = useState({
    subject: "",
    date: "",
    text: "",
    id: "",
  });

  return (
    <JournalContext.Provider
      value={{
        journal: journal,
        setJournal: setJournal,
        form: form,
        setForm: setForm,
      }}
    >
      <Form />
      <hr />
      <List />
    </JournalContext.Provider>
  );
}
