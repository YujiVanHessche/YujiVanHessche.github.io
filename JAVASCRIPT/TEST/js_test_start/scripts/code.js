const setup = () => {

    let dropdown = document.getElementById('dropdown');
    dropdown.addEventListener('change', changeImage)
    let text = document.getElementById('text');
    text.addEventListener('change', changeText);

}

 const changeImage = () => {
     let image = document.getElementById("img");
     let dropdown = document.getElementById('dropdown');
     let zin = document.getElementById('zin');
     let selectedValue = dropdown.options[dropdown.selectedIndex].value;
     if(selectedValue === 'zonder een ei') {
         image.className= 'img';
         image.innerHTML = 'Hierboven een kip zonder ei'

     }else if (selectedValue === 'met een ei') {
         image.className= 'with-egg';
         zin.innerHTML = 'Hierboven een kip met een ei'
     }else if (selectedValue === 'kies'){
         image.className= 'hidden';
     }
 }

 const changeText = () => {
    let text = document.getElementById('text').value;
    let zin = document.getElementById('zin');
    let note = document.getElementById('note');
    const getal = zin.count('z');
     if(text === 't'){
         note.innerHTML = 'Letter "T" komt 0 keer voor in bovenstaande zin';
     }


 }

window.addEventListener("load", setup);