"use strict"

const spoon = true;
console.log("spoon", typeof spoon);

const mmr= null;
console.log("mmr", typeof mmr);

const girlfriend = undefined;
console.log("girlfriend", typeof girlfriend);

const jstNum = 228;
console.log("jstNum", typeof jstNum);

const sponge = "panties";
console.log("sponge", typeof sponge);

const balloon = {name:"cherivichok"};
console.log("balloon", typeof balloon);

const mark = Symbol("flag");
console.log("mark", typeof mark);

const bigNum = BigInt(123123123123123123);
console.log("bigNum", typeof bigNum);

////////////////////////////task-3.2

const firstString = prompt("Укажите ваше имя");
const secondString = prompt("Укажите вашу фамилию");
const thirdString = prompt("Укажите ваш возраст");
console.log(firstString, secondString, thirdString);

/////////////////////////task-3.3

const number = 10369;
const numToString = number.toString();
console.log(numToString[0] + ` ` + numToString[1] + ` ` + numToString[2] + ` ` + numToString[3] + ` ` + numToString[4]);
