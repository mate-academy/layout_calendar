const clickAndHoverHelper = require('./clickAndHoverHelper');

module.exports = async (page, scenario) => {
  console.log('SCENARIO > ' + scenario.label);

  const {
    label,
    postDOMChangeWait = 0,
  } = scenario;

  switch (label) {
    case 'Calendar day with hover effect': {
      await page.evaluate(() => {
        document.documentElement.style.setProperty(
          '--calendar-hover-shift',
          '0px'
        );
      });

      break;
    }

    case 'Calendar starting from Wednesday': {
      await page.waitForSelector('.calendar');
      await page.waitForSelector('.calendar--start-day-sun');

      await page.evaluate(() => {
        const calendarElement = document.querySelector('.calendar');
        const newClassName = calendarElement.className.replace(
          'calendar--start-day-sun',
          'calendar--start-day-wed'
        );

        calendarElement.className = newClassName;
      });

      await page.waitForSelector('.calendar--start-day-wed');
      await new Promise(resolve => setTimeout(resolve, postDOMChangeWait));

      break;
    }

    case 'Calendar with length of 29 days': {
      await page.waitForSelector('.calendar');
      await page.waitForSelector('.calendar--month-length-31');

      await page.evaluate(() => {
        const calendarElement = document.querySelector('.calendar');
        if (!calendarElement) {
          return;
        }

        calendarElement.classList.remove('calendar--month-length-31');
        calendarElement.classList.add('calendar--month-length-29');

        const daysToHide = calendarElement.querySelectorAll(
          '.calendar__day:nth-child(n + 30)'
        );

        daysToHide.forEach(day => {
          day.style.display = 'none';
        });
      });

      await page.waitForSelector('.calendar--month-length-29');
      await new Promise(resolve => setTimeout(resolve, postDOMChangeWait));

      break;
    }

    default:
      break;
  }

  await clickAndHoverHelper(page, scenario);
};
