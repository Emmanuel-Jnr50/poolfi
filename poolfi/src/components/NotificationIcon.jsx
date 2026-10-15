const NotificationIcon = ({
  color = "#6B7488",
  width = 24,
  height = 24,
  ...props
}) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeMiterlimit={10}
      strokeWidth={1.75}
      d="M20.167 9.167v2.75c0 3.666-1.834 5.5-5.5 5.5h-.458a.929.929 0 0 0-.734.366L12.1 19.617c-.605.806-1.595.806-2.2 0l-1.375-1.834c-.146-.201-.486-.366-.733-.366h-.458c-3.667 0-5.5-.917-5.5-5.5V7.333c0-3.666 1.833-5.5 5.5-5.5h5.5"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M17.875 6.417a2.292 2.292 0 1 0 0-4.584 2.292 2.292 0 0 0 0 4.584Z"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M14.663 10.083h.008M10.996 10.083h.008M7.328 10.083h.009"
    />
  </svg>
)

export default NotificationIcon
