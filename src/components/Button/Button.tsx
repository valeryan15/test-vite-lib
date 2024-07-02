import React, { Ref } from 'react';
import classNames from 'classnames';
import ButtonClasses from './Button.module.scss';
import BaseLink from './Core/BaseLink.tsx';
import BaseButton from './Core/BaseButton.tsx';

export enum ButtonSize {
  Small = 'small',
  Medium = 'medium',
  Large = 'large',
}

export enum ButtonType {
  Button = 'button',
  Reset = 'reset',
  Submit = 'submit',
}

export enum ButtonStyle {
  Primary = 'primary',
  Secondary = 'secondary',
  Danger = 'danger',
}

export enum ButtonTag {
  Button = 'button',
  Link = 'a',
}

export interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
  className?: string;
  styleMode?: ButtonStyle;
  as?: ButtonTag;
  href?: string;
  target?: string;
  loading?: boolean;
  disabled?: boolean;
  onClick?: (
    e: React.MouseEvent<HTMLAnchorElement | HTMLButtonElement>,
  ) => void;
  type?: ButtonType;
  'data-testid'?: string;
}

const Button: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ButtonProps> & React.RefAttributes<unknown>
> = React.forwardRef(
  (
    {
      className = '',
      size = ButtonSize.Medium,
      as = ButtonTag.Button,
      href,
      styleMode = ButtonStyle.Primary,
      disabled = false,
      children,
      loading = false,
      onClick,
      type = ButtonType.Button,
      ...props
    }: ButtonProps,
    ref: Ref<any>,
  ) => {
    const isLink = Boolean(href) || as === ButtonTag.Link;
    const linkProps = {
      ...props,
      onClick: (e: React.MouseEvent<HTMLAnchorElement>) => {
        if (disabled || loading) e.preventDefault();
        onClick && onClick(e);
      },
      href,
    };
    const buttonProps = {
      ...props,
      onClick: (e: React.MouseEvent<HTMLButtonElement>) => {
        if (disabled || loading) e.preventDefault();
        onClick && onClick(e);
      },
      type: type,
      disabled: loading || disabled,
    };

    const classNameStyle: string = ButtonClasses[`button-${styleMode}`];
    const classNameSize: string = `uikit-button-${size}`;
    const buttonClasses = classNames(
      ButtonClasses.button,
      classNameStyle,
      classNameSize,
      loading && 'uikit-button--loading',
      disabled && 'uikit-button--disabled',
      className,
    );
    if (isLink) {
      return (
        <BaseLink ref={ref} className={buttonClasses} {...linkProps}>
          {children}
        </BaseLink>
      );
    }
    return (
      <BaseButton ref={ref} className={buttonClasses} {...buttonProps}>
        {children}
      </BaseButton>
    );
  },
);

export default Button;
