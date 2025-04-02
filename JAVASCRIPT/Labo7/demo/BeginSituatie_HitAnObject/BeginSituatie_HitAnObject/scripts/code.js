let UPDATE_DELAY=50; // constante voor timer delay, in milliseconden
let speedX;
let speedY;
let global = {
    IMAGE_COUNT: 5, // aantal figuren
    IMAGE_SIZE: 48, // grootte van de figuur
    IMAGE_PATH_PREFIX: "images/", // map van de figuren
    IMAGE_PATH_SUFFIX: ".png", // extensie van de figuren
    MOVE_DELAY: 3000, // aantal milliseconden voor een nieuwe afbeelding verschijnt
    score: 0, //aantal hits
     timeoutId: 0 // id van de timeout timer, zodat we die kunnen annuleren
};

const setup = () => {
    let button = document.getElementById("button");
    let playfield = document.getElementById("playField");
    let target = document.getElementById("target");
    button.addEventListener("click", speelspel);
    target.style.left = parseInt(playfield.style.width) / 2 + "px";
    target.style.top = parseInt(playfield.style.height) / 2 + "px";
    target.src = randomPicture();

}

const randomPicture = () => {
    let img = Math.floor(Math.random()*(global.IMAGE_COUNT -1)) +1;
    return global.IMAGE_PATH_PREFIX + img + global.IMAGE_PATH_SUFFIX;
}

const changePicture = () => {
    let random = Math.floor(Math.random() *5);
    let target = document.getElementById("target");
    target.setAttribute("src", global.IMAGE_PATH_PREFIX + random + global.IMAGE_PATH_SUFFIX  );
    if(random === 0) {
        target.removeAttribute("alt");
        target.setAttribute("alt", "bom");
    }else{
    target.setAttribute("alt", "target");
}
}
const speelspel = () =>{
    global.timeoutId = setInterval(() => {
        moveTarget();}, global.MOVE_DELAY);
    let pElement = document.createElement("p")
    let playfield = document.getElementById("playField");
    playfield.appendChild(pElement);
    let button = document.getElementById("button");
    button.remove();
    let target = document.getElementById("target");
        target.addEventListener('click', () => {
            if (target.getAttribute('alt') === "bom") {
                alert("Game over, je hebt op een bom geklikt. \nJe hebt een score van " + global.score);
                clearTimeout(0);
            } else {
                global.score++;
                moveTarget();
                changePicture();
                pElement.innerHTML ="uw huidige score is : " + global.score;
            }
        });

}

const moveTarget = () => {
    changePicture();
    let target = document.getElementById("target");
    let playfield = document.getElementById("playField");
    let maxLeft=playfield.clientWidth - target.offsetWidth;
    let maxTop=playfield.clientHeight - target.offsetHeight;

    let positieBreedte = Math.floor(Math.random()*maxLeft);
    let positieHoogte = Math.floor(Math.random()*maxTop);
    target.style.left=positieBreedte+"px";
    target.style.top=positieHoogte+"px";



}
window.addEventListener("load", setup);


