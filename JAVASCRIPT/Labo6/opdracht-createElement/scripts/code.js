const setup = () => {



    let button = document.getElementById('button');
    button.addEventListener('click', addPelement)

}

const addPelement = () => {
    let p = document.createElement('p');
    let t = document.createTextNode('Hello World!');
    p.textContent = "een aantal teksten namen iets blabla "
    document.getElementById("myDIV").appendChild(p);
    document.getElementById("myDIV").appendChild(t);
}
window.addEventListener("load", setup);