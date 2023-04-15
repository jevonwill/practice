let library = [
  { title: 'Art of War', author: 'Sun Tzu'},
  { title: 'Cask of Amontillado', author: 'Edgar Allen Poe'},
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  { title: 'Brave New World', author: 'Aldous Huxley' },
  { title: 'The Bible', author: 'God' }

];

const form = document.getElementById('add-book-form');
const titleInput = document.getElementById('title');
const authorInput = document.getElementById('author');


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
  const removeButton = document.createElement('button');
  removeButton.textContent = "Remove";

  card.appendChild(title);
  card.appendChild(author);
  card.appendChild(removeButton);
  card.setAttribute("data-index-number", library.indexOf(book));
  booksList.appendChild(card);
});

};

function Book(title, author){
  this.title = title;
  this.author = author;
  this.read = false;
}


form.addEventListener('submit', function(e) {
    e.preventDefault();

    const newBook = new Book(titleInput.value.trim(), authorInput.value.trim());


    if(newBook.title && newBook.author) {
        library.push({title: titleInput.value.trim(), author: authorInput.value.trim()});
        
        titleInput.value = '';
        authorInput.value = '';

        renderBook();
    }
    
});


renderBook();


