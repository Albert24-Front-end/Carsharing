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
        alert('Заполните все поля');
        } else {
            input.style.borderColor = 'white';
        }
    })

    
})