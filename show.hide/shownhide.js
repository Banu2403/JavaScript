const button = document.getElementById("btn")
const div = document.getElementById('text')

button.addEventListener("click", () => {
    if (text.style.display === "" ||
        text.style.display === 'block') {
        text.style.display = 'none'
        button.innerText = 'show'
    }
    else {
        text.style.display = "block"
        button.innerText = 'hide'
    }
});