import * as React from "react"

const Dashboard = (props) => (
  <svg
    width={14}
    height={14}
    fill="none"
    // xmlns="http://www.w3.org/2000/svg"
    {...props}
  >
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M0 7.5A.5.5 0 0 1 .5 7h4.25a.5.5 0 0 1 0 1H1v5h3.75a.5.5 0 0 1 0 1H.5a.5.5 0 0 1-.5-.5v-6Z"
      fill="#708099"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M4.25 4.5a.5.5 0 0 1 .5-.5h4.5a.5.5 0 0 1 0 1h-4v8h4a.5.5 0 0 1 0 1h-4.5a.5.5 0 0 1-.5-.5v-9Z"
      fill="#708099"
    />
    <path
      fillRule="evenodd"
      clipRule="evenodd"
      d="M8.75.5a.5.5 0 0 1 .5-.5h4.25a.5.5 0 0 1 .5.5v13a.5.5 0 0 1-.5.5H9.25a.5.5 0 0 1-.5-.5V.5Zm1 .5v12H13V1H9.75Z"
      fill="#708099"
    />
  </svg>
)

export default Dashboard;
