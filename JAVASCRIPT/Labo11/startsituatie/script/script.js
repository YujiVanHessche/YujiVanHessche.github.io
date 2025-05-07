// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.
// 1st div aan maken met class movie, dan p element aanmkane aan appenden aan title van movie dan buttons aanmaken class button
//en dan image toevoegen aan image en description aan description











const createElementWithClassName = (element, className) => {
    let e = document.createElement(element);
    e.setAttribute("class", className);
    return e;
};
const createElementWithClassNameAndText = (element, className, text) => {
    let e =  createElementWithClassName(element, className);
    e.appendChild(document.createTextNode(text));
    return e;
};







const loadMovie = () =>{
    const movieList = document.getElementById('movieList');

    movies.forEach((movie, index)=>{


    })
}









window.addEventListener("load", setup);