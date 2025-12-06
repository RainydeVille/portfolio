import { useEffect, useRef } from "react";
import { typingEffect } from "../animations/typing.js";
import "../styles/header.scss";
import Kitty1 from "../assets/images/Kitty1.png";

export default function Header() {
  const hasRun = useRef(false);

  useEffect(() => {
    if (hasRun.current) return; //if it already ran then do nothing
    hasRun.current = true;

    typingEffect("name", "EGLE VAITKEVICIENE", 120, () => {
      const img = document.getElementById("kitty");
      img.classList.add("show");
    });
  }, []);

  return (
    <header>
      <div id="nameInfo">
        <h2 style={{ fontFamily: "I-pixel-u" }} id="name"></h2>
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
