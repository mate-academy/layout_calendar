'use strict';
const calendar = document.querySelector('.calendar');

const daysInMonth = 31;

function generateCalendar(daysInMonth) {

  // Add divs for each day in the month
  for (let i = 1; i <= daysInMonth; i++) {
    const day = document.createElement('div');
    day.classList.add('calendar__day');
    day.setAttribute('data-day', i);
    calendar.appendChild(day);
  }
}

generateCalendar(daysInMonth);
