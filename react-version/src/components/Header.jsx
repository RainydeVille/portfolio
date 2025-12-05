import "../styles/header.scss";
import Kitty1 from "../assets/images/Kitty1.png";

export default function Header() {
  return (
    <header>
      <div id="nameInfo">
        <h2 style={{ fontFamily: "deltarune" }} id="name">
          Egle vaitkeviciene
        </h2>
        <img id="kitty" src={Kitty1} alt="Little black kitty" />
      </div>
      <nav>
        <ul>
          <li>
            <a style={{ fontFamily: "PressStart2P" }} href="#aboutMe">
              About me
            </a>
          </li>
          <li>
            <a style={{ fontFamily: "PressStart2P" }} href="#resume">
              Resume
            </a>
          </li>
          <li>
            <a style={{ fontFamily: "PressStart2P" }} href="#projects">
              Projects
            </a>
          </li>
        </ul>
      </nav>
    </header>
  );
}
