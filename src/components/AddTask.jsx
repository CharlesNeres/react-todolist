import { IoMdArrowRoundBack } from "react-icons/io";
import "./AddTask.css";
import Header from "./Header";
import { useEffect, useState } from "react";
function AddTask() {
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [data, setData] = useState([]);

  function onAddTask(e) {
    e.preventDefault();
    if (title.trim() === "" || detail.trim() === "") {
      alert("datas not inserted!");
      return;
    }

    const newData = { title, detail };
    const updatedData = [...data, newData];

    setData(updatedData);

    localStorage.setItem("data", JSON.stringify(updatedData));

    setTitle("");
    setDetail("");

    alert("Task added successfully!");
  }

  return (
    <div className="App">
      <Header />
      <form onSubmit={onAddTask}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
        />
        <input
          type="text"
          value={detail}
          onChange={(e) => setDetail(e.target.value)}
          placeholder="Detail"
        />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddTask;
