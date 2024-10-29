import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { useEffect, useState } from "react";
import { json, Link } from "react-router-dom";

function Task() {
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

  function onDeleteTaskClick(id) {
    const newData = data.filter((task) => task.id !== id);
    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  }

  function completeTask(id) {
    const newData = data.map((task) => {
      if (task.id === id) {
        return { ...task, completed: !task.completed };
      }

      return task;
    });

    setData(newData);
    localStorage.setItem("data", JSON.stringify(newData));
  }

  return (
    <>
      {data.map((task) => (
        <div
          className={`task ${task.completed ? "completed" : ""}`}
          key={task.id}
        >
          <div className="task-description">
            <p>{task.title}</p>
            <span>{task.detail}</span>
          </div>
          <div className="task-actions">
            <Link title="Edit" to={`edit-task/${task.id}`}>
              <MdEdit className="action" />
            </Link>
            <span title="Delete">
              <MdDeleteOutline
                className="action"
                onClick={() => onDeleteTaskClick(task.id)}
              />
            </span>
            <span
              title="Complete"
              className="action"
              onClick={() => completeTask(task.id)}
            >
              <CiCircleCheck />
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export default Task;
