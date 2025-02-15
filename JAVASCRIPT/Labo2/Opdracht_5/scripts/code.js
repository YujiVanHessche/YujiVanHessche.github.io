const setup = () => {
    let btnWijzig = document.getElementById("btnWijzig");

    btnWijzig.addEventListener("click", welkom);
}

const welkom = () => {
    let pElement =document.getElementById("txtOutput");
    pElement.innerHTML="Welkom!";
}
window.addEventListener("load", setup);