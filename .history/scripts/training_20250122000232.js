import { cars } from './cars.js';

function renderCars(cars) {
    const carsContainer = document.querySelector('.car-items');
    carsContainer.innerHTML = '';

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
                    `).join('')}
                    </ul>
                    <a href="#order" class="button white-button">Забронировать</a>
                  </div>
                </div>
        `
        carsContainer.appendChild(carElement);
    });
}


function filteredCars(cars) {
    const filterItems = document.querySelectorAll('.cars-filter ul li');
    const carsContent = document.querySelector('#cars-content');

    filterItems.forEach((filter) => {
        filter.addEventListener('click', () => {
            filterItems.forEach((e) => { e.classList.remove('active') });
            filter.classList.add('active');
        });
        const filterText = filter.textContent.toLowerCase();
        const filteredCars = filterText === 'все марки' ? cars : cars.filter((car) => car.brand.toLowerCase().includes(filterText));

        renderCars(filteredCars);

        carsContent.scrollIntoView({ behavior: "instant" });
    });
}

document.addEventListener('DOMContentLoaded', () => {
    renderCars(cars);
    filteredCars(cars);
})