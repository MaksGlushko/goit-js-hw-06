document.getElementById('validation-input').addEventListener('blur', function() {
    const inputValue = this.value;
    const dataLength = this.dataset.length;

    if (inputValue.length === parseInt(dataLength, 10)) {
        this.classList.remove('invalid');
        this.classList.add('valid');
    } else {
        this.classList.remove('valid');
        this.classList.add('invalid');
    }
});