const setup = () => {
    let rood = document.getElementsByClassName('belangerijk')
    for (let i = 0; i < rood.length; i++) {
        console.log(rood);
        rood[i].classList+= " opvallend";
    }
}
window.addEventListener("load", setup);