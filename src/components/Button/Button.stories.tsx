import type { Meta, StoryObj } from '@storybook/react';

import Button, { ButtonSize, ButtonStyle, ButtonTag } from './Button';
import { fn } from '@storybook/test';

const meta = {
  title: 'UI/Button',
  component: Button,
  parameters: {
    // Optional parameter to center the component in the Canvas. More info: https://storybook.js.org/docs/configure/story-layout
    layout: 'centered',
    pseudo: { hover: true, focus: true, active: true },
  },
  // This component will have an automatically generated Autodocs entry: https://storybook.js.org/docs/writing-docs/autodocs
  tags: ['autodocs'],
  // Use `fn` to spy on the onClick arg, which will appear in the actions panel once invoked: https://storybook.js.org/docs/essentials/actions#action-args
  args: { onClick: fn() },
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Primary: Story = {
  args: {
    children: 'Submit',
  },
};

export const Secondary: Story = {
  args: {
    children: 'Submit',
    styleMode: ButtonStyle.Secondary,
  },
};

export const Danger: Story = {
  args: {
    children: 'Submit',
    styleMode: ButtonStyle.Danger,
  },
};

export const Large: Story = {
  args: {
    children: 'Submit',
    size: ButtonSize.Large,
  },
};

export const Medium: Story = {
  args: {
    children: 'Submit',
    size: ButtonSize.Medium,
  },
};

export const Small: Story = {
  args: {
    children: 'Submit',
    size: ButtonSize.Small,
  },
};

export const Disabled: Story = {
  args: {
    children: 'Submit',
    disabled: true,
  },
};

export const Loading: Story = {
  args: {
    children: 'Submit',
    loading: true,
  },
};
export const Link: Story = {
  args: {
    children: 'Submit',
    as: ButtonTag.Link,
    href: 'www.google.com',
    target: '_blank',
  },
};
