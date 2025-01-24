import { cars } from './cars.js';

function renderCars(cars) {
    const carsContainer = document.querySelector('.car-items');

    cars.forEach((car) => {
        const carElement = document.createElement('article');
        carElement.classList.add('car');

        carElement.innerHTML = `
             <img
                  src="${car.image}"
                  alt="${car.brand} $"
                />
                <div class="car-details">
                  <h4>BMW M4 Competition</h4>
                  <p>
                    Идеальный баланс скорости и стиля. BMW M4 Competition — 510
                    л.с. и драйв, созданный для покорения трасс и городских
                    улиц.
                  </p>
                  <div class="car-action">
                    <ul>
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