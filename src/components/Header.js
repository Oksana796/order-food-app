import "./Header.css";
import mealsImg from "../images/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = () => {
  return (
    <>
      <header className="header">
        <h1>OrderFood</h1>
       <HeaderCartButton />
      </header>
      <div className="main-image">
        <img src={mealsImg} alt="a table full of food" />
      </div>
    </>
  );
};

export default Header;
