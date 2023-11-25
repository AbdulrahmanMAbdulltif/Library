function Book(title, author, numberP, read) {
  this.title = title;
  this.author = author;
  this.numberP = numberP;
  this.read = read === 'yes';
}

let myLibrary = [];
var modal = document.getElementById('addBookModal');
var addCircleIcon = document.getElementById('add-circle');
document.addEventListener('DOMContentLoaded', displayBooks);


function displayBooks() {
  const container = document.getElementById('card-container');
  container.innerHTML = ''; // Clear existing content

  myLibrary.forEach((book, index) => {
      const card = document.createElement('div');
      card.className = 'card';

      card.innerHTML = `
          <h2>Title: ${book.title}</h2>
          <p>Author: ${book.author}</p>
          <p>Number of pages: ${book.numberP}</p>
          <p>Mark as Read
              <label class="switch">
                  <input type="checkbox" ${book.read ? 'checked' : ''}>
                  <span class="slider round"></span>
              </label>
          </p>
          <div class="icons">
              <i class="material-icons" onclick="deleteBook(${index})">delete</i>
          </div>
      `;

      container.appendChild(card);
  });
  modal.style.display = 'none';
}



document.addEventListener('DOMContentLoaded', function () {



document.getElementById("addNewBook").addEventListener('click', function(){
    modal.style.display = 'block';

})    

window.onclick = function (event) {
    if (event.target == modal) {
        modal.style.display = 'none';
    }
};

});

document.getElementById('addBookModal').addEventListener('submit', function (event) {
  event.preventDefault();

  const title = document.getElementById('title').value;
  const author = document.getElementById('author').value;
  const numberP = document.getElementById('Number_of_pages').value;
  const read = document.getElementById('read').value;

  const newBook = new Book(title, author, numberP, read);
  myLibrary.push(newBook);
  displayBooks();

  document.getElementById('addBookModal').reset();
});

function deleteBook(index) {
myLibrary.splice(index, 1);
displayBooks();
}