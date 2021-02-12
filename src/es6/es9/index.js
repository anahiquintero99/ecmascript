const obj = {
  name: "Anahi",
  age: 22,
  country: "MX",
};

let { name, ...all } = obj;
console.log(all);

const obj = {
  name: "Oscar",
  age: 22,
};

const obj1 = {
  ...obj,
  country: "MX",
};

console.log(obj1);

//Juntar objetos
