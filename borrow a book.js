document.getElementById('borrowForm').addEventListener('submit', function (event) {
    event.preventDefault();

    const formData = new FormData(event, target);

    saveFormDataToLocalStorage(formData);
});

function saveFormDataToLocalStorage(formData) {

    const formDataJSON = JSON.stringify(Object.fromEntries(formData));


    localStorage.setItem('borrowedFormData', formDataJSON);

    console.log('Form data saved to localStorage.');
}