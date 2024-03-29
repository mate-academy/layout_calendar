module.exports = async (page, scenario, vp) => {
  console.log('SCENARIO > ' + scenario.label);
  await require('./clickAndHoverHelper')(page, scenario);

  const {
    label,
    postDOMChangeWait = 0,
  } = scenario;

  switch (label) {
    case 'Calendar starting from Wednesday': {
      await page.waitForSelector('.calendar');
      await page.waitForSelector('.calendar--start-day-sun');

      await page.evaluate(() => {
        const calendarElement = document.querySelector('.calendar');
        const newClassName = calendarElement.className.replace('calendar--start-day-sun', 'calendar--start-day-wed');

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
        const newClassName = calendarElement.className.replace('calendar--month-length-31', 'calendar--month-length-29');

        calendarElement.className = newClassName;
      });

      await page.waitForSelector('.calendar--month-length-29');
      await new Promise(resolve => setTimeout(resolve, postDOMChangeWait));

      break;
    }

    default:
      break;
  }
};
