// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.


// selezione UL
const ul = document.getElementById("lista-spesa");

// creare la lista della spesa
const list = ["Latte", "Uova", "Insalata", "Acqua"];

// visualizzare la lista in pagina
let i = 0;

while (i < list.length) {
    const listItem = list[i];
    console.log(listItem);

    // creo gli elementi li
    const elementLi = document.createElement("li");

    // appendo l'elemento al li
    elementLi.append(listItem);

    // appendo il li all'ul
    ul.append(elementLi);

    i++;
}