console.log("Hello World!\n==========\n");
console.log(
  "Follow the steps in the README.md file to complete the exercises:\n==========\n"
);
/*
Exercise 1
let favoriteNumber = 209;
//favoriteNumber = Math.floor(Math.random() *100);

console.log(favoriteNumber);

const input = window.prompt("Please input a number");
console.log(input);

if (input < favoriteNumber) {
  console.log("too low");
} else if (input > favoriteNumber) {
  console.log("too high");
} else {
  console.log("Congratulations!");
}
*/

/*
// Exercise 2
const birthMonth = window.prompt("What is your birth month?");
console.log(birthMonth);
const lowerCaseBirthMonth = birthMonth.toLowerCase();
console.log(lowerCaseBirthMonth);
const shortenedBirthMonth = lowerCaseBirthMonth.slice(0, 3); /* 0,1,2 

switch (birthMonth) {
  
  case "jan":
  case "feb":
  case "mar":
    console.log("WInter Season");
    break;
  case "apr":
  case "may":
  case "jun":
    console.log("Spring Season");
    break;
  case "jul":
  case "aug":
  case "sep":
    console.log("Summer Season");
    break;
  case "oct":
  case "nov":
  case "dec":
    console.log("WInter Season");
    break;

  default :
    console.log("Please enter a valid birth month");
}

*/
// Ecercise3 

let typeId = "01";
let colorId = "PU";
let sizeId = "L";

let type = "";
let color = "";
let size = "";

/*
if (typeId == "01") {
  type = "Tank top";
} else if (typeId == "02") {
  type = "T-Shirt";
} else if (typeId == "03") {
  type = "Long Sleeve";
} else if (typeId == "04") {
  type == "Sweat Shirt";
} else {
  type = "Other";
}
*/
switch (typeId) {
  case "01":
  type = "Tank top";
  console.log("Tank top");
  break;

  case "02":
  type = "T-Shirt";
  console.log("T-Shirt");
  break;

  case "03":
  type = "Long Sleeve";
  console.log("Long Sleeve");
  break;

  case "04":
  type = "Sweat Shirt";
  console.log("Sweat Shirt");
  break;

  default:
    type = "other";
  console.log("other");
  break;
}
/*
if (colorId == "BK") {
  color = "Black";
} else if (colorId == "BL") {
  color = "Blue";
} else if (colorId == "RD") {
  color = "Red";
} else if (colorId == "PU") {
  color = "Purple";
} else {
  color = "White";
}
*/

switch (colorId) {
  case "Bk":
    color = "Black";
    console.log("black");
    break;
  case "Bl":
    colorId == "Blue";
    console.log("Blue");
    break;
  case "RD":
    colorId == "Red";
    console.log("Red");
    break;
  case "PU":
    color = "Purple";
    console.log("Purple");
    break;
  default:
    color = "white";
    console.log("White");

}

/*
if (sizeId == "S") {
  size = "Small";
} else if (sizeId == "M") {
  size = "Medium";
} else if (sizeId == "L") {
  size = "Large";
} else if (sizeId == "XL") {
  size = "Extra Large";
} else {
  size = "One Size Fits All";
}
*/
switch (sizeId) {
  case "S":
    size = "Small";
    console.log("Small");
    break;

  case "M":
    size = "Medium";
    console.log("Medium");
    break;

  case "L":
    size = "Large";
    console.log("Large");
    break;

  case "XL":
    size = "Extra Large";
    console.log("Xxtra Large");
    break;

    default:
    size = "One Size Fits All";
    console.log("One Size Fits All");
    break;

  }
console.log(`Product: ${size} ${color} ${type}`);

