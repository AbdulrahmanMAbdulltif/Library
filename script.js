
function book(title, author, numberP) {
    this.title = title;
    this.author = author;
    this.numberP = numberP;
  }

  let myLibrary = [];

  document.addEventListener('DOMContentLoaded', displayBooks);

  function displayBooks() {
    const container = document.getElementById('library-container');
    container.innerHTML = ''; // Clear existing content

    myLibrary.forEach(book => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
        <h3>${book.title}</h3>
        <p>Author: ${book.author}</p>
        <p>Number of Pages: ${book.numberP}</p>
      `;

      container.appendChild(card);
    });
  }

  
  document.getElementById('addBookForm').addEventListener('submit', function(event) {
    
    event.preventDefault();

    const title = document.getElementById('title').value;
    const author = document.getElementById('author').value;
    const numberP = document.getElementById('numberP').value;
    
    const newBook = new book(title, author, numberP);
    myLibrary.push(newBook);
    displayBooks();

    document.getElementById('addBookForm').reset();
  });