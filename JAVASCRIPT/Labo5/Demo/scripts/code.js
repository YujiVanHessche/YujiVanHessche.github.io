const setup = () => {

    document.getElementById('imgPhoto')
    addEventListener('mouseover', changeImage)
}

const changeImage = () => {
    let photo = document.getElementById('imgPhoto');
    photo.src = "./images/bla1.png";
    photo.alt = "cat";
    photo.className = "anderfoto";
    document.getElementById("txtText").innerHTML = "school of cats";
window.addEventListener("load", setup);}

window.addEventListener("load", setup);