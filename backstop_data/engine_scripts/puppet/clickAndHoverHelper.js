module.exports = async function (page, scenario) {
  console.log('SCENARIO > ' + scenario.label);
  const hoverSelector = scenario.hoverSelector;
  const clickSelector = scenario.clickSelector;
  const postInteractionWait = scenario.postInteractionWait || 0;

  if (hoverSelector) {
    await page.waitForSelector(hoverSelector);
    await page.hover(hoverSelector);
  }

  if (clickSelector) {
    await page.waitForSelector(clickSelector);
    await page.click(clickSelector);
  }

  if (postInteractionWait) {
    await page.waitForTimeout(postInteractionWait);
  }
};
