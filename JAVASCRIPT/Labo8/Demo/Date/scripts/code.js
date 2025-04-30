const setup = () => {

    let start = new Date('2025-04-01T12:10:30');
    console.log(start);
    //dag van de week
    console.log(start.getDay());
    //maand, hij begint vanaf 0 dus januari is 0
    console.log(start.getMonth() + 1);
    //jaar
    console.log(start.getFullYear());
    //dag
    console.log(start.getDate());

    //datum in formaat plaatsen
    console.log(start.getDate() + "-"
        + (start.getMonth() + 1) + "-"
        + start.getFullYear() + " " + start.getHours()
        + ":" + start.getMinutes() + ":" + start.getSeconds());

    let datum = new Date(2025, 0, 1);
    console.log(datum);

    let event = new Date();
    console.log("toString " + event.toString()); // gebruikt jouw tijdzone

    console.log("toISOString " + event.toISOString()); // zonder rekening houden van tijdzone
    console.log("toTimeString" + event.toTimeString());

    let datumgeboorte = new Date(2006, 9, 15);
    let tussen = (((((event - datumgeboorte)/1000)/60)/60)/24);
    console.log(tussen.toString());















}




window.addEventListener("load", setup);