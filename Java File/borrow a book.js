
function borrowbook() {
    var bookId = document.getElementById('bid').value;

    updateBookAvailability(bookId);

    alert("Book borrowed successfully!");

}
function updateBookAvailability() {
    let books = JSON.parse(localStorage.getItem('books')) || [];

    let index = books.findindex(book => book.id == bookId);
    if (index !== -1) {
        books[index].availability = "Borrowed";
        localStorage.setItem('books', JSON.stringify(books));
        console.log("Book with ID " + bookId + " has been borrowed.");
    } else {
        console.log("Book with ID " + bookId + " not found.");
    }
}
