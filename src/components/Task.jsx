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

  return (
    <>
      {data.map((task, index) => (
        <div className="task" key={index}>
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
            <span title="Complete">
              <CiCircleCheck />
            </span>
          </div>
        </div>
      ))}
    </>
  );
}

export default Task;
