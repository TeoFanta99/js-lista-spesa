// Data una lista della spesa, stampare sulla pagina (anche brutalmente, basta che si vedano) gli elementi della lista individualmente con un ciclo while.

// BONUS: do la possibilità all’utente di inserire voci nella lista



// selezione UL
const ul = document.getElementById("lista-spesa");

// selezione input e btn
const inputText = document.getElementById("text");
const addBtn = document.getElementById("add-button");

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


// aggiunta bottone per aggiungere altri "li" alla lista

addBtn.addEventListener("click",

    function () {

        addedItem = inputText.value;

        console.log(addedItem);

        
        

    }

)





