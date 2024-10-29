import { IoMdArrowRoundBack } from "react-icons/io";
import "./AddTask.css";
import Header from "./Header";
import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";

function AddTask() {
  const navigate = useNavigate();
  const [title, setTitle] = useState("");
  const [detail, setDetail] = useState("");
  const [data, setData] = useState([]);

  useEffect(() => {
    try {
      const storedData = localStorage.getItem("data");
      const parsedData = storedData ? JSON.parse(storedData) : null;
      if (Array.isArray(parsedData)) {
        setData(parsedData);
      }
    } catch (error) {
      console.error("error parseing JSON from localStorage", error);
    }
  }, []);

  function onAddTask(e) {
    e.preventDefault();
    if (title.trim() === "" || detail.trim() === "") {
      alert("datas not inserted!");
      return;
    }

    const newData = {
      id: Date.now(), // Garante um ID único
      title,
      detail,
      completed: false,
    };

    const updatedData = [...data, newData];

    setData(updatedData);
    localStorage.setItem("data", JSON.stringify(updatedData));

    setTitle("");
    setDetail("");
    navigate("/");
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
        <button type="submit">Add</button>
      </form>
    </div>
  );
}

export default AddTask;
