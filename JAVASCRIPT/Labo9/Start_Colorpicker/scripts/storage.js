

const storeSliderValues = () => {
    let red = document.getElementById("sldRed").value;
    let green = document.getElementById("sldGreen").value;
   let blue = document.getElementById("sldBlue").value;
    let rgb = {
        red : red,
        green : green,
        blue: blue
    };
    let jsonText = JSON.stringify(rgb);
    localStorage.setItem('vives.be.sliderValues', jsonText);
};

const restoreSliderValues = () => {
    let jsontext = localStorage.getItem('vives.be.sliderValues');
    if(jsontext != null) {
        let rgb = JSON.parse(jsontext);
        document.getElementById("sldRed").value = rgb.red;
        document.getElementById("sldGreen").value = rgb.green;
        document.getElementById("sldBlue").value = rgb.blue;
    }

};

const storeSwatches = () => {
    // bouw een array met kleurinfo objecten
    let swatches = document.querySelectorAll("#swatchComponents .swatch");
    let rgbcolor = [];
    for (let i = 0; i < swatches.length; i++) {
        let swatch = swatches[i];
        rgbcolor.push({
            red: swatch.getAttribute("data-red"),
            green: swatch.getAttribute("data-green"),
            blue: swatch.getAttribute("data-blue")
        });
    }
    localStorage.setItem("swatches", JSON.stringify(rgbcolor));

};

const restoreSwatches = () => {
    let swatches = JSON.parse(localStorage.getItem("swatches"));
    for (let i = 0; i < swatches.length; i++) {
        let swatch = swatches[i]
        addSwatchComponent(swatch.red, swatch.green, swatch.blue);
    }

};
