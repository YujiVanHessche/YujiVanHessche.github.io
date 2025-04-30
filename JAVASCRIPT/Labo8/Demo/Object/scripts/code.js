const setup = () => {
    let student = {}; // een leeg object
    student.firstName = "John";
    student.lastName = "Doe";
    student.age = new Date(2000, 1, 1);
    student.eyeColor = "blue";

    console.log(student.firstName);

    let student1 = {
        firstName: "John", lastName: "Doe", age: new Date(2000, 0, 1, 10, 30), eyeColor: "blue"
    };
    console.log(student1.firstName);
    console.log(student1.age);

    let text = JSON.stringify(student1); //heel veel gebruikt, dan krijg je per variabele wat er in zit
    console.log(text);


// uitbreiding

    let student2 = {
        firstName: "John",
        lastName: "Doe",
        address: {
            zipCode: 8500,
            city: "Kortrijk"
        }
    };
    let tekst = JSON.stringify(student2);
    console.log(tekst);

    console.log(student2.address.zipCode);


    let students = [
        {
            firstName: "John",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk",
            }
        },
        {
            firstName: "VIVES",
            lastName: "Doe",
            address: {
                zipCode: 8500,
                city: "Kortrijk",
            },
        }
    ];
    tekst = JSON.stringify(students);
    console.log(tekst);
    let tekstJs = JSON.parse(tekst);
    console.log(tekstJs[0].firstName);


    


}
window.addEventListener("load", setup);