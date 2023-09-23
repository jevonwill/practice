const myLibrary = [
  { title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { title: '1984', author: 'George Orwell' },
  { title: 'The Catcher in the Rye', author: 'J.D. Salinger' },
  { title: 'Brave New World', author: 'Aldous Huxley' }
]

const bookFactory = (title, author, pages, read) => {
    const info = () => `${title} + by ${author}, ${pages}`;
    return {title, author, pages, read, info}

}

const newBook = bookFactory(myLibrary[0]["title"], myLibrary[0]["author"], 500, false)

console.log(newBook.info());