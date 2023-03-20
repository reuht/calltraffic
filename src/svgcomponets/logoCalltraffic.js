import * as React from "react"

const LogoCalltraffic = (props) => (
  <svg
    width={174}
    height={174}
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <g filter="url(#a)">
      <path fill="#2CE152" d="M60 60h54v54H60z" />
    </g>
    <path
      d="M102.269 71.39c5.336 5.336 7.325 12.769 5.97 19.671h3.06a25.07 25.07 0 0 0 .36-4.234c0-6.634-2.58-12.867-7.273-17.554C99.694 64.586 93.461 62 86.832 62c-1.432 0-2.848.124-4.234.36v3.06c6.902-1.355 14.335.634 19.671 5.97Z"
      fill="#fff"
    />
    <path
      d="M100.42 73.24c-4.826-4.827-11.605-6.542-17.822-5.152v3.086c5.424-1.458 11.46-.067 15.705 4.182 4.25 4.25 5.64 10.281 4.183 15.705h3.085c1.391-6.217-.319-12.995-5.151-17.822Z"
      fill="#fff"
    />
    <path
      d="M96.505 77.154c-3.754-3.755-9.168-4.863-13.907-3.328v3.194c3.904-1.68 8.607-.927 11.79 2.256 3.184 3.183 3.93 7.886 2.256 11.79h3.194c1.53-4.744.422-10.157-3.333-13.912Z"
      fill="#fff"
    />
    <path
      d="M107.848 92.72H95.749a10.91 10.91 0 0 1-1.36 1.663c-4.167 4.167-10.946 4.167-15.113 0s-4.167-10.945 0-15.112a10.57 10.57 0 0 1 1.664-1.36v-15.21a24.672 24.672 0 0 0-11.667 6.572C64.586 73.96 62 80.198 62 86.827c0 6.634 2.58 12.867 7.273 17.554 4.692 4.687 10.925 7.273 17.554 7.273 6.634 0 12.867-2.58 17.554-7.273 3.266-3.265 5.512-7.283 6.573-11.666h-3.106v.005Z"
      fill="#2CE152"
    />
    <defs>
      <filter
        id="a"
        x={0}
        y={0}
        width={174}
        height={174}
        filterUnits="userSpaceOnUse"
        colorInterpolationFilters="sRGB"
      >
        <feFlood floodOpacity={0} result="BackgroundImageFix" />
        <feBlend in="SourceGraphic" in2="BackgroundImageFix" result="shape" />
        <feGaussianBlur
          stdDeviation={30}
          result="effect1_foregroundBlur_8_65"
        />
      </filter>
    </defs>
  </svg>
)

export default LogoCalltraffic;
