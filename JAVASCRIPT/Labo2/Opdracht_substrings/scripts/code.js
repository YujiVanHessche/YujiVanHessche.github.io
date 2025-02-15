const setup = () => {
    let btnSubstring = document.getElementById("btnSubstring");
    btnSubstring.addEventListener("click", substring);

}

const substring = () => {
    let txtOutput = document.getElementById("txtOutput");
    let txtInput = document.getElementById("txtInput");
    let txtBegin = document.getElementById("txtBegin");
    let txtEinde = document.getElementById("txtEinde");

    let tekst = txtInput.value;
    let idxBegin = parseInt(txtBegin.value, 10);
    let idxEinde = parseInt(txtEinde.value, 10);

    let resultaatSubstring = tekst.substring(idxBegin, idxEinde);
    let resultaatSlice = tekst.slice(idxEinde, idxEinde);
    txtOutput.innerHTML = "Het resultaat is ${resultaatSubstring} en ${resultaatSlice}";
}
window.addEventListener("load", setup);