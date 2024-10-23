import "./App.css";
import { MdEdit } from "react-icons/md";
import { MdDeleteOutline } from "react-icons/md";
import { CiCircleCheck } from "react-icons/ci";
function App() {
  return (
    <div>
      <header>
        <h1>todo app</h1>
      </header>
      <main>
        <div>
          <div>
            <p>TODO TITLE</p>
            <span>todo sub title</span>
          </div>
          <div>
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
      </main>
      <footer>
        <button>+</button>
      </footer>
    </div>
  );
}

export default App;
