const setup = () => {

    let inputtekst = "Gisteren zat de jongen op de stoep en at de helft van de appel";
    let outputtekst = vervangAlles(inputtekst,"de","het");
    let oud = "de";
    let nieuw ="het";
    console.log(outputtekst);
}


const vervangAlles = (brontekst, oud, nieuw) => {
    let result = brontekst;
    let idx=result.indexOf(oud);

    while(idx!=-1){
        let voor = result.slice(0, idx);
        let na = result.slice(idx + oud.length, result.length);
        result = voor + nieuw+ na;
        idx = result.indexOf(oud, idx+nieuw.length);
    }
    return result

}
//
// var zin = "Gisteren zat de jongen op de stoep en at de helft van de appel";
//
// const vervangDeHet = (zin) => {
//     let locaties = [];
//     for (let i = 0; i < zin.length; i++) {
//         if (zin[i].toLowerCase() === "d" && zin[i + 1].toLowerCase() === "e") {
//             locaties.push(i);
//         }
//     }
//
//     return locaties;
// }
//
// const replace = (locaties) =>{
//     for (let i = 0; i < locaties.length; i++) {
//         zin = zin.slice(0, locaties[i] + i) + "het" + zin.slice(locaties[i] + 2 + i);
//     }
//     console.log(zin);
// }
//
// let locaties = vervangDeHet(zin);
// console.log(locaties);
//
// let nieuweZin = replace(locaties);
//
// console.log(nieuweZin);
//
// window.addEventListener("load", vervangDeHet);

window.addEventListener("load", setup);