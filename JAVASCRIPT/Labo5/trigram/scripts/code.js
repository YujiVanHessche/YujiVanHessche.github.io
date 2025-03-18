const setup = () => {

    let button = document.getElementById("btnTrigram");
    button.addEventListener("click", toontrigrams )

}


const toontrigrams = () => {
    let txtTekst = document.getElementById("woord");
    let tekst = txtTekst.value;
    let lstTrigrams = document.getElementById("lstTrigrams");
    let trigrams = getTrigrams(tekst);
    let output = "";
    for (let i = 0; i < trigrams.length; i++) {
        output += "<li>"+trigrams[i]+"</li>"
        console.log(output)
    }
    lstTrigrams.innerHTML = output;
}

const getTrigrams = (tekst) => {
    let result =[];
    let trigram;
    for(let i = 0; i < tekst.length - 3; i++){
        trigram=tekst.slice(i,i+3);
        result.push(trigram);
    }
    return result;
}
window.addEventListener("load", setup);