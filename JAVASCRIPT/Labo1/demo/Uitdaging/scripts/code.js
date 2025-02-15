const setup = () => {
    let btnVoegToe=document.getElementById("btnVoegToe");
    btnVoegToe.addEventListener("click", addImage);
    //in u setup schrijf je meestal u eventhandlers
}
function addImage() {
    let txtInput = document.getElementById('txtInput');
    let url = txtInput.value;
    let divImages = document.getElementById("divImages");
    divImages.innerHTML += "<img src='" + url + "'/>";

    //beide werken 1ste is oploss van meneer 2de is mee ai
    // const url = document.getElementById('txtInput').value;
    // if (url) {
    //     const img = document.createElement('img');
    //     img.src = url;
    //     img.alt = 'Toegevoegde afbeelding';
    //     document.getElementById('divImages').appendChild(img);
    // } else {
    //     alert('Voer een geldige URL in.');
    // }

}
window.addEventListener("load", setup);