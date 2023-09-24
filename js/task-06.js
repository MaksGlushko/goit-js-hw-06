// document.getElementById('validation-input').addEventListener('blur', function() {
//     const inputValue = this.value;
//     const dataLength = this.dataset.length;
//  function (valid, invalid) {
//     this.classList.remove('invalid');
//     this.classList.add('valid');
// }
//     if (inputValue.length === parseInt(dataLength, 10)) {
//         this.classList.remove('invalid');
//         this.classList.add('valid');
//      }
// });
document.getElementById('validation-input').addEventListener('blur', function() {
    const inputValue = this.value;
    const dataLength = this.dataset.length;
  function name(params) {
    this.classList.remove('valid');
   this.classList.add('invalid');
  }
    if (inputValue.length === parseInt(dataLength, 10)) {
        this.classList.remove('invalid');
        this.classList.add('valid');
    }
//       
//     }
});