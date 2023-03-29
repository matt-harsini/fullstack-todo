import { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
  const [task, setTask] = useState("");
  const handleSubmit = (e: React.FormEvent) => {
    fetch("http://localhost:3000", {
      method: "POST",
      body: JSON.stringify({
        task,
      }),
      headers: {
        "Content-type": "application/json; charset=UTF-8",
      },
    })
      .then((response) => response.json())
      .then((json) => console.log(json));
    e.preventDefault();
    console.log(e);
  };
  return (
    <main className={styles.fullHeight}>
      <div className={styles.formContainer} onSubmit={handleSubmit}>
        <h1>Task Manager</h1>
        <form>
          <div className={styles.centerText}>
            <label htmlFor="tasks" className={styles.labelTxt}>
              Add a task
            </label>
          </div>
          <div className={styles.inputContainer}>
            <input
              className={styles.input}
              type="text"
              id="tasks"
              placeholder="e.g wash dishes"
              value={task}
              onChange={(e) => {
                setTask(e.target.value);
              }}
            />
            <button className={styles.btn}>Submit</button>
          </div>
        </form>
      </div>
    </main>
  );
}

export default App;
