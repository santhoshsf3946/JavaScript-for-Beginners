var bookName = document.getElementById("bookname");
var authorName = document.getElementById("authorname");
var authorEmail = document.getElementById("authoremail");
var year = document.getElementById("publishedyear");
var price = document.getElementById("price");
var category = document.getElementById("category");

var categoryError = document.getElementById("category-error");
var bookNameError = document.getElementById("bookname-error");
var authorNameError = document.getElementById("authorname-error");
var authorEmailError = document.getElementById("authoremail-error");
var yearError = document.getElementById("publishedyear-error");
var priceError = document.getElementById("price-error");

var bookNameValid = false;
var authorNameValid = false;
var authorEmailValid = false;
var publishedYearValid = false;
var priceValid = false;
var categoryValid = false;

const hasNumeric = /[0-9]/;
const hasSpecialCharacter = /[ `!@#$%^&*()_+\-=\[\]{};':"\\|,.<>\/?~]/;
const validEmail = /^([a-zA-Z0-9_\.\-])+\@(([a-zA-Z0-9])+\.)+([a-zA-Z0-9]{2,4})+$/;

var obj = null;

function validate() {
    if (!categoryValid) {
        category.classList.add("error-input");
    } if (!bookNameValid) {
        bookName.classList.add("error-input");
    } if (!authorNameValid) {
        authorName.classList.add("error-input");
    } if (!authorEmailValid) {
        authorEmail.classList.add("error-input");
    } if (!publishedYearValid) {
        year.classList.add("error-input");
    } if (!priceValid) {
        price.classList.add("error-input");
    }

    if (categoryValid && bookNameValid && authorNameValid && authorEmailValid && publishedYearValid && priceValid) {
        obj = {
            category: category.value,
            bookName: bookName.value,
            authorName: authorName.value,
            authorEmail: authorEmail.value,
            publishedYear: year.value,
            price: price.value
        }
        document.cookie = "data=" + JSON.stringify(obj);
        priceError.innerHTML = '<td></td><td class="success">Details saved successfully</td>';
    } else {
        priceError.innerHTML = '<td></td><td class="error">Please fill all the inputs</td>';
    }
    return false;
}

function validateCategory() {
    if (category.value == "select") {
        categoryError.innerHTML = '<td></td><td class="error">Please select category</td>';
        if (!category.classList.contains("error-input")) {
            category.classList.add("error-input");
        }
        categoryValid = false;
    } else {
        categoryError.innerHTML = '';
        category.classList.remove("error-input");
        categoryValid = true;
    }
}

function validateBookName() {
    if (bookName.value.trim() == "") {
        if (!bookName.classList.contains("error-input")) {
            bookName.classList.add("error-input");
        }
        bookNameError.innerHTML = '<td></td><td class="error">Book name can\'t be empty</td>';
        bookNameValid = false;
    } else if (bookName.value.trim().match(hasNumeric)) {
        if (!bookName.classList.contains("error-input")) {
            bookName.classList.add("error-input");
        }
        bookNameError.innerHTML = '<td></td><td class="error">Numeric values not allowed</td>';
        bookNameValid = false;
    } else if(bookName.classList.value.trim().length > 50) {
        if (!bookName.contains("error-input")) {
            bookName.classList.add("error-input");
        }
        bookNameError.innerHTML = '<td></td><td class="error">Length must be lessthan 50</td>';
        bookNameValid = false;
    } else {
        bookName.classList.remove("error-input");
        bookNameError.innerHTML = '';
        bookNameValid = true;
    }
}

function validateAuthorName() {
    if (authorName.value.trim() == "") {
        if (!authorName.classList.contains("error-input")) {
            authorName.classList.add("error-input");
        }
        authorNameError.innerHTML = '<td></td><td class="error">Author name can\'t be empty</td>';
        authorNameValid = false;
    } else if (authorName.value.trim().match(hasNumeric)) {
        if (!authorName.classList.contains("error-input")) {
            authorName.classList.add("error-input");
        }
        authorNameError.innerHTML = '<td></td><td class="error">Numeric values not allowed</td>';
        authorNameValid = false;
    } 
    else if (authorName.value.trim().match(hasSpecialCharacter)) {
        if (!authorName.classList.contains("error-input")) {
            authorName.classList.add("error-input");
        }
        authorNameError.innerHTML = '<td></td><td class="error">Special Characters values not allowed</td>';
        authorNameValid = false;
    } else if(authorName.value.trim().length > 50) {
        if (!authorName.classList.contains("error-input")) {
            authorName.classList.add("error-input");
        }
        authorNameError.innerHTML = '<td></td><td class="error">Length must be lessthan 50</td>';
        authorNameValid = false;
    } else {
        authorName.classList.remove("error-input");
        authorNameError.innerHTML = '';
        authorNameValid = true;
    }
}

function validateAuthorEmail() {
    if (authorEmail.value.trim() == "") {
        if (!authorEmail.classList.contains("error-input")) {
            authorEmail.classList.add("error-input");
        }
        authorEmailError.innerHTML = '<td></td><td class="error">Author email can\'t be empty</td>';
        authorEmailValid = false;
    } else if (!authorEmail.value.trim().match(validEmail)) {
        if (!authorEmail.classList.contains("error-input")) {
            authorEmail.classList.add("error-input");
        }
        authorEmailError.innerHTML = '<td></td><td class="error">Please enter valid Email address</td>';
        authorEmailValid = false;
    } else {
        authorEmail.classList.remove("error-input");
        authorEmailError.innerHTML = '';
        authorEmailValid = true;
    }
}

function validateYear() {
    if (year.value.trim() == "") {
        if (!year.classList.contains("error-input")) {
            year.classList.add("error-input");
        }
        yearError.innerHTML = '<td></td><td class="error">Published year can\'t be empty</td>';
        publishedYearValid = false;
    } else if (isNaN(year.value.trim())) {
        if (!year.classList.contains("error-input")) {
            year.classList.add("error-input");
        }
        yearError.innerHTML = '<td></td><td class="error">Only Numeric values allowed</td>';
        publishedYearValid = false;
    } else if (Number(year.value.trim()) > 2022) {
        if (!year.classList.contains("error-input")) {
            year.classList.add("error-input");
        }
        yearError.innerHTML = '<td></td><td class="error">Please enter a valid Published year</td>';
        publishedYearValid = false;
    } else {
        year.classList.remove("error-input");
        yearError.innerHTML = '';
        publishedYearValid = true;
    }
}

function validatePrice() {
    if (price.value.trim() == "") {
        if (!price.classList.contains("error-input")) {
            price.classList.add("error-input");
        }
        priceError.innerHTML = '<td></td><td class="error">Price can\'t be empty</td>';
        priceValid = false;
    } else if (isNaN(price.value.trim())) {
        if (!price.classList.contains("error-input")) {
            price.classList.add("error-input");
        }
        priceError.innerHTML = '<td></td><td class="error">Only Numeric values allowed</td>';
        priceValid = false;
    } else {
        price.classList.remove("error-input");
        priceError.innerHTML = '';
        priceValid = true;
    }
}

function clearValue() {
    category.classList.remove("error-input");
    bookName.classList.remove("error-input");
    authorName.classList.remove("error-input");
    authorEmail.classList.remove("error-input");
    year.classList.remove("error-input");
    price.classList.remove("error-input");

    bookNameValid = false;
    authorNameValid = false;
    authorEmailValid = false;
    publishedYearValid = false;
    priceValid = false;
    categoryValid = false;

    categoryError.innerHTML = '';
    bookNameError.innerHTML = '';
    authorNameError.innerHTML = '';
    authorEmailError.innerHTML = '';
    yearError.innerHTML = '';
    priceError.innerHTML = '';
}

function ShowDetails() {
    if (document.cookie.length != 0) {
        window.location.replace("saved-details.html");
    } else {
        priceError.innerHTML = '<td></td><td class="error">No saved details found</td>';
    }
}
