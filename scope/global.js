var hello = "Hello";
let world = "Hello world";
const helloworld = "Hello World";
console.log(hello);

const anotherFunction = () => {
  console.log(hello);
  console.log(world);
  console.log(helloworld);
};

anotherFunction();

const helloWorld = () => {
  globalVar = "Im global";
};

helloWorld();
console.log(globalVar);
