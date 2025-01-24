import { cars } from './cars.js';

function renderCars(cars) {
    const carsContainer = document.querySelector('.car-items');

    cars.forEach((car) => {
        const carElement = document.createElement('article');
        carElement.classList.add('car')
    });
}