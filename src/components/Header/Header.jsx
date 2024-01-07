import "./Header.css";
import image from "../../assets/githubWhite.png";

const Header = () => {
  return (
    <div className="Header">
      <h1>
        <img src={image} alt="logo-github" width="200" />
      </h1>
      <h2>Users Finder</h2>
    </div>
  );
};

export default Header;
