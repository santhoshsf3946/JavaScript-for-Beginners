document.write("<h1>Control Statement - if else</h1>");

var x = 10;

if (x % 2 == 0) {
    document.write("<h3>EVEN Number</h3>");
} else {
    document.write("<h3>ODD Number</h3>");
}


if (x > 0) {
    document.write("<h3>Positive</h3>");
} else if (x < 0) {
    document.write("<h3>Negative</h3>");
} else {
    document.write("<h3>Number is neither positive or negative</h3>");
}