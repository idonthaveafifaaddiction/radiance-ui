import { Meta } from '@storybook/react';
import { excludeStoriesForNonChromaticEnvironments } from 'stories/utils';

import TOGGLE_STORIES from './index.stories';

export * from './index.stories';

export default {
  title: `${TOGGLE_STORIES.title}/Secondary`,
  parameters: {
    theme: 'secondary',
  },
  excludeStories: excludeStoriesForNonChromaticEnvironments(),
} as Meta;
