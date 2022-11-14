window.onload = function () {
    if (document.cookie.length != 0) {
        var nameValueArray = document.cookie.split("=");
        document.bgColor = nameValueArray[1];
        document.getElementById("theme").value = nameValueArray[1];
    }
}

function setColorCookie() {
    var selectedColor = document.getElementById("theme").value;
    if (selectedColor != "select color") {
        document.bgColor = selectedColor;
        document.cookie = "color=" + selectedColor;
    }
}
