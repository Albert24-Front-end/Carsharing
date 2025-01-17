import { cars } from "./cars.js";

function renderCars(cars) {
    const container = document.querySelector('.car-items'); // Контейнер для автомобилей
  
    cars.forEach((car) => {
      const carElement = document.createElement('article');
      carElement.classList.add('car');
  
      carElement.innerHTML = `
        <img src="${car.image}" alt="${car.brand} ${car.model}" />
        <div class="car-details">
          <h4>${car.brand} ${car.model}</h4>
          <p>${car.description}</p>
          <div class="car-action">
            <ul>
              ${car.prices
                .map(
                  (price) => `
                <li>
                  <div class="car-period">${price.period}</div>
                  <div class="car-price">${price.price}</div>
                </li>
              `
                )
                .join('')}
            </ul>
            <a href="#order" class="button white-button">Забронировать</a>
          </div>
        </div>
      `;
  
      container.appendChild(carElement);
    });
}

function setupFilters(cars) {
  const filterItems = document.querySelectorAll(".cars-filter ul li"); // Фильтры
  const carsContent = document.querySelector("#cars-content"); // Контейнер контента

  filterItems.forEach((item) => {
    item.addEventListener("click", () => {
      // Удалить активный класс с предыдущего фильтра
      filterItems.forEach((e) => e.classList.remove("active"));
      item.classList.add("active");

      // Получить текст фильтра
      const filterText = item.textContent.toLowerCase();

      // Фильтровать автомобили
      const filteredCars =
        filterText === "все марки"
          ? cars
          : cars.filter((car) =>
              car.brand.toLowerCase().includes(filterText)
            );

      // Рендерить отфильтрованные автомобили
      renderCars(filteredCars);

      // Прокрутить к списку автомобилей
      carsContent.scrollIntoView({ behavior: "instant" });
    });
  });
}

document.addEventListener("DOMContentLoaded", () => {
  renderCars(cars);
  setupFilters(cars);
});