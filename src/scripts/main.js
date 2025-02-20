'use strict';
document.addEventListener("DOMContentLoaded", function () {
  const calendar = document.getElementById("calendar");
  const startDaySelect = document.getElementById("start-day-select");
  const monthLengthSelect = document.getElementById("month-length-select");

  function updateCalendar() {
    const startDay = startDaySelect.value;
    const monthLength = monthLengthSelect.value;

    // Видаляємо попередні модифікатори
    calendar.classList.forEach((cls) => {
      if (cls.startsWith("calendar--start-day-") || cls.startsWith("calendar--month-length-")) {
        calendar.classList.remove(cls);
      }
    });

    // Додаємо нові модифікатори
    calendar.classList.add(`calendar--start-day-${startDay}`);
    calendar.classList.add(`calendar--month-length-${monthLength}`);
  }

  startDaySelect.addEventListener("change", updateCalendar);
  monthLengthSelect.addEventListener("change", updateCalendar);
});
