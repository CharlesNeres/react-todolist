import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
import { useEffect, useState } from "react";

function Task() {
  const [data, setData] = useState([]);

  useEffect(() => {
    const savedData = JSON.parse(localStorage.getItem("data")) || [];
    if (savedData) setData(savedData);
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
