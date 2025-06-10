const setup = () => {

    const confirm = document.getElementById('confirm');
    confirm.addEventListener('click', verander);
}

const verander =() =>{
    const pelement = document.createElement('p');
    const div = document.getElementById('myDIV');
    div.appendChild(pelement);
    pelement.textContent = "hallo";
}
window.addEventListener("load", setup);