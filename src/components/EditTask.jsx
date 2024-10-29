import { useEffect, useState } from "react";
import Header from "./Header";
import { useParams, useNavigate } from "react-router-dom";
function EditTask() {
  const navigate = useNavigate();
  const [title, setTitle] = useState();
  const [detail, setDetail] = useState();
  const [data, setData] = useState([]);
  const { id } = useParams();

  useEffect(() => {
    // lets get all the data first from localStorage
    const savedData = JSON.parse(localStorage.getItem("data") || []);
    // now lets find the one that matches the id
    const taskToEdit = savedData.find((task) => task.id === parseInt(id));

    if (taskToEdit) {
      setTitle(taskToEdit.title);
      setDetail(taskToEdit.detail);
    }
  }, [id]);

  function onEditTask(e) {
    e.preventDefault();

    const savedData = JSON.parse(localStorage.getItem("data") || []);
    const updateData = savedData.map((task) =>
      task.id === parseInt(id)
        ? { ...task, title: title, detail: detail }
        : task
    );

    localStorage.setItem("data", JSON.stringify(updateData));
    navigate("/");
  }

  return (
    <div className="App">
      <Header />
      <form onSubmit={onEditTask}>
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
        <button type="submit">Edit</button>
      </form>
    </div>
  );
}

export default EditTask;
