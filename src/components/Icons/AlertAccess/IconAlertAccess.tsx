import React, { SVGProps } from "react";

export interface IconAlertAccessProps extends SVGProps<SVGSVGElement> {
  strokeWidth?: number
}
const IconAlertAccess = ({
  strokeWidth = 2,
  ...props
}: IconAlertAccessProps): JSX.Element => {
  return (
    <svg
      width="20"
      height="20"
      viewBox="0 0 20 20"
      fill="none"
      xmlns="http://www.w3.org/2000/svg"
      {...props}
    >
      <path
        d="M4.16699 9.99992L8.33366 14.1666L16.667 5.83325"
        stroke="currentColor"
        strokeOpacity="1"
        strokeWidth={strokeWidth}
        strokeLinecap="round"
        strokeLinejoin="round"
      />
    </svg>
  )
}

IconAlertAccess.displayName = 'IconAlertAccess'

export default IconAlertAccess
