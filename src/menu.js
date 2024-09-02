export default function createMenu() {
    const div = document.createElement("div");
    div.innerHTML = `<h1>Menu</h1>`;
    content.innerHTML = "";
    return content.appendChild(div);
};