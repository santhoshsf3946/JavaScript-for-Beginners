function changeColorOnMouseOver() {
    var control = document.getElementById("btn");
    control.style.background='red'; 
    control.style.color='yellow';
}

function changeColorOnMouseOut() {
    var control = document.getElementById("btn");
    control.style.background='lightgray'; 
    control.style.color='black';
}

function confirmOnSubmit() {
    if (confirm("Are you sure you want to submit?")) {
        alert("You selected OK");
        return true;
    } else {
        alert("you selected Cancel");
        return false;
    }
}

function validaterequiredField(controlId) {
    var control = document.getElementById(controlId);
    control.style.color = 'white';

    if (control.value == "") {
        control.style.background = 'red';
    } else {
        control.style.background = 'green'
    }
}