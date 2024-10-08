import platoComida from "./images/polloAsado.webp";
import hamburguesa from "./images/hamburguesa.webp";
import menu from "./menu.js";

export default function createHome() {
    const div = document.createElement("div");
    div.classList.add("home");
    div.innerHTML = `
            <div class="hero">
                <div class="bienvenida hero-item">
                    <h2>Bienvenidos a Plunky's Restaurant</h2>
                    <p>Come hasta rebentar sin sentir remordimiento</p>
                    <button id="botonMenuHero">Quieres?</button>
                </div>
                    <div class="bannerHero hero-item">
                    <img src="${platoComida}" alt="plato de comida">
                </div>
            </div>
                <div class="hero2">
                    <div class="bannerHero hero-item">
                        <img src="${hamburguesa}" alt="plato de comida">
                    </div>
                    <div class="bienvenida hero-item">
                        <h2>Plunky's La Grosera</h2>
                        <p>Con Esta si te LLenas</p>
                        <button id="botonMenuHero2">Cometela</button>
                    </div>
            </div>`;
    
    const content = document.getElementById("content");
    content.innerHTML = "";
    content.appendChild(div);

    // Añadir el evento al botón después de que se haya añadido al DOM
    const botonMenuHero = document.getElementById("botonMenuHero");
    botonMenuHero.addEventListener("click", menu);
    const botonMenuHero2 = document.getElementById("botonMenuHero2");
    botonMenuHero2.addEventListener("click", menu);
};
