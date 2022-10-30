import React from 'react';
import { Meta, Story } from '@storybook/react';
import { Button, Props } from '../src/Button';
import {action} from '@storybook/addon-actions'

//argTypesとdefaultValueはstorybook独自のもの
const meta: Meta = {
  title: 'Button',
  component: Button,
  argTypes: {
    onClick: {action: 'clicked'},
    children: {
      defaultValue: 'Default Text'
    }
  }
};

export default meta;

const Templete: Story<Props> = args => <Button {...args} />;

//export const Default = () => <Button variant='primary'>Click</Button>
export const Default = Templete.bind({});
//export const Secondary = () => <Button variant='secondary'>I am button</Button>
export const Secondary = Templete.bind({});

Secondary.args = {
  variant: 'secondary',
  children : 'I am secondary',
  onclick: action('secondary click')
};
