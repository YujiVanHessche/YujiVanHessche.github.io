const setup = () => {
    let buttons = document.getElementsByClassName("btn");

    for (let i = 0; i < buttons.length; i++) {
        buttons[i].addEventListener("click", () => {
            buttons[i].classList.toggle("active");
        });
    }


}
const veranderkleur = () => {
    let buttons = document.getElementsByClassName("btn")
        buttons.className +=" toggled";
}
window.addEventListener("load", setup);