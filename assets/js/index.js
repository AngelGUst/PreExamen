/* 
declara variabkes y constantes(uso de scope)
estructura repetitiva y condicional
funciones
eventos
arreglos
listas
arreglos de listas
consumo de api - fetch
*/
//const name = "Juan";
const surname = "Perez";
const lastname = "Gomez";
const age = 10;

// for (var i = 0; i < 10; i++) {
//     console.log(i);
// }
// console.log("i");

// function getData() {
//     return `hola ${name} ${surname} ${lastname} tienes ${age} años ${age >= 18 ? "Eres mayor de edad" : "Eres menor de edad"}`;
// }
// console.log(getData());

//Funciones
//----------------------------------------------------------------------------------
const getData = () =>
    `hola ${name} ${surname} ${lastname} tienes ${age} años ${age >= 18 ? "Eres mayor" : "Eres menor"
    }`;

const getData2 = function () {
    return `hola ${name} ${surname} ${lastname} tienes ${age} años ${age >= 18 ? "Eres mayor" : "Eres menor"
        }`;
};

function getData3(salary, age) {
    return `hola ${name} ${surname} ${lastname}`;
}
console.log(getData3(1000, 20));

//Arrays , prototype
//----------------------------------------------------------------------------------
const colors = ["red", "blue", "gray", "yellow"];
console.log(colors[0]);
console.log(colors);

if (colors.includes("green")) {
    console.log("Existe el color verde ya exite");
} else {
    colors.push("green");
    console.log(colors);
}

colors.forEach((color, index) => {
    console.log(`${index} - ${color}`);
});

//----------------------------------------------------------------------------------

//Listas
const person = {
    name: "Juan",
    surname: "Perez",
    lastname: "Gomez",
    age: 14,
    salary: 1000,
    addres: {
        street: "calle 1",
        number: 123,
        cp: "12345",
        city: "CDMX",
    },
    creditCard: [
        {
            number: "1234 1234 1234 1234",
        },
        {
            number: "1234 1234 1234 1234",
        },
    ],
};

console.log(person.name);

console.log(person.addres.street);
console.log(person.creditCard[0].number);
person.creditCard.forEach((creditCard, index) => {
    console.log(`${index} - ${creditCard.number}`);
});

//colback funtion - funciones que se ejecutan dentro de otras funciones

//desestructuracion
const {
    addres: { street },
} = person;

console.log(person.addres.street);
console.log(street);

//Apreder a fetch

fetch('https://jsonplaceholder.typicode.com/posts')
    .then(response => response.json())
    .then(json => console.log(json));

(async()=>{
    try {
        const response = await fetch('https://jsonplaceholder.typicode.com/posts');
        const data = await response.json();
        data.forEach(({title, userId, body}, index) =>{
            console.log(`${index} - ${title} ${userId} ${body}`);
        })
    } catch(error) {
        console.log(error);
    } finally{
        console.log('finalizado');
    }
})();