document.addEventListener('DOMContentLoaded', function() {
    for (let i = 0; i < localStorage.length; i++) {
        const key = localStorage.key(i);
        const task = localStorage.getItem(key);
        const data = JSON.parse(task);
        if (key==="clicked"){
            retrieve_to_edit(data);
        }
// console.log(value);
}

});