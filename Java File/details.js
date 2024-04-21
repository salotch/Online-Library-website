var selectedBooks = JSON.parse(localStorage.getItem("selectedBooks"));

if (selectedBooks && selectedBooks.length > 0) {
    var lastIndex = selectedBooks.length - 1;
    var lastSelectedBook = selectedBooks[lastIndex];

    var detailsContainer = document.getElementById("details");
    var bookinfo = `
        <h2><strong>${lastSelectedBook.title}</strong></h2>
        <p><strong>Author:</strong> ${lastSelectedBook.author}</p>
        <p><strong>ID:</strong> ${lastSelectedBook.id}</p>
        <p><strong>Main character/s:</strong> ${lastSelectedBook.character}</p>
        <p><strong>Publisher Year:</strong> ${lastSelectedBook.year}</p>
        <p><strong>Category:</strong> ${lastSelectedBook.category}</p>
        <p><strong>Description:</strong> ${lastSelectedBook.description}</p>
    `;
    detailsContainer.innerHTML = bookinfo;
} else {
    var detailsContainer = document.getElementById("details");
    detailsContainer.innerHTML = "<p>No book details found.</p>";
}
