let library = [
  { title: 'Art of War', author: 'Sun Tzu', read: false},
  { title: 'Cask of Amontillado', author: 'Edgar Allen Poe', read: false},
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald', read: false},
  { title: 'To Kill a Mockingbird', author: 'Harper Lee', read: false },
  { title: '1984', author: 'George Orwell', read: false },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger', read: false },
  { title: 'Brave New World', author: 'Aldous Huxley', read: false },
  { title: 'The Bible', author: 'God', read: false }

];

const form = document.getElementById('add-book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');

function Book(title, author, read){
  this.title = title;
  this.author = author;
  this.read = read;
}



// Loop through the books array and create a card element for each book
function renderBook(){
 const booksList = document.getElementById('books-list');

 booksList.innerHTML = '';

  library.forEach(function(book) {
  const card = document.createElement('div');
  card.classList.add('card');
  const title = document.createElement('h2');
  title.textContent = book.title;
  const author = document.createElement('p');
  author.textContent = `by ${book.author}`;
  
  const readStatus = document.createElement('p');
  readStatus.textContent = `Have you read this book: ` + book.read;

  const removeButton = document.createElement('button');
  removeButton.textContent = "Remove";
  const readButton = document.createElement('button');
  readButton.textContent = "Mark Read"

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(removeButton);
  card.appendChild(readButton);
  card.appendChild(readStatus);
  card.setAttribute("data-index-number", library.indexOf(book));
  
  booksList.appendChild(card);

  removeButton.addEventListener('click', function() {
      library.splice(card.dataset.indexNumber, 1);
      renderBook();
    });

  readButton.addEventListener('click', function(){
    book.read = !book.read; 
    renderBook();

  });

  });

};




form.addEventListener('submit', function(e) {
    e.preventDefault();

    const newBook = new Book(titleInput.value.trim(), authorInput.value.trim());


    if(newBook.title && newBook.author) {
        library.push({title: titleInput.value.trim(), author: authorInput.value.trim(), read: false});
        
        titleInput.value = '';
        authorInput.value = '';

        renderBook();
    }
    
});


renderBook();


