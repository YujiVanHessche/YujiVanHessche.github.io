const setup = () => {;
    let button = document.getElementById('button');
    button.addEventListener("click", spaties)

}
const spaties = () =>{
    let tekst = document.getElementById('tekst').value;
    let tekst1 = tekst.split('').join(' ');
    console.log(tekst1);

}
window.addEventListener("load", setup);