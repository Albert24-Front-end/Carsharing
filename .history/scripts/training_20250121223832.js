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
                    ${car.prices.map((price))}
                      <li>
                        <div class="car-period">на 1 сутки</div>
                        <div class="car-price">1450 $</div>
                      </li>
                      <li>
                        <div class="car-period">на 1-3 суток</div>
                        <div class="car-price">1300 $ <span>/сут</span></div>
                      </li>
                      <li>
                        <div class="car-period">на 3+ суток</div>
                        <div class="car-price">1100 $ <span>/сут</span></div>
                      </li>
                    </ul>
                    <a href="#order" class="button white-button">Забронировать</a>
                  </div>
                </div>
        `
    });
}