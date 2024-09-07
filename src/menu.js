import "./menuStyle.css";

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
        new Plato('Plato 1', 'Descripción del plato 1, delicioso y con ingredientes frescos.', 120, 'https://via.placeholder.com/300'),
        new Plato('Plato 2', 'Descripción del plato 2, una especialidad de la casa.', 150, 'https://via.placeholder.com/300'),
        new Plato('Plato 3', 'Descripción del plato 3, para los amantes de lo picante.', 130, 'https://via.placeholder.com/300'),
        new Plato('Plato 4', 'Descripción del plato 4, un clásico con un toque moderno.', 110, 'https://via.placeholder.com/300')
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
