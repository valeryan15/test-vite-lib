import PropTypes from 'prop-types';
import React, { Ref } from 'react';

import Spinner, { SpinnerStyle } from '../Spinner/Spinner';
import classNames from 'classnames';

export enum ButtonSize {
  Sm = 'sm',
  Md = 'md',
}

export enum ButtonType {
  Button = 'button',
  Reset = 'reset',
  Submit = 'submit',
}

export enum ButtonStyle {
  Primary = 'primary',
  Secondary = 'secondary',
  Outline = 'outline',
  Ghost = 'ghost',
  Danger = 'danger',
  DangerGhost = 'danger-ghost',
}

export interface ButtonProps {
  children: React.ReactNode;
  size?: ButtonSize;
  className?: string;
  styleMode?: ButtonStyle;
  as?: string;
  href?: string;
  target?: string;
  loading?: boolean;
  loaderInText?: boolean;
  onlyIcon?: boolean;
  disabled?: boolean;
  onClick?: (e: React.ChangeEvent<HTMLLinkElement | HTMLButtonElement>) => void;
  type?: ButtonType;
  'data-testid'?: string;
}

const Button: React.ForwardRefExoticComponent<
  React.PropsWithoutRef<ButtonProps> & React.RefAttributes<unknown>
> = React.forwardRef(
  (
    {
      className = '',
      size = ButtonSize.Md,
      as = 'button',
      href,
      styleMode = ButtonStyle.Primary,
      disabled = false,
      children,
      loading = false,
      loaderInText = false,
      onlyIcon = false,
      onClick,
      type = ButtonType.Button,
      ...props
    }: ButtonProps,
    ref: Ref<any>,
  ) => {
    const isLoaderOut = !loaderInText && loading;
    const isLoaderIn = loaderInText && loading;
    const Component = href ? 'a' : as;
    const propsComponent = href
      ? {
          ...props,
          onClick: (e: React.ChangeEvent<HTMLLinkElement>) => {
            if (disabled || loading) e.preventDefault();
            onClick && onClick(e);
          },
          href,
        }
      : {
          ...props,
          onClick: (e: React.ChangeEvent<HTMLButtonElement>) => {
            if (disabled || loading) e.preventDefault();
            onClick && onClick(e);
          },
          type: type,
          disabled: loading || disabled,
        };
    const colorSpinner = (styleMode: ButtonStyle) => {
      if (disabled) return SpinnerStyle.Default;
      if (
        styleMode === 'secondary' ||
        styleMode === 'outline' ||
        styleMode === 'ghost'
      )
        return SpinnerStyle.Primary;
      return SpinnerStyle.Default;
    };

    const classNameStyle: string = `uikit-button-${styleMode}`;
    const classNameSize: string = `uikit-button-${size}`;

    return (
      // @ts-ignore
      <Component
        ref={ref}
        className={classNames(
          'uikit-button',
          classNameStyle,
          classNameSize,
          loading && 'uikit-button--loading',
          disabled && 'uikit-button--disabled',
          onlyIcon && 'uikit-button--onlyIcon',
          className,
        )}
        {...propsComponent}
      >
        <>
          <div className={'uikit-button-containerContent'}>
            {isLoaderIn && (
              <Spinner
                color={colorSpinner(styleMode)}
                className={'uikit-button-spinner-inner'}
              />
            )}
            {isLoaderOut && (
              <Spinner
                color={colorSpinner(styleMode)}
                className={'uikit-button-spinner-outer'}
              />
            )}
            <div
              className={classNames(
                'uikit-button-containerChildren',
                isLoaderOut && 'uikit-button-containerChildren--loading',
              )}
            >
              {children}
            </div>
          </div>
        </>
      </Component>
    );
  },
);

Button.displayName = 'Button';

Button.propTypes = {
  className: PropTypes.string,
  size: PropTypes.oneOf([ButtonSize.Sm, ButtonSize.Md]),
  styleMode: PropTypes.oneOf([
    ButtonStyle.Primary,
    ButtonStyle.Secondary,
    ButtonStyle.Ghost,
    ButtonStyle.Outline,
    ButtonStyle.DangerGhost,
    ButtonStyle.Danger,
  ]),
  disabled: PropTypes.bool,
  loading: PropTypes.bool,
  loaderInText: PropTypes.bool,
  onlyIcon: PropTypes.bool,
  children: PropTypes.node,
  onClick: PropTypes.func,
  type: PropTypes.oneOf([
    ButtonType.Button,
    ButtonType.Reset,
    ButtonType.Submit,
  ]),
  as: PropTypes.string,
  href: PropTypes.string,
  target: PropTypes.string,
};

export default Button;
