const setup = () => {

    let stop = false;
    let dropdownlist = document.getElementById('dropdownlist');
    while(!stop){
        let gemeente = window.prompt("Geef hier in een gemeente in. Indien u wilt stoppen voer 'stop in'");
        if(gemeente === "stop"){
            stop = true;
        }else{
            let option = document.createElement("option");
            option.textContent = gemeente;
            dropdownlist.appendChild(option);
        }

        const opties = Array.from(dropdownlist);
        opties.sort((a,b) => a.text.localeCompare(b.text));
        dropdownlist.textContent = "";
        opties.forEach(option => dropdownlist.appendChild(option));
    }
        // let gemeente = window.prompt("Geef hier in een gemeente in. Indien u wilt stoppen voer 'stop in'");

}
window.addEventListener("load", setup);