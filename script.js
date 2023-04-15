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



const booksList = document.getElementById('books-list');

// Loop through the books array and create an <li> element for each book
library.forEach(function(book) {
  const card = document.createElement('div');
  card.classList.add('card');
  const title = document.createElement('h2');
  title.textContent = book.title;
  const author = document.createElement('p');
  author.textContent = `by ${book.author}`;

  card.appendChild(title);
  card.appendChild(author);
  booksList.appendChild(card);
});