'use strict';
import '../styles/main.scss'; 

// Remove or comment out the incorrect import below
// import './src/scripts/main.scss';

document.addEventListener('DOMContentLoaded', () => {
  // your code here
});

document.addEventListener('DOMContentLoaded', () => {
  const days = document.querySelectorAll('.calendar__day');
  days.forEach((day, i) => {
    day.textContent = i + 1;
    day.addEventListener('click', () => {
      day.classList.toggle('calendar__day--active');
    });
  });
});

