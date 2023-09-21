
let counterValue = 0;

function updateCounter() {
    const counterElement = document.getElementById('counter');
    counterElement.textContent = counterValue;
}

document.getElementById('increment').addEventListener('click', function() {
    counterValue++;
    updateCounter();
});

document.getElementById('decrement').addEventListener('click', function() {
    counterValue--; 
    updateCounter();
});