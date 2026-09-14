import { Link } from "react-router-dom";
import "./header.css"
import HeaderUserInfo from "./header_user_info";

export default function Header(){
  return(
    <div>
      <nav>
        <Link to="/">Home</Link> | {" "}
        <Link to="/myplants">My Plants</Link> | {" "}
        <Link to="/search">Search</Link> | {" "}
        <Link to="/login">Log In</Link>
        <HeaderUserInfo />
      </nav>

    </div>
  );
}
