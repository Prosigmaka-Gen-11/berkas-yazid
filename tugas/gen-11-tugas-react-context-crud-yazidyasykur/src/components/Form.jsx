import { JournalContext } from "../App";
import { useContext } from "react";
import { useEffect } from "react";

export default function Form() {
  const context = useContext(JournalContext);

  function randomId() {
    const id = Math.round(Math.random() * 10000);
    return id;
  }

  useEffect(() => {
    localStorage.setItem("journalArray", JSON.stringify(context.journal));
  }, [context.journal]);

  function inputHandler(event, propName) {
    if (context.form.id) {
      context.setForm({
        ...context.form,
        [propName]: event.target.value,
      });
    } else {
      context.setForm({
        ...context.form,
        [propName]: event.target.value,
        id: randomId(),
      });
    }
  }

  async function submitHandler(event) {
    event.preventDefault();

    if (context.form.id) {
      const copy = context.journal;
      const filtered = copy.filter((item) => item.id != context.form.id);
      await context.setJournal([...filtered, context.form]);
    } else {
      await context.setJournal([...context.journal, context.form]);
    }

    await context.setForm(initial);
  }

  const initial = {
    date: "",
    subject: "",
    text: "",
    id: "",
  };

  return (
    <div>
      <h3>MyJournal</h3>

      <form onSubmit={(event) => submitHandler(event)}>
        <label>
          Date : <br />
          <input
            type="date"
            value={context.form.date}
            onChange={(event) => inputHandler(event, "date")}
          />
        </label>

        <br />

        <label>
          Subject : <br />
          <input
            type="text"
            value={context.form.subject}
            onChange={(event) => inputHandler(event, "subject")}
          />
        </label>
        <br />

        <label>
          Content : <br />
          <textarea
            value={context.form.text}
            onChange={(event) => inputHandler(event, "text")}
          ></textarea>
        </label>

        <br />

        <button>Submit</button>
      </form>
    </div>
  );
}
