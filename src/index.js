import "./styles.css";
import home from "./home.js"

const homeButton = document.getElementById("homeButton");
const menuButton = document.getElementById("menuButton");
const usButton = document.getElementById("usButton");
const content = document.getElementById("content");
home();

homeButton.addEventListener("click", home);
