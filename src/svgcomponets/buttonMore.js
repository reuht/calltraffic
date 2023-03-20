import * as React from "react"

const ButtonMore = (props) => (
  <svg
    width={57}
    height={57}
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <rect width={57} height={57} rx={6} fill="#2CE152" />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.895 14.462c-8.471 0-15.338 6.613-15.338 14.77 0 8.158 6.867 14.771 15.338 14.771 8.472 0 15.34-6.613 15.34-14.77 0-8.158-6.868-14.771-15.34-14.771ZM11 29.232C11 19.716 19.012 12 28.895 12c9.884 0 17.896 7.715 17.896 17.233 0 9.517-8.012 17.232-17.896 17.232C19.012 46.465 11 38.75 11 29.233Z"
      fill="#000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M28.326 21c.732 0 1.325.551 1.325 1.23v14.772c0 .68-.593 1.23-1.325 1.23-.733 0-1.326-.55-1.326-1.23V22.23c0-.68.593-1.231 1.326-1.231Z"
      fill="#000"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M20 29.326c0-.733.551-1.326 1.23-1.326h14.772c.68 0 1.23.593 1.23 1.326 0 .732-.55 1.325-1.23 1.325H21.23c-.68 0-1.231-.593-1.231-1.325Z"
      fill="#000"
    />
  </svg>
)

export default ButtonMore;
