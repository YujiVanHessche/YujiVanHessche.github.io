const setup = () => {
    let button = document.getElementById("button");
    button.addEventListener("click", verwerkTekst)
}

const maakMetSpaties = (inputText) => {
    let result = '';
    for (let i = 0; i < inputText.length; i++) {
        result += inputText[i] + ' ';
    }
    return result.trim();
};

const verwerkTekst = () => {
    let input = document.getElementById('tekst').value;
    let result = maakMetSpaties(input);
    console.log(result);
}
window.addEventListener("load", setup);