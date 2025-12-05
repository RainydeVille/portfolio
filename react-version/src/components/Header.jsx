import "../styles/header.scss";
import Kitty1 from "../assets/images/Kitty1.png";

export default function Header() {
  return (
    <header>
      <div id="nameInfo">
        <h2 style={{ fontFamily: "alagard" }} id="name">
          Egle Vaitkeviciene
        </h2>
        <img id="kitty" src={Kitty1} alt="Little black kitty" />
      </div>
      <nav>
        <ul>
          <li>
            <a href="#aboutMe">About me</a>
          </li>
          <li>
            <a href="#resume">Resume</a>
          </li>
          <li>
            <a href="#projects"></a>Projects
          </li>
        </ul>
      </nav>
    </header>
  );
}
