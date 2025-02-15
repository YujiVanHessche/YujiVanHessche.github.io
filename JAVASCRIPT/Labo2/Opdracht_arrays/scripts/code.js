const setup = () => {
    let familie = ['familielid1','familielid2','familielid3','familielid4','familielid5'];
    console.log(familie.length);
    console.log(familie[0]);
    console.log(familie[2]);
    console.log(familie[4]);
    for(let i = 0; i < familie.length; i++) {
        console.log("familieLid " + familie[i]);
    }
    console.log("============");
    voegNaamToe(familie);
    for(let i = 0; i < familie.length; i++) {
        console.log("familieLid " + familie[i]);
    }familie.join(" - ");

}
const voegNaamToe = (leden) =>{
    let naam = window.prompt();
    leden.push(naam);
    for(let i = 0; i < leden.length; i++) {
        console.log("familieLid " + leden[i]);
    }
}

window.addEventListener("load", setup);