import { IoMdArrowRoundBack } from "react-icons/io";
import "./AddTask.css";
import Header from "./Header";
function AddTask() {
  return (
    <div className="App">
      <Header />
      <form>
        <input type="text" placeholder="Title" />
        <input type="text" placeholder="Detail" />
        <button>Add</button>
      </form>
    </div>
  );
}

export default AddTask;
