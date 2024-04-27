// JavaScript for displaying borrowed books
window.addEventListener('load', function () {
    var borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
    var tableBody = document.getElementById('borrowedBooksTable');

    borrowedBooks.forEach(function (book, index) {
        var row = tableBody.insertRow(index);
        var numberCell = row.insertCell(0);
        var nameCell = row.insertCell(1);

        numberCell.textContent = index + 1;
        nameCell.textContent = book.bookName;
    });

    var totalCell = tableBody.insertRow().insertCell(0);
    totalCell.colSpan = 2;
    totalCell.textContent = 'Total borrowed book = ' + borrowedBooks.length;
});
