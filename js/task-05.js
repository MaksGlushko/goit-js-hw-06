document.getElementById('name-input').addEventListener('input', function() {
    const inputValue = this.value;
    const nameOutput = document.getElementById('name-output');

    if (inputValue.trim() !== '') {
        nameOutput.textContent = inputValue;
    } else {
        nameOutput.textContent = 'Anonymous';
    }
});