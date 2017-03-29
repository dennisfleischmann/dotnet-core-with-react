import React from 'react';
import { storiesOf, /* action */ } from '@kadira/storybook';

/*
import React Components for styling purposes without
business/application logic
*/

import StarterKit from '../starterKit';
import InputBox from '../atoms/inputBox';

storiesOf('Inputbox', module)
  .add('Basic Layout', () => (
    <InputBox placeholder="Type text in here" />
  ));

storiesOf('StarterKit Component', module)
  .add('Basic Layout', () => (
    <StarterKit />
  ));
