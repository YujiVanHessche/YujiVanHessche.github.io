const setup = () => {
    let input = document.getElementById("input");
    let button  = document.getElementById("button");
    button.addEventListener("click",voerCommandoUit);
}

const slaCommandoOp = () => {
    let txtInput = document.getElementById("txtSearch");
    let arrayCommandos = JSON.parse(localStorage.getItem("input")) || [];
    let g;
    if (txtInput.value.trim() === "") {
        return;
    }
    let commando = txtInput.value.substring(1, 2);
    let zoekterm = txtInput.value.substring(3).trim();
    if (commando === "g" && zoekterm) {
        g = {
            title: "Google",
            text: zoekterm,
            url: "https://www.google.com/search?q=" + zoekterm
        };

    } else if (commando === "y"&& zoekterm) {
        g = {
            title: "youtube",
            text: zoekterm,
            url: "https://www.youtube.com/results?search_query=" + zoekterm
        };

    } else if (commando === "x"&& zoekterm) {
        g = {
            title: "x",
            text: zoekterm,
            url: "https://x.com/hashtag/" + zoekterm
        };

    } else if (commando ==="i"&& zoekterm){
        g = {
            title: "instagram",
            text: zoekterm,
            url: "https://www.instagram.com/explore/tags/" + zoekterm
        };

    }
    if(g) {
        arrayCommandos.push(g);
        localStorage.setItem("input", JSON.stringify(arrayCommandos));
        txtInput.value = "";
        return g.url;
    }

}


const google = (commandoSuffix) => {
   // commandoSuffix = commandoSuffix.substring(1);
    window.open(`https://www.google.com/search?q=${commandoSuffix}`, "_blank");



}
const twitter = (commandoSuffix) => {
   // commandoSuffix = commandoSuffix.substring(3);
    window.open(`https://x.com/hashtag/${commandoSuffix}`,"_blank");
}
const youtube = (commandoSuffix) => {
   // commandoSuffix = commandoSuffix.substring(3);
    window.open(`https://www.youtube.com/results?search_query=${commandoSuffix}`,"_blank");
}
const instagram = (commandoSuffix) => {
   // commandoSuffix = commandoSuffix.substring(3);
    window.open(`https://www.instagram.com/explore/tags/${commandoSuffix}`,"_blank");
}
const createCard = (title, commandoSuffix, url) => {
  //  let row = document.getElementById("resultContainer");
    let col4 = createElementWithClassName("div", "col-4");
    let card = createElementWithClassName("div", "card" );
    card.classList.add(title.toLowerCase() +  "-card");
    card.style.color = "white";
    let card_body = createElementWithClassName("div", "card-body");
    let card_title = createElementWithClassNameAndText("h5", "card-title",title);
    let card_text = createElementWithClassNameAndText("p", "card-text", commandoSuffix);
    let linkGo = createLinkButton(url);
    linkGo.classList.add(title.toLowerCase() + "-button");

    document.querySelector("#resultContainer .row").appendChild(col4);
    col4.appendChild(card);
    card.appendChild(card_body);
    card_body.appendChild(card_title);
    card_body.appendChild(card_text);
    card_body.appendChild(linkGo);





}
const voerCommandoUit =() => {
    let txtinput = document.getElementById( "txtSearch").value;
    let regex = txtinput.match("\/(g|x|y|i) [a-z]*");
    if(regex != null){
        let search = document.getElementById("txtSearch").value;
        let txtsearch = search.substring(3);
        if(txtinput.match("/g")){
            createCard("google",txtsearch, `https://www.google.com/search?q=${txtsearch}`);
            google(txtsearch);
        }else if(txtinput.match("/x")){
            createCard("twitter",txtsearch, `https://x.com/hashtag/${txtsearch}`);
            twitter(txtsearch);
        }else if(txtinput.match("/y")){
            createCard("youtube",txtsearch, `https://www.youtube.com/results?search_query=${txtsearch}`);
            youtube(txtsearch);
        }else if(txtinput.match("/i")){
            createCard("instagram",txtsearch, `https://www.instagram.com/explore/tags/${txtsearch}`);
            instagram(txtsearch);
        }
        slaCommandoOp();

    }
}
const createLinkButton = (url) => {
    let LinkGo = document.createElement("a");
    LinkGo.setAttribute("href",url);
    LinkGo.setAttribute("target","_blank");
    LinkGo.setAttribute("class","btn btn-primary");
    LinkGo.appendChild(document.createTextNode("Go!"));
    return LinkGo;

}
const cardDetails = () => {
    let txtinput = document.getElementById( "input").value;
    if(txtinput.value.substring(0,2).contains("/g")){

    }
}

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
window.addEventListener("load", setup);