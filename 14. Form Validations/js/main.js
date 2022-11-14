function validate() {
    var username = document.getElementById("username");
    var password = document.getElementById("password");

    if (username.value.trim() == "" || password.value.trim() == "") {
        alert("No blank values allowed");
        return false;
    } else {
        return true;
    }
}
