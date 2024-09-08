import churrasco from "./images/churrasco de res.webp";
export default function createUs() {
    const div = document.createElement("div");
    div.classList.add('aboutUs');
    div.innerHTML = `<div class="hero2">
                    <div class="bannerHero hero-item">
                        <img src="${churrasco}" alt="plato de comida">
                    </div>
                    <div class="bienvenida hero-item">
                        <h2>Plunky's Restaurant</h2>
                        <p>Sabor con Cariño</p>
                    </div>
                    <p class="aboutUsText">En Plunky’s Restaurant, creemos que la comida es mucho más que una simple necesidad, es una experiencia que se comparte y se disfruta. Ubicados en el corazón de la ciudad, desde nuestros inicios en 2010, hemos trabajado con pasión para ofrecer a nuestros comensales una cocina innovadora, pero con raíces tradicionales. Nuestro compromiso es brindar un ambiente cálido y acogedor donde cada plato cuenta una historia y cada visita se convierte en un recuerdo inolvidable.

Nos especializamos en una fusión única de sabores internacionales con toques locales, seleccionando ingredientes frescos y de temporada que provienen de productores locales. Creemos firmemente en apoyar a nuestra comunidad, lo que nos permite no solo garantizar la calidad de nuestros productos, sino también fomentar un desarrollo sostenible. Desde carnes jugosas y vegetales orgánicos hasta panes artesanales, cada componente de nuestros platos está cuidadosamente seleccionado para ofrecerte una explosión de sabor en cada bocado.
</p></div>`;
    content.innerHTML = "";
    return content.appendChild(div);
};