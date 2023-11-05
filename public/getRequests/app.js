// var num = 10;
// var str = "str";
// var bool = true;
// var arr = [];

// console.log(`
// num is ${typeof num}
// str is ${typeof str}
// bool is ${typeof bool}
// arr is ${typeof arr}
// `);

// let myJoke = {
//   setup: "Why did the man go to the bar",
//   punchline: "Because he needed to drink a drink",
// };

// console.log(myJoke.setup);
// console.log(myJoke.punchline);

// const person = {
//   name: "person's name",
//   age: "person's age",
//   viewName: function () {
//     console.log(this.name);
//   },
// };

// const bird = {
//   name: "penguin",
//   colour: "black and white",
//   deleteName: function () {
//     delete this.name;
//   },
// };

// const user = {
//   name: "name",
//   email: "email@g.g",
//   deleteUser: function () {
//     delete this.name;
//     delete this.email;
//     delete this.deleteUser;
//   },
// };

// const weather = {
//   weather: "sunny",
//   "temperature-celsius": 17,
//   convertToFahrenheit: function () {
//     const fahrenheit = (this["temperature-celsius"] * 9) / 5 + 32;
//     this["temperature-fahrenheit"] = fahrenheit;
//     return this;
//   },
// };
// const dictionary = {
//   let: "To give permission or opportunity to; allow.",
//   checkDictionarySize: function () {
//     return Object.keys(this).length;
//   },
// };

// // console.log([person, bird, user, weather, dictionary]);
// // person.viewName();
// // bird.deleteName();
// // console.log(bird);
// // user.deleteUser();
// // console.log(user);
// // weather.convertToFahrenheit();
// // console.log(weather);
// // console.log(dictionary.checkDictionarySize());

// const newDictionary = Object.create(dictionary);
// newDictionary.flesh =
//   "The soft tissue of the body of a vertebrate, covering the bones and consisting mainly of skeletal muscle and fat.";
// newDictionary.certain = "Definite; fixed";
// console.log(newDictionary);
// console.log(newDictionary.checkDictionarySize());
// console.log(newDictionary.let);

// const multiplyNums = (a, b) => a * b;
// const divideNums = (a, b) => a / b;
// function decreaseValueOnlyIfPositiveValue(val) {
//   if (val > 0) {
//     return val - 1;
//   }
//   return val;
// }

// function countTillNumFromOneBySecondParameter(num, increment) {
//   let returnVal = 1;
//   for (let i = 1; i <= num; i += increment) {
//     returnVal *= i;
//   }
//   return returnVal;
// }

// function returnsRandomInt(num, rand = Math.random()) {
//   if (rand > 0.5) return Math.floor(rand * num);
//   return Math.ceil(rand * num);
// }

// console.log(
//   divideNums(
//     multiplyNums(
//       countTillNumFromOneBySecondParameter(
//         decreaseValueOnlyIfPositiveValue(
//           returnsRandomInt(returnsRandomInt(231))
//         ),
//         returnsRandomInt(30)
//       ),
//       returnsRandomInt(12)
//     ),
//     returnsRandomInt(5)
//   )
// );

// class Animal {
//   constructor(species, weight, colour, sound) {
//     this.species = species;
//     this.weight = weight;
//     this.colour = colour;
//     this.sound = sound;
//   }
//   makeSound() {
//     console.log(this.sound);
//     return this.sound;
//   }
//   die() {
//     this.weight = 0;
//     return this;
//   }
// }

// class Bird extends Animal {
//   constructor(species, weight, colour, sound, canFly = true) {
//     super(species, weight, colour, sound);
//     this.canFly = canFly;
//   }
//   fly() {
//     if (this.canFly) {
//       console.log("Flying!");
//       return "Flying";
//     } else {
//       console.log(":(");
//       return ":(";
//     }
//   }
// }

// const eagleObj = {
//   species: "Eagle",
//   weight: 0,
//   colour: "Gold",
//   sound: "Screech",
//   canFly: true,
// };

// const pinguObj = {
//   species: "Penguin",
//   weight: 0,
//   colour: "black and white",
//   sound: "noot noot",
//   canFly: false,
// };

// const eagle = new Bird(
//   eagleObj.species,
//   eagleObj.weight,
//   eagleObj.colour,
//   eagleObj.sound
// );
// const pingu = new Bird(
//   pinguObj.species,
//   pinguObj.weight,
//   pinguObj.colour,
//   pinguObj.sound,
//   pinguObj.canFly
// );

// console.log("eagle", eagle.fly(), eagle.makeSound(), eagle.die());
// console.log("pingu", pingu.fly(), pingu.makeSound(), pingu.die());

const squareNum = x => x ** 2;
const cubeNum = x => x ** 3;
const findAreaOfCircle = r => (Math.PI * r ** 2).toFixed(2);
const findVolumeOfSphere = r => (4/3*Math.PI*r**3).toFixed(2);

console.log(squareNum(3),cubeNum(3),findAreaOfCircle(3),findVolumeOfSphere(3));