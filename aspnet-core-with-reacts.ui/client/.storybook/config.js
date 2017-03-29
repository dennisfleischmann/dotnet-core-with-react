/*
@kadira/storybook basic configurations

head.html is used to load head dependencies from the current project
*/

import { configure } from '@kadira/storybook';

function loadStories() {
  require('../src/components/stories/index.js');
  // You can require as many stories as you need.
}

configure(loadStories, module);
