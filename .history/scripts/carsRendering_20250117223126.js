import { cars } from "./cars.js";

const carItemsContainer = document.getElementById("car-items");
const filterMenu = document.querySelector(".cars-filter");

function renderCars(filter = "all") {
  carItemsContainer.innerHTML = ""; // Очистка контейнера
  const filteredCars = filter === "all" ? cars : cars.filter(car => car.brand === filter);
  filteredCars.forEach(car => {
    const carElement = document.createElement("article");
    carElement.className = "car";
    carElement.innerHTML = `
      <img src="${car.image}" alt="${car.model}" />
      <div class="car-details">
        <h4>${car.model}</h4>
        <p>${car.description}</p>
        <div class="car-action">
          <ul>
            ${car.prices
              .map(price => `<li><div class="car-period">${price.period}</div><div class="car-price">${price.price}</div></li>`)
              .join("")}
          </ul>
          <a href="#order" class="button white-button">Забронировать</a>
        </div>
      </div>
    `;
    carItemsContainer.appendChild(carElement);
  });
}

filterMenu.addEventListener("click", event => {
  const brand = event.target.dataset.brand;
  if (brand) {
    document.querySelectorAll(".cars-filter li").forEach(li => li.classList.remove("active"));
    event.target.classList.add("active");
    renderCars(brand);
  }
});

// Изначально отображаем все автомобили
renderCars();