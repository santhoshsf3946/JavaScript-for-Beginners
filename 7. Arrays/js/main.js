var cars = ["BMW", "Volvo", "Audi"];

document.write("<h1>Arrays</h1>");
document.write("<h3>" + cars + "</h3>");

cars.push("Mercedes");

for (let i = 0; i < cars.length; i++) {
    document.write("<h3>" + cars[i] + "</h3>");
}
