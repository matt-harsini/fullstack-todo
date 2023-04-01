import { useState, useEffect } from "react";
import styles from "./App.module.css";

function App() {
  const [task, setTask] = useState("");
  const [data, setData] = useState<any[]>([]);
  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    fetch("http://localhost:3000/api/post", {
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
    setData((prevState: any[]) => [...prevState, { task }]);
  };
  useEffect(() => {
    console.log(123);
    fetch("http://localhost:3000/api/getAll")
      .then((response) => response.json())
      .then((data) => setData(data))
      .catch((error) => console.log(error));
  }, []);
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
        <ul>
          {data.map(({ task }) => {
            return <li>{task}</li>;
          })}
        </ul>
      </div>
    </main>
  );
}

export default App;
