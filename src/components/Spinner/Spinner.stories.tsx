import type { Meta, StoryObj } from '@storybook/react';

import Spinner, { SpinnerSize, SpinnerStyle } from './Spinner';

const meta = {
  title: 'UI/Spinner',
  component: Spinner,
} as Meta<typeof Spinner>;

export default meta;
type Story = StoryObj<typeof meta>;
export const Primary: Story = {
  args: {
    size: SpinnerSize.Md,
    color: SpinnerStyle.Primary,
  },
};
