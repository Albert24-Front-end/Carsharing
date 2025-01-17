import { cars } from './cars.js';

// Функция для динамической генерации разметки
function renderCars(cars) {
  const container = document.querySelector('.cars-container'); // Контейнер для автомобилей

  cars.forEach((car) => {
    const carElement = document.createElement('article');
    carElement.classList.add('car');

    carElement.innerHTML = `
      <img src="${car.image}" alt="${car.model}" />
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

// Вызов функции для отрисовки автомобилей
renderCars(cars);
