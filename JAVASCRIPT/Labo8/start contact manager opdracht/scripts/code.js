let personen = [];

// Event listener (btnBewaar click)
// Bewaar de wijzigingen die in de user interface werden aangebracht

const toonInfo = () => {

}
const bewaarBewerktePersoon = () => {
    console.log("Klik op de knop bewaar");
    let lstPersonen = document.getElementById("lstPersonen");
    // valideer alle input data en controleer of er geen errors meer zijn
    // valideer();
    let elements = document.getElementsByClassName("invalid");
    if (elements.length == 0) {
        // alles in orde, we mogen bewaren
        let persoon = {};
        if (lstPersonen.selectedIndex == -1)//toont is het nieuw persoon of is het een bestaande
            {
            // nieuwe persoon bewaren
            vulPersoonOpBasisVanUserInterface(persoon);
            personen.push(persoon); // toevoegen aan interne lijst
            voegPersoonToeAanLijstInUserInterface(persoon);
            bewerkNieuwePersoon();
        } else {
            // bestaande persoon wijzigen
            persoon = personen[lstPersonen.selectedIndex];
            vulPersoonOpBasisVanUserInterface(persoon);
            updatePersoonInLijstInUserInterface(persoon);
            bewerkNieuwePersoon();
        }
    }





    // let persoon = {
    //     firstname: document.getElementById("txtVoornaam").value ,
    //     lastname: document.getElementById("txtFamilienaam").value,
    //     birthdate: document.getElementById("txtGeboorteDatum").value,
    //     email: document.getElementById("txtEmail").value,
    //     aantalkids: document.getElementById("txtAantalKinderen").value,
    // }
    // let elements = document.getElementsByName("invalid");
    // personen.push(persoon);
    // console.log(personen);
    // let option =  document.createElement('option');
    // lstPersonen.appendChild(option);
    // let tekst = document.createTextNode(persoon.firstname);
    // option.appendChild(tekst);
    // bewerkNieuwePersoon();
    // indien ok, bewaar de ingegeven data.

        // een nieuw aangemaakte persoon voegen we toe
        // een bestaande persoon in de lijst passen we aan

    // zorg ervoor dat de naam en voornaam ook aangepast en/of zichtbaar zijn in de lijst na updaten
};
const updatePersoonInLijstInUserInterface = (persoon) => {
    let voornaam = document.getElementById("txtVoornaam").value;
    let options = document.getElementById("lstPersonen").value;
    let selectedindex = options.selectedIndex;
    options[selectedindex].addEventListener("click", () => {
        console.log("haa");
    })
}
const vulPersoonOpBasisVanUserInterface = (persoon) => {
    persoon.firstname = document.getElementById("txtVoornaam").value.trim();
        persoon.lastname =  document.getElementById("txtFamilienaam").value.trim();
        persoon.birthdate = document.getElementById("txtGeboorteDatum").value.trim();
        persoon.email = document.getElementById("txtEmail").value.trim();
        persoon.aantalkids = document.getElementById("txtAantalKinderen").value.trim();
}

const voegPersoonToeAanLijstInUserInterface = (persoon) => {
    let lstPersonen = document.getElementById("lstPersonen");
    let option = document.createElement("option");
    option.text = persoon.firstname + " " + persoon.lastname;
    option.value = persoon.email
    lstPersonen.appendChild(option);
    lstPersonen.selectedIndex = personen.length - 1;
};
// Event listener (btnNieuw click)
const bewerkNieuwePersoon = () => {
    console.log("Klik op de knop nieuw");


    let lstPersonen = document.getElementById("lstPersonen");
    lstPersonen.selectedIndex = -1;
    let inputElem = document.querySelectorAll('input[type=text]')
    inputElem.forEach((elem) => {
        elem.value = " ";
    });

    // Zet de user interface klaar om de gegevens van een nieuwe persoon in te voeren
};


// onze setup functie die de event listeners registreert
const setup = () => {
    let btnBewaar = document.getElementById("btnBewaar");
    btnBewaar.addEventListener("click", bewaarBewerktePersoon);

    let btnNieuw = document.getElementById("btnNieuw");
    btnNieuw.addEventListener("click", bewerkNieuwePersoon);

    let lstPersonen = document.getElementById("lstPersonen");
    // voeg een change listener toe aan lstPersonen. Bij het klikken op een option element in de lijst
    // moet de data van die persoon getoond worden in het formulier
};

window.addEventListener("load", setup);