'use strict';

document.addEventListener("DOMContentLoaded", function () {
  const calendar = document.getElementById("calendar");
  const startDaySelect = document.getElementById("start-day-select");
  const monthLengthSelect = document.getElementById("month-length-select");

  function updateCalendar() {
    const startDay = startDaySelect.value;
    const monthLength = monthLengthSelect.value;

    // Оновлюємо класи календаря без зайвих маніпуляцій
    calendar.className = `calendar calendar--start-day-${startDay} calendar--month-length-${monthLength}`;
  }

  // Додаємо обробники подій
  startDaySelect.addEventListener("change", updateCalendar);
  monthLengthSelect.addEventListener("change", updateCalendar);

  // Викликаємо оновлення календаря при завантаженні сторінки
  updateCalendar();
});
