import React from 'react';
import PropTypes from 'prop-types';
import classNames from 'classnames';
import IconSpinner from '../Icons/Spinner/IconSpinner.tsx';

export enum SpinnerSize {
  Sm = 'sm',
  Md = 'md',
  Lg = 'lg',
}
export enum SpinnerStyle {
  Primary = 'primary',
  Default = 'default',
}

export interface SpinnerProps {
  size?: SpinnerSize;
  color?: SpinnerStyle;
  className?: string;
}

const Spinner = ({
  size = SpinnerSize.Sm,
  color = SpinnerStyle.Default,
  className = '',
  ...props
}: SpinnerProps) => {
  const classNameColor: string = `uikit-spinner-${color}`;
  const classNameSize: string = `uikit-spinner-${size}`;
  return (
    <div
      className={classNames(
        'uikit-spinner',
        classNameSize,
        classNameColor,
        className,
      )}
      {...props}
    >
      <IconSpinner className={'uikit-spinner-icon'} />
    </div>
  );
};

Spinner.displayName = 'Spinner';

Spinner.propTypes = {
  size: PropTypes.oneOf([SpinnerSize.Lg, SpinnerSize.Md, SpinnerSize.Sm]),
  color: PropTypes.oneOf([SpinnerStyle.Default, SpinnerStyle.Primary]),
  className: PropTypes.string,
};

export default Spinner;
