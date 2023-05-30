import { Link } from "react-router-dom";
import { FaSignInAlt, FaSignOutAlt, FaUser } from "react-icons/fa";
const Header = () => {
  return (
    <header>
      <div>
        <Link to={"/"}>GoalSetter</Link>
      </div>
      <ul>
        <li>
          <Link to={"/Login"}>
            <FaSignInAlt />
            Login
          </Link>
        </li>
        <li>
          <Link to={"/Register"}>
            <FaUser />
            Register
          </Link>
        </li>
      </ul>
    </header>
  );
};

export default Header;
