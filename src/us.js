import hamburguesa from "./images/hamburguesa.png";
export default function createUs() {
    const div = document.createElement("div");
    div.classList.add('aboutUs');
    div.innerHTML = `<div class="hero2">
                    <div class="bannerHero hero-item">
                        <img src="${hamburguesa}" alt="plato de comida">
                    </div>
                    <div class="bienvenida hero-item">
                        <h2>Plunky's Restaurant</h2>
                        <p>Sabor con Cariño</p>
                    </div>`;
    content.innerHTML = "";
    return content.appendChild(div);
};