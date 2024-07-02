import React, { LinkHTMLAttributes, Ref } from 'react';
interface BaseLinkProps extends LinkHTMLAttributes<HTMLAnchorElement> {}
const BaseLink = React.forwardRef(
  ({ children, ...otherProps }: BaseLinkProps, ref: Ref<HTMLAnchorElement>) => {
    return (
      <a ref={ref} {...otherProps}>
        <>{children}</>
      </a>
    );
  },
);

export default BaseLink;
