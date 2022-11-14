var data = JSON.parse(document.cookie.split("=")[1]);
document.getElementById("category-field").innerHTML = data.category;
document.getElementById("bookname-field").innerHTML = data.bookName;
document.getElementById("authorname-field").innerHTML = data.authorName;
document.getElementById("authoremail-field").innerHTML = data.authorEmail;
document.getElementById("publishedyear-field").innerHTML = data.publishedYear;
document.getElementById("price-field").innerHTML = data.price;

document.querySelector("h1").innerText = data.bookName + " Book Details";
