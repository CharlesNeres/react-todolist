import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { useEffect, useState } from "react";
import { json } from "react-router-dom";

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
            <span title="Edit">
              <MdEdit />
            </span>
            <span title="Delete">
              <MdDeleteOutline />
            </span>
            <span title="Complete" onClick={() => completeTask(task.id)}>
              <CiCircleCheck />
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export default Task;
