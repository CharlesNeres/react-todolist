import { Link } from "react-router-dom";
import { FaHome } from "react-icons/fa";
function Header() {
  return (
    <header>
      <Link className="home" to="/">
        <FaHome />
      </Link>
      <h1>todo app</h1>
    </header>
  );
}

export default Header;
