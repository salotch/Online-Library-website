var detailButtons = document.querySelectorAll(".DetailsBtn");


detailButtons.forEach(function(button) {
    button.addEventListener("click", function() {
      
        var bookId = button.getAttribute("data-book");
       
        var bookDetails = getDetailsById(bookId);
       
        var selectedBooks = JSON.parse(localStorage.getItem("selectedBooks")) || [];
        
        selectedBooks.push(bookDetails);
        
        localStorage.setItem("selectedBooks", JSON.stringify(selectedBooks));
       
        window.location.href = "details.html";
    });
});

function getDetailsById(id) {
    var bookDetails = {
        id:id,
        title: "",
        author: "",
        character: "",
        year: "",
        category:"",
        description: ""
    };

    if (id === "1") {
        bookDetails.id="1";
        bookDetails.title = "What Feats at Night";
        bookDetails.author = "T. Kingfisher";
        bookDetails.character = "Alex Easton";
        bookDetails.year = "2019";
        bookDetails.category="Horror";
        bookDetails.description = "It is an amazing horror novel.";
    } else if (id === "2") {
        bookDetails.id="2";
        bookDetails.title = "Sorcerer's Stone";
        bookDetails.author = "J.K. Rowling";
        bookDetails.character = "Harry Potter";
        bookDetails.year = "2000";
        bookDetails.category="fantasy";
        bookDetails.description = "Fantasy novel about wizards.";
    } else if (id === "3") {
        bookDetails.id="3";
        bookDetails.title = "The Help";
        bookDetails.author = "Kathryn Stockett";
        bookDetails.character = "Celia Foote";
        bookDetails.year = "2004";
        bookDetails.category="Historical";
        bookDetails.description = "Historical fiction novel about racism.";
    }

    return bookDetails;
}
