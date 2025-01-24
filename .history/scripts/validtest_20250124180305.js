const carInput = document.querySelector('#car');
const nameInput = document.querySelector('#name');
const phoneInput = document.querySelector('#phone');

document.querySelector('#order-action').addEventListener('click', ()=>{
    const allInputs = [carInput, nameInput, phoneInput];
    let hasError = false;
    let phoneError = false;

    allInputs.forEach((input)=>{
        if(input.value.trim() === '') {
            input.style.borderColor = 'red';
            hasError = true;
        } else {
            input.style.borderColor = 'white';
        }

        if(hasError) {
            alert('Заполните все поля');
            return;
        }
        if(phoneInput.value.trim().length < 10) {
            phoneError = true;
            alert('Номер должен содержать не менее 10 символов');
            phoneInput.style.borderColor = 'red';
            return;
        }
        alert('Спасибо за вашу заявку, мы вам перезвоним!');
        allInputs.forEach((input)=>{
    })

    
})