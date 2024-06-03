import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

import IconCheck from '../Icons/Check/IconCheck';
import Button, { ButtonSize, ButtonStyle } from './Button';

const meta = {
  title: 'UI/Button',
  component: Button,
} as Meta<typeof Button>;

export default meta;
type Story = StoryObj<typeof meta>;

// const dataTestId = 'button-id-1';

// const Template: Story = (args: ButtonProps) => {
//   const onClick = () => {
//     alert('You click to button');
//   };
//   return <Button {...args} onClick={onClick} data-testid={dataTestId} />;
// };

export const MdPrimary: Story = {
  args: {
    children: 'Text button',
    size: ButtonSize.Md,
    styleMode: ButtonStyle.Primary,
  },
};

export const Sm: Story = {
  args: {
    children: 'Text button',
    size: ButtonSize.Sm,
    styleMode: ButtonStyle.Primary,
  },
};

export const MdSecondary: Story = {
  args: {
    children: 'Text button',
    size: ButtonSize.Md,
    styleMode: ButtonStyle.Secondary,
  },
};

export const MdOutline: Story = {
  args: {
    children: 'Text button',
    size: ButtonSize.Md,
    styleMode: ButtonStyle.Outline,
  },
};

export const MdGhost: Story = {
  args: {
    children: 'Text button',
    size: ButtonSize.Md,
    styleMode: ButtonStyle.Ghost,
  },
};

export const MdDanger: Story = {
  args: {
    children: 'Text button',
    size: ButtonSize.Md,
    styleMode: ButtonStyle.Danger,
  },
};

export const MdDangerGhost: Story = {
  args: {
    children: 'Text button',
    size: ButtonSize.Sm,
    styleMode: ButtonStyle.DangerGhost,
  },
};

export const MdPrimaryLoader: Story = {
  args: {
    children: 'Text button',
    size: ButtonSize.Md,
    styleMode: ButtonStyle.Primary,
    loading: true,
  },
};

export const MdPrimaryLoaderInText: Story = {
  args: {
    children: 'Text button',
    size: ButtonSize.Md,
    styleMode: ButtonStyle.Primary,
    loading: true,
    loaderInText: true,
  },
};

export const DefaultWithIcon: Story = {
  args: {
    children: (
      <>
        {'Text button'}
        <div style={{ height: '24px', width: '24px', marginLeft: '8px' }}>
          <IconCheck height={24} width={24} />
        </div>
      </>
    ),
    size: ButtonSize.Md,
    styleMode: ButtonStyle.Primary,
  },
};

export const DefaultWithIcon2: Story = {
  args: {
    children: (
      <>
        <div style={{ height: '24px', width: '24px', marginRight: '8px' }}>
          <IconCheck height={24} width={24} />
        </div>
        {'Любое длинное предложение, которое мы видим'}
      </>
    ),
    size: ButtonSize.Md,
    styleMode: ButtonStyle.Primary,
  },
};
//
// export const OnlyIcon = Template.bind({});
// OnlyIcon.args = {
//   children: (
//     <>
//       <div style={{ height: '24px', width: '24px' }}>
//         <IconCheck height={24} width={24} />
//       </div>
//     </>
//   ),
//   size: ButtonSize.Md,
//   styleMode: ButtonStyle.Primary,
//   onlyIcon: true,
// };
//
// export const Link = Template.bind({});
// Link.args = {
//   children: 'Lint to cdek',
//   size: ButtonSize.Md,
//   styleMode: ButtonStyle.Primary,
//   as: 'a',
//   href: 'https://www.cdek.ru',
//   target: '_blank',
// };
//
// const TemplateGroupButton: ComponentStory<typeof Button> = (args) => (
//   <>
//     <Button {...args} />
//     <Button {...args} />
//     <Button {...args} />
//   </>
// );
//
// export const GroupButton = TemplateGroupButton.bind({});
// GroupButton.args = {
//   children: 'Text button',
//   size: ButtonSize.Md,
//   styleMode: ButtonStyle.Primary,
// };
