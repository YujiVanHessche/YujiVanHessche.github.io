let familieleden =[];


const setup = () => {
    familieleden.push("lid1");
    familieleden.push("lid2");
    familieleden.push("lid3");
    familieleden.push("lid4");
    familieleden.push("lid5");
    console.log(familieleden.length);
    console.log(familieleden.at(0));
    console.log(familieleden.at(2));
    console.log(familieleden.at(4));
    let iets = prompt("geef een naam in");
    familieleden.push(iets);
    console.log(familieleden.at(5));
    window.prompt("hello");
    window.confirm("hello");


}
window.addEventListener("load", setup);