import React from 'react';
import Alert, { AlertVariant } from './Alert';
import type { Meta, StoryObj } from '@storybook/react';

const meta = {
  title: 'UI/Alert',
  component: Alert,
  args: {
    title: 'Заголовок',
    text: 'Описание. Рекомендовано не более двух строк полезного текста',
    withoutIcon: false,
    isOpen: true,
  },
} as Meta<typeof Alert>;

export default meta;
type Story = StoryObj<typeof meta>;

export const DefaultWithButton: Story = {
  render: (args) => {
    const textAlert = (
      <span>
        Простой текст. Простой текст. Простой текст. Простой текст. Простой
        текст. Простой текст. Простой текст.
        <br />
        Простой текст. Простой текст. Простой текст. Простой текст. Простой
        текст.
      </span>
    );

    return (
      <div
        style={{
          display: 'grid',
          gridTemplateRows: 'repeat(auto-fit, min-content)',
          gridRowGap: '24px',
        }}
      >
        <Alert {...args} title={'Меня можно закрыть'} text={textAlert} />
      </div>
    );
  },
};

const defaultArgs = {
  title: 'Заголовок',
  text: 'Описание. Рекомендовано не более двух строк полезного текста',
  isOpen: true,
};

export const VariantDanger: Story = {
  args: {
    ...defaultArgs,
    variant: AlertVariant.Danger,
  },
};

export const VariantSuccess: Story = {
  args: {
    ...defaultArgs,
    variant: AlertVariant.Success,
  },
};

export const VariantWarning: Story = {
  args: {
    ...defaultArgs,
    variant: AlertVariant.Warning,
  },
};

export const VariantInfo: Story = {
  args: {
    ...defaultArgs,
    variant: AlertVariant.Info,
  },
};
