document.write("<h1>Day in Week</h1>");

var day = 6;

switch (day) {
    case 1:
        document.write("<h3>Sunday</h3>");
        break;
    case 2:
        document.write("<h3>Monday</h3>");
        break;
    case 3:
        document.write("<h3>Tuesday</h3>");
        break;
    case 4:
        document.write("<h3>Wednesday</h3>");
        break;
    case 5:
        document.write("<h3>Thursday</h3>");
        break;
    case 6:
        document.write("<h3>Friday</h3>");
        break;
    case 7:
        document.write("<h3>Saturday</h3>");
        break;
    default:
        document.write("<h3>Invalid Day</h3>");
        break;
}