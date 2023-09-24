
const output = document.querySelector(`#name-output`);
const input = document.querySelector(`#name-input`);

input.addEventListener("input", (event) => 
textOutput.textContent = event.target.value||`Anonymous`);