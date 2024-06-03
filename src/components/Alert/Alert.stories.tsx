import React, { useState } from 'react';
import Alert, { AlertVariant } from './Alert';
import type { Meta, StoryObj } from '@storybook/react';

import { Button } from '../Button';

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
    const [isOpen, setOpen] = useState(true);

    const textAlert = (
      <span>
        Этот алерт можно закрыть на крестик или управлять с кнопки
        <br />
        Его параметры можно менять из панели Storybook
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
        <Button onClick={() => setOpen(!isOpen)}>
          Показать или Скрыть Alert
        </Button>
        <Alert
          title={'Алерт всегда на странице'}
          text={
            'Этот алерт не изменяется. Его нельзя закрыть, у него нет крестика'
          }
          isOpen={true}
          variant={AlertVariant.Info}
          data-testid={'alert-test-id-0'}
        />
        <Alert
          {...args}
          title={'Меня можно закрыть'}
          text={textAlert}
          isOpen={isOpen}
          handleClose={() => {
            alert('close');
            setOpen(false);
          }}
          data-testid={'alert-test-id-1'}
        />
        <Alert
          title={'Алерт всегда на странице'}
          text={
            'Этот алерт не изменяется. Его нельзя закрыть, у него нет крестика'
          }
          isOpen={true}
          variant={AlertVariant.Success}
          withBackground={true}
          data-testid={'alert-test-id-2'}
        />
      </div>
    );
  },
};

const defaultArgs = {
  title: 'Заголовок',
  text: 'Описание. Рекомендовано не более двух строк полезного текста',
  isOpen: true,
};

const defaultArgsWithBackground = {
  ...defaultArgs,
  withBackground: true,
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

export const VariantWithBackgroundDanger: Story = {
  args: {
    ...defaultArgsWithBackground,
    variant: AlertVariant.Danger,
  },
};

export const VariantWithBackgroundSuccess: Story = {
  args: {
    ...defaultArgsWithBackground,
    variant: AlertVariant.Success,
  },
};

export const VariantWithBackgroundWarning: Story = {
  args: {
    ...defaultArgsWithBackground,
    variant: AlertVariant.Warning,
  },
};

export const VariantWithBackgroundInfo: Story = {
  args: {
    ...defaultArgsWithBackground,
    variant: AlertVariant.Info,
  },
};

export const EmptyTextAlert: Story = {
  args: {
    variant: AlertVariant.Info,
    title: 'Empty',
    text: '',
    isOpen: true,
  },
};

export const NoIconTextAlert: Story = {
  args: {
    ...defaultArgsWithBackground,
    variant: AlertVariant.Info,
    withoutIcon: true,
  },
};
