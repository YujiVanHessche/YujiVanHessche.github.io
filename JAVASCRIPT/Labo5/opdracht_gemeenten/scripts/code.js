const setup = () => {
    sorteergemeentes();
}

const sorteergemeentes = () => {
    let gemeenten = [];
    let input = prompt('geef eens gemeentes');
    while(input !== 'stop') {
        gemeenten.push(input);
        input = prompt('geef gemeentes');
    }
    gemeenten.sort();
    const lijst = document.getElementById('lijst');
    gemeenten.forEach(gemeente => {
        lijst.add(new Option(gemeente));
    })
}
window.addEventListener("load", setup);