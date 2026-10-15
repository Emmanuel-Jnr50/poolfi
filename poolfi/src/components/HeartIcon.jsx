import * as React from "react"
const HeartIcon = ({ color = "#5B6478", width = 24, height = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    viewBox="0 0 24 24"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M11.569 19.076c-.312.11-.826.11-1.137 0-2.659-.908-8.599-4.694-8.599-11.11 0-2.833 2.283-5.124 5.097-5.124 1.668 0 3.144.806 4.07 2.053a5.069 5.069 0 0 1 4.07-2.053c2.814 0 5.097 2.291 5.097 5.124 0 6.417-5.94 10.202-8.599 11.11Z"
    />
  </svg>
)
export default HeartIcon
