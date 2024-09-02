export default function createUs() {
    const div = document.createElement("div");
    div.innerHTML = `<h1>About Us</h1>`;
    content.innerHTML = "";
    return content.appendChild(div);
};