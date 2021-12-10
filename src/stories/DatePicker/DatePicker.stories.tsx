// Datepicker.stories.ts|tsx

import React from 'react';

import { ComponentStory, ComponentMeta } from '@storybook/react';

import { Datepicker } from '../../component/DatePicker';

export default {
  /* 👇 The title prop is optional.
   * See https://storybook.js.org/docs/react/configure/overview#configure-story-loading
   * to learn how to generate automatic titles
   */
  title: 'Component/Datepicker',
  component: Datepicker,
} as ComponentMeta<typeof Datepicker>;
const Template: ComponentStory<typeof Datepicker> = (args) => {
  console.log(args);
  return <Datepicker {...args} />;
};

export const Primary = Template.bind({});
Primary.args = {};
