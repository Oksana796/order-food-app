import "./Header.css";
import mealsImg from "../images/meals.jpg";
import HeaderCartButton from "./HeaderCartButton";

const Header = (props) => {
  return (
    <>
      <header className="header">
        <h1>OrderFood</h1>
       <HeaderCartButton onClick={props.onShow}/>
      </header>
      <div className="main-image">
        <img src={mealsImg} alt="a table full of food" />
      </div>
    </>
  );
};

export default Header;
