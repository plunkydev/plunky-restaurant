import "./menuStyle.css";
import alitasPicantes from "./images/alitas de pollo picante con papas.webp";
import arrozMarinado from "./images/arroz marinado.webp";
import cerdoEmpanizado from "./images/cerdo empanisado horneado.webp";
import churrascoRes from "./images/churrasco de res.webp";
import croquetasPolloPapas from "./images/croquetas de pollo con papas.webp";
import hamburguesaPapas from "./images/Hamburguesa con papas.webp";
import macarronesQueso from "./images/macarrones con queso.webp";
import polloAgridulce from "./images/pollo agridulce.webp";

// Clase Plato que genera cada elemento del menú
class Plato {
    constructor(nombre, descripcion, precio, imagen) {
        this.nombre = nombre;
        this.descripcion = descripcion;
        this.precio = precio;
        this.imagen = imagen;
    }

    // Método para renderizar el plato en HTML
    render() {
        const menuItem = document.createElement('div');
        menuItem.classList.add('menu-item');

        menuItem.innerHTML = `
        <img src="${this.imagen}" alt="${this.nombre}">
            <div class="menu-item-info">
            <h2 class="menu-item-title">${this.nombre}</h2>
            <p class="menu-item-description">${this.descripcion}</p>
            <p class="menu-item-price">$${this.precio}</p>
        </div>
    `;

        return menuItem;
    }
}

// Función que inyecta platos en el menú
export default function createMenu() {

    const menuContainer = document.createElement('div');
    menuContainer.classList.add('menu-container');

    // Definir los platos del menú
    const platos = [
        new Plato('Alitas picantes', 'Alitas de pollo picante con papas.', 120, `${alitasPicantes}`),
        new Plato('Arroz marinado', 'Una especialidad de la casa.', 150, `${arrozMarinado}`),
        new Plato('Cerdo Empanizado', 'Cerdo empanizado al horno con un rico contorno.', 130, `${cerdoEmpanizado}`),
        new Plato('Churrasco de Res', 'Un corte especial de carne mas suave.', 170, `${churrascoRes}`),
        new Plato('Croquetas de Pollo', 'Un clásico con un toque moderno.', 110, `${croquetasPolloPapas}`),
        new Plato('Hamburguesa Vegana', 'Hamburguesa Vegana con papas y contorno especial.', 100, `${hamburguesaPapas}`),
        new Plato('Macarrones con Queso', 'Macarrones con queso Gruyere, Esquisito Sabor.', 90, `${macarronesQueso}`),
        new Plato('Pollo Agridulce', 'Un clásico con un toque Oriental.', 110, `${polloAgridulce}`),
    ];

    // Inyectar cada plato en el contenedor del menú
    platos.forEach(plato => {
        const platoElemento = plato.render();
        menuContainer.appendChild(platoElemento);
    });


    const content = document.getElementById('content');
    content.innerHTML = "";
    return content.appendChild(menuContainer);
};
