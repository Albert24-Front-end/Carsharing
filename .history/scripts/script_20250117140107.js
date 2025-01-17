const filterItems = document.querySelectorAll(".cars-filter li");
const carItems = document.getElementsByClassName(".car");
const carsContent = document.getElementById("cars-content");

filterItems.forEach(item => {
    item.addEventListener('click', ()=>{
      filterItems.forEach(e => e.classList.remove("active"));
      item.classList.add("active");

      
    })

    const filterText = item.textContent.toLowerCase();

    carItems.forEach((car) => {
        if(filterText === "все марки" || car.querySelector("h4").textContent.toLowerCase().includes(filterText)) {
          car.style.display = "flex";
        } else {
          car.style.display = "none";
        }
      });
      carsContent.scrollIntoView({behavior: "instant"});
  })