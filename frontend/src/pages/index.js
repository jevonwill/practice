

export default function Home() {
  if (typeof window !== "undefined") {
    const test = document.getElementById('title');

  }

  return (
    <main>

      <div className="container">
        <h1 className="pageHeader">Books List</h1>
        <div className="booksList" id="books-list"></div>
        <div className="form-container">
            <form id="add-book-form">
                <h2>Add a Book</h2>
                <div>
                  <label htmlFor="title">Title:</label>
                  <input type="text" id="title" name="title"/>
                </div>
                <div>
                  <label htmlFor="author">Author:</label>
                  <input type="text" id="author" name="author"/>
                </div>
                <button type="submit">Add Book</button>
              </form>
        </div>
      </div>

    </main>
  )
}
