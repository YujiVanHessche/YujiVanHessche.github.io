
let opgeslagen = JSON.parse(localStorage.getItem("color")) || [];

const setup = () => {
    let sliders = document.getElementsByClassName("slider");
    const save = document.getElementById("savebutton");
    for (let i = 0; i < sliders.length; i++) {
        sliders[i].addEventListener("change", update);
        sliders[i].addEventListener("input", update);
    }update();
    save.addEventListener("click", opslaan );
    const toonbutton = document.getElementById("toonbutton");
    toonbutton.addEventListener("click", maakKleuren);
}

const update = () => {

    console.log("update");
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value
    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML = blue;
    let swatch = document.getElementById("swatch");
    swatch.style.backgroundColor="rgb("+red+", "+green+", "+blue+")";

}

const opslaan = ()=>{
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
    let blue = document.getElementById("sldBlue").value
    document.getElementById("lblRed").innerHTML = red;
    document.getElementById("lblGreen").innerHTML = green;
    document.getElementById("lblBlue").innerHTML = blue;


    let waardes = {rood: red,groen: green,blauw: blue};
    opgeslagen.push(waardes);
    localStorage.setItem("color", JSON.stringify(opgeslagen));

}

const maakKleuren =()=>{
    const items = document.getElementById("items");
    for (let i = 0; i < opgeslagen.length; i++) {
        const waardes = opgeslagen[i];
        let red = opgeslagen[i].rood;
        let green = opgeslagen[i].groen;
        let blue = opgeslagen[i].blauw;
        let swatch = document.createElement("div");
        swatch.style.backgroundColor="rgb("+red+", "+green+", "+blue+")";
        swatch.classList.add("swatch");
        let knopje = document.createElement("input");
        knopje.type = "button";
        knopje.value = "x";
        knopje.dataset.index = i;
        swatch.appendChild(knopje);
        items.appendChild(swatch);
        knopje.addEventListener("click",verwijderBlokje)
    }

}


const verwijderBlokje = (event) => {
    const index = event.target.dataset.index; // Haal index op van aangeklikt knopje
    opgeslagen.splice(index, 1); // Verwijder dat item uit de array
    localStorage.setItem("color", JSON.stringify(opgeslagen)); // Sla nieuwe array op

    localStorage.setItem("color", JSON.stringify(opgeslagen));

    // Verwijder het blokje uit de DOM
    const blokje = event.target.parentElement;
    blokje.remove();

    // ✅ Herindexeer de data-index van de overblijvende knoppen
    const knoppen = document.querySelectorAll("#items .swatch input");
    knoppen.forEach((knop, i) => {
        knop.dataset.index = i;
    });
};



window.addEventListener("load", setup);