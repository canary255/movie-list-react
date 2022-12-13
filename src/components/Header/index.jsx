import { Link } from "react-router-dom";

export const Header = () => {
  return (
    <header>
      <div className="col-10">
        <Link to="/">Movie List</Link>
      </div>
      <div className="option col-2">
        <i className="fa-solid fa-right-to-bracket fa-lg col-2"></i>
        <p>Login</p>
      </div>
    </header>
  );
};
