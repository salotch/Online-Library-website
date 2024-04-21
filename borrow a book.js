document.addEventListener('DOMContentLoaded', function () {
    document.getElementById('borrowForm').addEventListener('submit', function (event) {
        event.preventDefault(); // Prevent default form submission

        // Get form data
        var firstName = document.querySelector('input[name="fn"]').value;
        var lastName = document.querySelector('input[name="ln"]').value;
        var email = document.querySelector('input[name="ea"]').value;
        var phone = document.querySelector('input[name="pn"]').value;
        var address = document.querySelector('input[name="ad"]').value;
        var bookName = document.querySelector('input[name="bn"]').value;

        // Create an object to represent the borrowed book
        var borrowedBook = {
            firstName: firstName,
            lastName: lastName,
            email: email,
            phone: phone,
            address: address,
            bookName: bookName,
            bookID: bookId
        };

        // Store the borrowed book in local storage
        var borrowedBooks = JSON.parse(localStorage.getItem('borrowedBooks')) || [];
        borrowedBooks.push(borrowedBook);
        localStorage.setItem('borrowedBooks', JSON.stringify(borrowedBooks));

        // Clear form fields
        document.getElementById('borrowForm').reset();

        // Show alert for successful borrowing
        alert('Book borrowed successfully!');

    });
});
