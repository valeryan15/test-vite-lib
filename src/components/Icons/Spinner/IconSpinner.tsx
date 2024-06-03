import React from 'react'

const IconSpinner = (props: any): JSX.Element => {
  return (
    <svg
      width="24"
      height="24"
      viewBox="0 0 24 24"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      {...props}
    >
      <defs>
        <radialGradient
          id="line-gradient"
          cx="0.4"
          cy="-0.5"
          r="2"
          // gradientUnits="userSpaceOnUse"
          // gradientTransform="translate(12 11.5) rotate(89.9999) scale(0.499999)"
        >
          <stop
            offset="0.4"
            stopColor="currentColor"
            stopOpacity="0.5"
          />
          <stop
            offset="0.8"
            stopColor="currentColor"
            stopOpacity="0"
          />
        </radialGradient>
      </defs>
      <circle
        cx="12"
        cy="12"
        r="11"
        stroke="currentColor"
        strokeOpacity="0.1"
        strokeWidth="2"
      />
      <path
        fillRule="evenodd"
        clipRule="evenodd"
        d="M12 0C5.37258 0 0 5.37258 0 12C0 18.6274 5.37258 24 12 24V22C6.47715 22 2 17.5228 2 12C2 6.47715 6.47715 2 12 2V0Z"
        fill="url(#line-gradient)"
      />
      <circle cx="12" cy="1" r="1" fill="currentColor" />
    </svg>
  )
}

IconSpinner.displayName = 'IconSpinner'

export default IconSpinner
