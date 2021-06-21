class Book {
    constructor(title, author, isbn) {
        this.title = title
        this.author = author
        this.isbn = isbn
    }
}

const defaultBooks = [
    {
        title: 'Book 1',
        author: 'Brad Traversy',
        isbn: '12345'
    },
    {
        title: 'Book 2',
        author: 'Mehul Mohan',
        isbn: '6789'
    }
]

class UI {

    static displayBooks() {
        defaultBooks.forEach(book => UI.addBookToList(book))
    }

    static addBookToList(book) {
        const list = document.getElementById("book-list");
        const row = document.createElement("tr");
        row.innerHTML = `
    <td>${book.title}</td>
    <td>${book.author}</td>
    <td>${book.isbn}</td>
    <td><a href="#" class="btn btn-danger btn-sm delete">X</a></td>
    `
        list.appendChild(row)
    }

    static clearFieldsUI() {
        document.getElementById("title").value = ""
        document.getElementById("author").value = ""
        document.getElementById("isbn").value = ""
    }

    static deleteBook(target) {

        // inside UI.deleteBook:
        if (target.classList.contains('delete')) {
            // we clicked the X icon
            // remove the element -> 
            target.parentElement.parentElement.remove()

        }
    }
}


// Event: Remove a Book
document.getElementById('book-list').addEventListener('click', handleRemove)
function handleRemove(e) {
    UI.deleteBook(e.target)
}

UI.displayBooks()

// Event: Add a Book
document.querySelector('#book-form').addEventListener('submit', addABook, false)

function addABook(e) {
    // prevent actual submission
    e.preventDefault()

    // Capturar los valores del Form
    var a = document.getElementById("title").value;
    var b = document.getElementById("author").value;
    var c = document.getElementById("isbn").value;

    // Crear un nuevo objeto book
    const nuevoLibro = new Book(a, b, c)
    // Añadir el objeto book creado a UI (mostrarlo en HTML)
    UI.addBookToList(nuevoLibro)
    UI.clearFieldsUI()
}



