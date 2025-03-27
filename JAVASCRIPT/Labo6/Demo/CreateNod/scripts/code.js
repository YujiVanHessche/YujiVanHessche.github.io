const setup = () => {

    let element = document.createElement("p"); //creert p element

    element.setAttribute("class", "color");
    element.setAttribute("id", "txtPar");
    console.log(element.getAttribute("class"));

    let txtNode = document.createTextNode("hello world"); // creert een textnote dat met hello world
    element.appendChild(txtNode);
    document.querySelector("#myDiv").appendChild(element);
    console.log(txtNode);

}
window.addEventListener("load", setup);