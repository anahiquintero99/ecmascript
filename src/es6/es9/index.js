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

const helloWorld = () => {
  return new Promise((resolve, reject) => {
    true
      ? setTimeout(() => resolve("Hello World"), 3000)
      : reject(new Error("Test Error"));
  });
};

helloWorld()
  .then((resonse) => console.log(resonse))
  .catch((error) => console.log(error))
  .finally(() => console.log("Finalizo"));
