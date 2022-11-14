try {
    document.write(sayHi());
} catch (e) {
    document.write("Message: " + e.message + "<br><br>");
    document.write("Description: " + e.description + "<br><br>");
    document.write("Stack trace: " + e.stack + "<br><br>");
} finally {
    document.write("This line is guaranteed to executed<br><br>")
}
document.write("This line will be executed<br><br>");