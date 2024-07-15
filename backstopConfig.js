'use strict';

const backstop = require('@mate-academy/backstop-config');
const { basicScenario } = backstop;

const basic = {
  ...basicScenario,
  label: 'Elementary test',
  selectors: ['html'], 
  removeSelectors: [],
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
      selectors: ['html'],
    },
    {
      ...basic,
      label: 'Calendar day with hover effect',
      hoverSelector: 'html', 
      postInteractionWait: 0,  
    }

  ],
};

module.exports = config;
