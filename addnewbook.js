function savebook() {
    let book= {
        id: document.getElementById("bid").value,
        n:document.getElementById("bn").value,
        a:document.getElementById("ba").value,
        c:document.getElementById("bc").value,
        d:document.getElementById("bd").value,
        av:"available"
    };

    // console.log(taskList)
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const task = localStorage.getItem(key);
        const data = JSON.parse(task);
        // console.log(data)
        if (key.startsWith("book_")) {
            if (data.id === book.id)
                alert('Duplicated ID Book Cannot be Added');
            else
            {
                localStorage.setItem("book_" + Date.now(), JSON.stringify(book));
                alert('Book Added Successfully');
            }

        }
    }
}



document.addEventListener('DOMContentLoaded', function(){
    let taskList = document.getElementById('_book')
    // console.log(taskList)
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const task = localStorage.getItem(key);
        const data=JSON.parse(task);
        // console.log(data)
        if (key.startsWith("book_")) {
            const trr = document.createElement("tr");

            let tdd=document.createElement("td");
            let prp = data.id;
            tdd.textContent=prp;
            // console.log(prp);
            trr.appendChild(tdd);

            tdd=document.createElement("td");
            prp= data.n;
            tdd.textContent = prp;
            // console.log(prp);
            trr.appendChild(tdd);

            tdd=document.createElement("td");
            prp = data.a;
            tdd.textContent=prp;
            trr.appendChild(tdd);

            tdd=document.createElement("td");
            prp= data.c;
            tdd.textContent=prp;
            trr.appendChild(tdd);

            tdd=document.createElement("td");
            prp = data.d;
            tdd.textContent=prp;
            trr.appendChild(tdd);

            taskList.appendChild(trr);
        }
    }});
// for select category options
document.addEventListener('DOMContentLoaded', function(){
    let categories = ["Adventure", "Romance", "Self Help", "Fantasia", "Horror", "Historical Fiction"];
    let element=document.getElementById("bc");
    for (let i = 0; i < categories.length; i++) {
        let option_ele=document.createElement("option");
        option_ele.value=categories[i];
        option_ele.textContent=categories[i];
        element.appendChild(option_ele);
    }
});





// document.addEventListener('DOMContentLoaded', function() {
//     const myButton = document.getElementById('myDynamicButton');
//     myButton.addEventListener('click', function() {
//         alert('Button clicked!');
//     });
// });