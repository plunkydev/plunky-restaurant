import platoComida from "./images/polloAsado.png"
export default function createHome() {
    const div = document.createElement("div");
    div.innerHTML = `<div class="home">
            <div class="hero">
                <div class="bienvenida hero-item">
                    <h2>Bienvenidos a Plunky's Restaurant</h2>
                    <p>Come hasta rebentar sin sentir remordimiento</p>
                    <button id="botonMenuHero">Menu</button>
                </div>
                <div class="bannerHero hero-item">
                    <img src="${platoComida}" alt="plato de comida">
                </div>
            </div>
        </div>`;
    content.innerHTML = "";
    return content.appendChild(div);
};