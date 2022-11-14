var Car = {
    brand: "Tesla",
    model: "Model 3",
    price: "35000",

    teslaAutoPilot : function () {
        document.write("<h3>This car has Auto pilot</h3>");
    }
}

document.write("<h3>Car Brand: " + Car.brand + "</h3>");
document.write("<h3>Car Model: " + Car.model + "</h3>");
document.write("<h3>Car Price: " + Car.price + "</h3>");
Car.teslaAutoPilot();
document.write("<br><br>");

// Cars class to create multiple objects with same properties
class Cars {
    constructor(brand, model, price) {
        this.brand = brand;
        this.model = model;
        this.price = price;

        this.teslaAutoPilot = function () {
            document.write("<h3>This car has Auto pilot</h3>");
        };
    }
}
var car1 = new Cars("BMW", "R5", 40000);
var car2 = new Cars("Mercedes", "Model R", 20000);

document.write("<h3>Car Brand: " + car1.brand + "</h3>");
document.write("<h3>Car Model: " + car1.model + "</h3>");
document.write("<h3>Car Price: " + car1.price + "</h3>");
Car.teslaAutoPilot();
document.write("<br><br>");

document.write("<h3>Car Brand: " + car2.brand + "</h3>");
document.write("<h3>Car Model: " + car2.model + "</h3>");
document.write("<h3>Car Price: " + car2.price + "</h3>");
Car.teslaAutoPilot();
document.write("<br><br>");