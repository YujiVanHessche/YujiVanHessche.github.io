const setup = () => {
    let lstParDIV = document.querySelectorAll("#myDIV > .color");

    for(let i=0; i<lstParDIV.length; i++){
        lstParDIV[i].addEventListener("click", changeDiv);
    }




}

const changeDiv = (event) => {
    event.target.className = "colorParDiv";
}
window.addEventListener("load", setup);