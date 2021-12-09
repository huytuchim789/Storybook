import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import componentTextInput from './TextInput';
import TextInput from '../../component/TextInput';

export default {
    title: 'Example/TextInput',
    component: componentTextInput,
  } as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <TextInput {...args} />;

export const text = Template.bind({});
// More on args: https://storybook.js.org/docs/react/writing-stories/args
text.args = {
    name: 'input',
    typeInput: 'text',
    label: 'Button',
};