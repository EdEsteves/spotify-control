import React from 'react';
import { action } from '@storybook/addon-actions';

import FlipButton from './index';

export default {
    component: FlipButton,
    title: 'flip-btn',
    // Our exports that end in "Data" are not stories.
    excludeStories: /.*Data$/,
  };
  
  export const btnData = {
    id: '1',
    text: 'storybook'
  };
  
  export const Default = () => {
    return <FlipButton data={{...btnData}} />;
  };
