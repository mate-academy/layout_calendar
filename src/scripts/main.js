'use strict';
(() => {
  let template = '';
  for (let i = 0; i < 31; i++) {
    template += '<div class="calendar__day"></div>';
  }

  document.querySelector('.calendar').innerHTML = template;
})();
