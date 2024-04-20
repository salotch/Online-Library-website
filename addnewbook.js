function saveTask() {
    let book= {
        id: document.getElementById("bid").value,
        n:document.getElementById("bn").value,
        a:document.getElementById("ba").value,
        c:document.getElementById("bc").value,
        d:document.getElementById("bd").value
    };
    localStorage.setItem("book_"+Date.now(),JSON.stringify(book));
}
document.addEventListener('DOMContentLoaded', function(){
    let taskList = document.getElementById('_book')
    console.log(taskList)
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
            console.log(prp);
            trr.appendChild(tdd);

            tdd=document.createElement("td");
            prp= data.n;
            tdd.textContent = prp;
            console.log(prp);
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
// document.addEventListener('DOMContentLoaded', function() {
//     const myButton = document.getElementById('myDynamicButton');
//     myButton.addEventListener('click', function() {
//         alert('Button clicked!');
//     });
// });