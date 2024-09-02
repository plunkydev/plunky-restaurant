export default function createHome() {
    const div = document.createElement("div");
    div.innerHTML = `<h1>Bienvenidos a Plunky's Restaurant</h1>`;
    content.innerHTML = "";
    return content.appendChild(div);
};