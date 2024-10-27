import { Link } from "react-router-dom";

function Footer() {
  return (
    <footer>
      <Link to="add-task/" className="btn">
        +
      </Link>
    </footer>
  );
}

export default Footer;
