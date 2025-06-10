// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.


const setup = () =>{
const movielist = document.getElementById('movielist');

for (let i = 0; i < movies.length; i++) {
    const amovie = document.createElement("div");
    amovie.classList.add("movie");
    const header = document.createElement("p");
    header.textContent = movies[i].title;
    header.classList.add("title");
    const image = document.createElement("img");
    image.src = movies[i].imageUrl;
    const description = document.createElement("p");
    description.textContent = movies[i].description;
    const like = document.createElement("i")
    like.classList.add("fas","fa‐thumbs‐up");
    const dislike = document.createElement("i")
    dislike.classList.add("fas","fa‐thumbs‐down");
    const buttons = document.createElement("div");
    buttons.classList.add("buttons");
    const alike = document.createElement("a");
    alike.classList.add("unset","likebutton");
    dislike.classList.add("unset","dislikebutton");
    const adislike = document.createElement("a");
    header.classList.add("header");
    buttons.appendChild(alike);
    buttons.appendChild(adislike);
    movielist.appendChild(amovie);
    amovie.appendChild(header);
    amovie.appendChild(buttons)
    amovie.appendChild(image);
    amovie.appendChild(description);
}

}








window.addEventListener("load", setup);