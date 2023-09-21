document.querySelector('.login-form').addEventListener('submit', function(event) {
    event.preventDefault(); // Предотвращаем перезагрузку страницы

    const elements = this.elements;
    let formData = {};

    for (let i = 0; i < elements.length; i++) {
        const element = elements[i];

        if (element.type !== 'submit') {
            if (element.value.trim() === '') {
                alert('Все поля должны быть заполнены');
                return;
            }

            formData[element.name] = element.value;
        }
    }

    console.log(formData);
    this.reset();
});
