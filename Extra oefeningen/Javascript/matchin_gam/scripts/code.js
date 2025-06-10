const kaarten = [];
for (let i = 0; i < 12; i++) {
    kaarten.push(i, i); // elk nummer twee keer
}
const collect = [];
kaarten.sort(() => 0.5 - Math.random());
const setup = () => {

    const speelveld = document.getElementById('speelveld');


    for(let i = 0; i < 24; i++){
        const kaart = document.createElement("span");
        kaart.className = "vak";
        const foto = document.createElement("img");
        const kaartnummer = kaarten[i];
        const p = `image/kaart${kaartnummer}.png`;
        foto.setAttribute("data-imagesource",p);
        foto.classList.add("kaart","achterkant");
        foto.src="image/achterkant.png";
        kaart.addEventListener("click",toonKaart)
        kaart.appendChild(foto);
        speelveld.appendChild(kaart);
        kaart.addEventListener("click",collectKaart)

        if(speelveld.childElementCount === 6 || speelveld.childElementCount === 13 || speelveld.childElementCount === 20){
            const br = document.createElement("br");
            speelveld.appendChild(br);
        }
    }
}


const toonKaart =(kaart) =>{
    const foto = kaart.currentTarget.querySelector("img")
    foto.src= foto.dataset.imagesource;
    foto.classList.add("voorkant");
}

const collectKaart = (event) => {
    const foto = event.currentTarget.querySelector("img");
    collect.push(foto);
    if(collect.length === 2){
        setTimeout(controleerkaart,1000);
    }
}

const controleerkaart = ()=> {
    const speelveld = document.getElementById('speelveld');

    const kaart1 = collect[0];
    const kaart2 = collect[1];
    const src1 = kaart1.dataset.imagesource;
    const src2 = kaart2.dataset.imagesource;
    console.log("je zit controleer");
    console.log(collect);
    if(src1 === src2){
        removeKaart();

    }else{
        setTimeout(draaiKaartTerugOm,1000);
    }
}
const removeKaart =() =>{
    const kaart1 = collect[0];
    const kaart2 = collect[1];
    kaart1.remove();
    kaart2.remove();

    collect.length = 0;
}
const draaiKaartTerugOm =() =>{

    const kaart1 = collect[0];
    const kaart2 = collect[1];

    kaart1.classList.remove("voorkant");
    kaart1.src = "image/achterkant.png";

    kaart2.classList.remove("voorkant");
    kaart2.src = "image/achterkant.png";

    collect.length = 0;
}
window.addEventListener("load", setup);