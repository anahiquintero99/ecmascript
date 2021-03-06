//version one
function newfunction(name, age, country) {
  var name = name || "anahi";
  var age = age || 22;
  var country = country || "CDMX";
  console.log(name, age, country);
}

//es6

function newFunction2(name = "anahi", age = 22, country = "CDMX") {
  console.log(name, age, country);
}

newFunction2();
newFunction2("fernando", "23", "MX");

//phrase

let hello = "Hello";
let world = "World";

let epicPhrase = hello + " " + world;
console.log(epicPhrase);

let epicPhrase2 = `${hello} ${world}`;
console.log(epicPhrase2);

//js
let lorem = "Una frase epica \n" + "otra frase epica para el programa.";

// es6
let lorem2 = `otra frase epica que necesitamos
ahora es otra frase
`;

console.log(lorem);
console.log(lorem2);

let person = {
  name: "Anahi",
  age: 22,
  country: "MX",
};

console.log(person.name, person.age);

//es6
let { name, age } = person;
console.log(name, age);

let team1 = ["Oscar", "Julian", "Ricardo"];
let team2 = ["Valeria", "Yesica", "Camila"];

let education = ["David", ...team1, ...team2];

console.log(education);

var hola = "hola";

import { hello } from "./clases";

hello();
