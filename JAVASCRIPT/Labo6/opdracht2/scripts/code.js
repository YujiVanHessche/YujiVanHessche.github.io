const setup = () => {


    let listitems = document.querySelectorAll("li");
    for (let i = 0; i < listitems.length; i++) {
        let item = listitems[i];
        item.style.color = "red";
    }
    let img = document.createElement("img");
    img.setAttribute("src", "bergtop.png");
    img.setAttribute("alt","mezelf");
    document.querySelector("body").appendChild(img);
}
window.addEventListener("load", setup);