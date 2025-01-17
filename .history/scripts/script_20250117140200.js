const filterItems = document.querySelectorAll(".cars-filter li");
const carItems = document.getElementsByClassName(".car");
const carsContent = document.getElementById("cars-content");

filterItems.forEach(item => {
    item.addEventListener('click', () => {
        filterItems.forEach(e => e.classList.remove("active"));
        item.classList.add("active");

        const filterText = item.textContent.toLowerCase();

        carItems.forEach((car) => {
            if (filterText === "все марки" || car.querySelector("h4").textContent.toLowerCase().includes(filterText)) {
                car.style.display = "flex";
            } else {
                car.style.display = "none";
            }
        });
        carsContent.scrollIntoView({ behavior: "instant" });
    })
});

const carField = document.getElementById("car");
const nameField = document.getElementById("name");
const phoneField = document.getElementById("phone");

document.getElementById("order-action").addEventListener('click', function() {
  const fields = [carField, nameField, phoneField];
  let hasError = false;
  fields.forEach((field) => {
    if(field.value.trim() === '') {
      field.style.borderColor = 'red';
      hasError = true;
    } else {
      field.style.borderColor = 'white';
    }
  });
  if(!hasError) {
    alert("Спасибо за заявку! Мы Вам перезвоним!");
    fields.forEach((field) => field.value = '');
  }
})

