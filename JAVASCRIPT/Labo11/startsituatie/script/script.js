// Plaats alle benodigde Javascript code in dit bestand.
// Zorg ervoor dat je alle functionaliteit die in de opgave gevraagd wordt voorziet.
// 1st div aan maken met class movie, dan p element aanmkane aan appenden aan title van movie dan buttons aanmaken class button
//en dan image toevoegen aan image en description aan description

const likedmovies = [];

const setup = () => {
    loadMovie();
}


const movieindex = (title) => {
    return movies.findIndex(m => m.title === title);
};


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

const createElement = (tag, className = "", textContent = "") => {
    const el = document.createElement(tag);
    if (className) {
        className.split(" ").forEach(cls => el.classList.add(cls));
    }
    if (textContent) el.textContent = textContent;
    return el;
};

const createIconButton = (iconClass, buttonClass, onClick) => {
    const button = createElement("a", buttonClass);
    const icon = createElement("i", iconClass);
    button.appendChild(icon);
    button.addEventListener("click", onClick);
    return button;
};




const loadMovie = () => {
    const movieList = document.getElementById('movielist');
    // const id = movies.length
    movies.forEach((movie, id)=>{
    const div = createElement("div", "movie")
    const text = movies[id].title
    const title = createElementWithClassNameAndText("p", "title", text);
    const description = createElementWithClassNameAndText("p", "description", movie.description);
    const likebutton = createIconButton("fas fa-thumbs-up", "unset likebutton", () => like(movie.title));
    const dislikebutton = createIconButton("fas fa-thumbs-down", "unset dislikebutton", () => dislike(movie.title) );
    const buttons = createElementWithClassName("div", "buttons");
    const image = createElementWithClassNameAndText("img", "image");
    image.src = movies[id].imageUrl;
    //likebutton.setAttribute("data-id",movie.id);
    buttons.appendChild(likebutton);
    buttons.appendChild(dislikebutton);
    div.appendChild(buttons);
    movieList.appendChild(div);
    div.appendChild(title);
    div.appendChild(description);
    div.appendChild(image)


})

}

const like = (text) => {
    const likebarmovies = document.getElementById("likebarmovies");
    const likebar = document.getElementById("likebar");
    likebar.style.visibility = "visible";

    const i = movieindex(text);
    const movie = movies[i];
    const found = likedmovies.find(m => m.title === text);

    if (!found) {
        likedmovies.push(movie);

        const allButtons = document.getElementsByClassName("likebutton");
        if (allButtons[i]) {
            allButtons[i].classList.remove("unset");
            allButtons[i].classList.add("set");
        }

        const div = createElement("div", "movie");
        const titleEl = createElementWithClassNameAndText("p", "title", text);

        const vuilbak = createIconButton("fas fa-trash", "buttons", () => {
            div.remove();
            const index = likedmovies.findIndex(m => m.title === text);
            if (index !== -1) likedmovies.splice(index, 1);

            // Zet knop terug naar unset
            if (allButtons[i]) {
                allButtons[i].classList.remove("set");
                allButtons[i].classList.add("unset");
            }
        });

        titleEl.appendChild(vuilbak);
        div.appendChild(titleEl);
        likebarmovies.appendChild(div);

        likecounter();
    } else {
        dislike(text);
    }
};

//likebarmovies.appendChild(likedmovies);
//div.appendChild(title);
//likecounter();


const dislike = (title) =>{
dislikecounter();
}
const likecounter= () =>{
    let amount = document.getElementById("like");
    amount.textContent = parseInt(amount.textContent)+1;
}
const dislikecounter= () =>{
    let amount = document.getElementById("dislike");
    amount.textContent++;
}






window.addEventListener("load", setup);