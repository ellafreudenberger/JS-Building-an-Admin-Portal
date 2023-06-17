const { json } = require("body-parser");
const { application } = require("express");

// Your Code Here
async function retrieve() {
    let response = await fetch('http://localhost:3001/listBooks')
    let books = await response.json()
    
    books.forEach(book => {
        let booksList = document.getElementById('books'); 
        
        let listItem = document.createElement('li');
        listItem.textContent = book.title;
    
        let listQuantity = document.createElement('input')
        listQuantity.textContent = book.quantity;

        let saveButton = document.createElement('button');
        saveButton.textContent = 'Save';

        saveButton.addEventListener('click', () => {
            fetch('http://localhost:3001/updaetBook', {
                method: "PATCH",
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({
                    id: book.id,
                    quantity: listQuantity.value
                })
            });
        });
    
        listItem.append(listQuantity, saveButton);
        
        booksList.append(listItem);

});
}
retrieve()