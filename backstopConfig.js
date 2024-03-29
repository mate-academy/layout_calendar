'use strict';
// https://github.com/garris/BackstopJS#advanced-scenarios

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  selectors: ['body'],
  removeSelectors: [
    'h1',
  ],
  misMatchThreshold: 0.5,
  referenceUrl: basicScenario.referenceUrl + '/calendar/',
};

const config = {
  ...backstop,
  fileNameTemplate: '{scenarioLabel}',
  onBeforeScript: 'puppet/onBefore.js',
  onReadyScript: 'puppet/onReady.js',
  viewports: [
    {
      name: 'tablet_h',
      width: 1024,
      height: 768,
    },
  ],
  scenarios: [
    {
      ...basic,
      label: 'Calendar initial state',
    },
    {
      ...basic,
      label: 'Calendar day with hover effect',
      hoverSelector: '.calendar__day:nth-child(5)',
      postDOMChangeWait: 1000,
    },
    {
      ...basic,
      label: 'Calendar starting from Wednesday',
      postDOMChangeWait: 1000,
    },
    {
      ...basic,
      label: 'Calendar with length of 29 days',
      postDOMChangeWait: 1000,
    },
  ],
};

module.exports = config;
