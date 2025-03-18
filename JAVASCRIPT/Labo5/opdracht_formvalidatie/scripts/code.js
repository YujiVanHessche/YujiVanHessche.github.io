const setup = () => {
    let btnValideer = document.getElementById("validate");
    btnValideer.addEventListener("click", valideer);
};

const valideer = () => {
    let allValid = true; // To keep track of whether all fields are valid

    // Validatie voornaam
    let txtVoornaam = document.getElementById("voornaam");
    let errVoornaam = document.getElementById("errorvoor");
    let voornaam = txtVoornaam.value.trim();

    if (voornaam.length > 30) {
        txtVoornaam.className = "invalid";
        errVoornaam.innerHTML = "Max. 30 karakters";
        allValid = false;
    } else {
        txtVoornaam.className = "";
        errVoornaam.innerHTML = "";
    }

    // Validatie familienaam
    let txtfamillieNaam = document.getElementById("familienaam");
    let errfamillieNaam = document.getElementById("errorfam");
    let famillienaam = txtfamillieNaam.value.trim();

    if (!famillienaam) {
        txtfamillieNaam.className = "ongeldig";
        errfamillieNaam.innerHTML = "Dit veld is verplicht";
        allValid = false;
    } else if (famillienaam.length > 50) {
        txtfamillieNaam.className = "ongeldig";
        errfamillieNaam.innerHTML = "Max. 50 karakters";
        allValid = false;
    } else {
        txtfamillieNaam.className = "";
        errfamillieNaam.innerHTML = "";
    }

// Validatie geboortedatum
    let txtGeboortedatum = document.getElementById("datum");
    let errGeboortedatum = document.getElementById("errordate");
    let geboortedatum = txtGeboortedatum.value.trim();

    const datePattern = /^\d{4}-\d{2}-\d{2}$/; // jj-mm-dd

    const isschrikkeljaar = (year) => {
        return (year % 4 === 0 && (year % 100 !== 0 || year % 400 === 0));
    }

    const isValidDate =(geboortedatum) => {
        let [jaar, maand, day] = geboortedatum.split("-").map(num => parseInt(num, 10));
        if (maand < 1 || maand > 12) return false;
        let daysInMonth = [31, (isschrikkeljaar(jaar) ? 29 : 28), 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
        return day >= 1 && day <= daysInMonth[maand - 1];
    }

    if (!geboortedatum) {
        txtGeboortedatum.className = "ongeldig";
        errGeboortedatum.innerHTML = "Verplicht veld";
        allValid = false;
    } else if (!datePattern.test(geboortedatum)) {
        txtGeboortedatum.className = "ongeldig";
        errGeboortedatum.innerHTML = "Gebruik het formaat jj-mm-dd";
        allValid = false;
    } else if (!isValidDate(geboortedatum)) {
        txtGeboortedatum.className = "ongeldig";
        errGeboortedatum.innerHTML = "Ongeldige datum";
        allValid = false;
    } else {
        txtGeboortedatum.className = "";
        errGeboortedatum.innerHTML = "";
    }



    // Validatie email
    let txtEmail = document.getElementById("email");
    let erroremail = document.getElementById("erroremail");
    let email = txtEmail.value.trim();
    let emailArray = email.split("@");

// Controle email
    if (emailArray.length > 2) {
        txtEmail.className = "ongeldig";
        errEmail.innerHTML = "er mag maar 1 @ teken in je mail staan";
        erroremail = false;
    } else if (!email) {
        txtEmail.className = "ongeldig";
        erroremail.innerHTML = "Verplicht veld";
        allValid = false;
    } else if (emailArray[0] === "" || emailArray[1] === "" || email.indexOf("@") === -1 || email.indexOf("@") === 0 || email.indexOf("@") === email.length - 1) {
        txtEmail.className = "ongeldig";
        erroremail.innerHTML = "Geen geldig e-mailadres";
        allValid = false;
    } else {
        txtEmail.className = "";
        erroremail.innerHTML = "";
    }


    // Validatie aantal kinderen
    let txtAantalKinderen = document.getElementById("nummer");
    let errorAantalKinderen = document.getElementById("erroraantalkids");
    let aantalKinderen = txtAantalKinderen.value.trim();



    if (aantalKinderen && (isNaN(aantalKinderen) || aantalKinderen < 0 || aantalKinderen > 99)) {
        txtAantalKinderen.className = "ongeldig";
        if (isNaN(aantalKinderen)) {
            errorAantalKinderen.innerHTML = "Voer een geldig getal in";
        } else if (aantalKinderen < 0) {
            errorAantalKinderen.innerHTML = "Het aantal kinderen mag niet negatief zijn";
        } else if (aantalKinderen > 99) {
            errorAantalKinderen.innerHTML = "te vruchtbaar";
        }
        allValid = false;
    } else {
        txtAantalKinderen.className = "";
        errorAantalKinderen.innerHTML = "";
    }

    // valid popup
    if (allValid) {
        alert("Proficiat! Alle velden zijn goed ingevuld.");
    }
};

window.addEventListener("load", setup);
