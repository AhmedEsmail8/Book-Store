const updateButton = document.getElementById('updateButton');
const headline = document.getElementById('headlineInput');

updateButton.addEventListener('click', () => {
    if (headlineInput.value == "") {
        localStorage.setItem("header", "Book House");
    } else {
        localStorage.setItem("header", headlineInput.value);
        headlineInput.value = "";
    }
});


function mode() {
    var element = document.body;
    element.classList.toggle("dark");
}