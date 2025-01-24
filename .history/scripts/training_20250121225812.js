import { cars } from './cars.js';

function renderCars(cars) {
    const carsContainer = document.querySelector('.car-items');

    cars.forEach((car) => {
        const carElement = document.createElement('article');
        carElement.classList.add('car');

        carElement.innerHTML = `
             <img
                  src="${car.image}"
                  alt="${car.brand} ${car.model}"
                />
                <div class="car-details">
                  <h4>${car.brand} ${car.model}</h4>
                  <p>
                   ${car.description}
                  </p>
                  <div class="car-action">
                    <ul>
                    ${car.prices.map((price) => `
                        <li>
                            <div class="car-period">${price.period}</div>
                            <div class="car-price">${price.price}</div>
                      </li>
                    `)}
                    </ul>
                    <a href="#order" class="button white-button">Забронировать</a>
                  </div>
                </div>
        `
        carsContainer.appendChild(carElement);
    });
}

renderCars(cars);

function filter