document.write("<h1>For Loop</h1>");

for (let i = 1; i <= 10; i++) {
    document.write("<h3>" + i + "</h3>");
}


document.write("<br><br><h1>While Loop<h1></h1>");
let i = 1;
while (i <= 10) {
    document.write("<h3>" + i + "</h3>");
    i++;
}


i = 1;
document.write("<br><br><h1>Do While Loop<h1></h1>");
do {
    document.write("<h3>" + i + "</h3>");
    i++;
} while (i <= 10);


document.write("<br><br><h1>Foreach Loop<h1></h1>");
var myArray = [ 1, 2, 3, 4, 5, 6, 7, 8, 9, 10 ];
myArray.forEach(i => document.write("<h3>" + i + "</h3>"));


document.write("<br><br><h1>For...of Loop<h1></h1>");
for (const i of myArray) {
    document.write("<h3>" + i + "</h3>");
}

for (const [i, item] of myArray.entries()) {
    document.write("<h3>" + i + " : " + item + "</h3>");
}


document.write("<br><br><h1>For...in Loop<h1></h1>");
const myObj = {
    "a": 1,
    "b": 2,
    "c": 3,
    "d": 4,
    "e": 5,
    "f": 6,
    "g": 7,
    "h": 8,
    "i": 9,
    "j": 10
};
for (const i in myObj) {
    document.write("<h3>" + i + " : " + myObj[i] + "</h3>");
}
