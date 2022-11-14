var cells = document.querySelectorAll("td");

for (let i = 0; i < cells.length; i++) {
    setTimeout(() => {
        if (i % 2 == 0) {
            if (i < 50) {
                cells[i].style.backgroundColor = "red";
            }
        } else {
            if (i >= 50) {
                cells[i].style.backgroundColor = "blue";
            }
        }
    }, 15 * i);
}
