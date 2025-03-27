const setup = () => {
    let p = document.getElementById("para")
    console.log(p.nodeName, p.nodeType) //P, 1 => 1 betekent element


    console.log(p.firstChild.nodeName, p.firstChild.nodeType); // #text, 3

    console.log(p.firstElementChild, p.firstElementChild.nodeType); //span

    console.log(p.nextElementSibling.nodeName, p.nextElementSibling.nodeType); //P 1
}
window.addEventListener("load", setup);