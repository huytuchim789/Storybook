import React from 'react';
import { ComponentStory, ComponentMeta } from '@storybook/react';
import ComponentTextInput from './TextInput';
import TextInput from '../../component/TextInput';

export default {
    title: 'Component/TextInput',
    component: TextInput,
  } as ComponentMeta<typeof TextInput>;

const Template: ComponentStory<typeof TextInput> = (args) => <ComponentTextInput {...args} />;

export const text = Template.bind({});

text.args = {
    name: 'input',
    typeInput: 'text',
    label: 'Input',
    required: true,
};

export const email = Template.bind({});

email.args = {
    name: 'input',
    typeInput: 'email',
    label: 'Email',
    required: true,
};

export const password = Template.bind({});

password.args = {
    name: 'input',
    typeInput: 'password',
    label: 'Password',
    required: true,
    showLevelPassword: true,
};

export const textarea = Template.bind({});

textarea.args = {
    name: 'input',
    typeInput: 'textarea',
    label: 'TextArea',
    required: true,
    rows: 8,
};

export const search = Template.bind({});

search.args = {
    name: 'input',
    typeInput: 'search',
    label: 'Search',
};
