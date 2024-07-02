import React, { ButtonHTMLAttributes, Ref } from 'react';
interface BaseButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {}
const BaseButton = React.forwardRef(
  (
    { children, ...otherProps }: BaseButtonProps,
    ref: Ref<HTMLButtonElement>,
  ) => {
    return (
      <button ref={ref} {...otherProps}>
        <>{children}</>
      </button>
    );
  },
);

export default BaseButton;
