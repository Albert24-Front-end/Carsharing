const carInput = document.querySelector('#car');
const nameInput = document.querySelector('#name');
const phoneInput = document.querySelector('#phone');

document.querySelector('#order-action').addEventListener('click', ()=>{
    const allInputs = [carInput, nameInput, phoneInput];
    let hasError = false;
    let phoneError = false;

    allInputs.forEach((input)=>{
        if(input.value = '') {
        allInputs.style.borderColor = 'red';
        alert('Заполните все поля');
        } else {
            allInputs.style.borderColor = 'white';
        }
    })

    
})