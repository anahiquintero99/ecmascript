//objetos
let name1 = "Anahi";
let age = 22;

obj = { name1, age };
console.log(obj);

const names = [
  { name: "Anahi", age: 22 },
  { name: "Yesica", age: 27 },
];

//arrow function

let listOfNames = names.map((item) => console.log(item.name));

const listOfNames2 = (name1, ages, country) => {
  console.log();
};

const listOfNames3 = (names) => {
  console.log();
};

const square = (num) => num * num;

const helloPromise = () => {
  return new Promise((resolve, reject) => {
    if (true) {
      resolve("Hey!");
    } else {
      reject("Ups!!");
    }
  });
};

helloPromise()
  .then((response) => console.log(response))
  .then(() => console.log("hola"))
  .catch((error) => console.log(error));
