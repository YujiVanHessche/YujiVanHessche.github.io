const setup = () => {


    console.log("setup");
    let evenement = {
        naam: "Codeer Workshop Javascript",
        datum: new Date(2025, 3, 15), // 15 april 2025
        locatie: "Kortrijk",
        deelnemers: ["John", "Maria", "Ahmed", "Sophie"]
    }

    const toonEvenementInfo = () => {
        console.log("evenement " + evenement.naam);
        console.log("datum : " + evenement.datum);
        console.log("locatie : " + evenement.locatie);
        console.log("deelnemers : " + evenement.deelnemers.join(" - "));
        let date = new Date();
        let antwoord = (((((evenement.datum - date)/1000)/60)/60)/24);
        console.log("aantal dagen tot het evenement : " + Math.ceil(antwoord)); //afrondne naar boven
    }
    toonEvenementInfo(evenement);



}
window.addEventListener("load", setup);