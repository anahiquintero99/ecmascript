let array = [1, 2, 3, [1, 2, 3, [1, 2, 3]]];

console.log(array.flat(2));

//matrices en arreglos y niveles.

let array = [1, 2, 3, 4, 5];

console.log(array.flatMap((value) => [value, value * 2]));

//flatmap.

let hello = "       hello World";
console.log(hello);
console.log(hello.trimStart());

let hello = "hello Word       ";
console.log(hello);
console.log(hello.trimEnd());

//eliminamos espacios.

let entries = [
  ["namer", "Anahi"],
  ["age", 22],
];

console.log(Object.fromEntries(entries));
//une objetos

let mySymbol = `My Symbol`;
let symbol = Symbol(mySymbol);
console.log(symbol.description);
