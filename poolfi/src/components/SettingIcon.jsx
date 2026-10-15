const SettingIcon = ({ color = '#5B6478', width = 24, height = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M2.75 8.35v5.29c0 1.943 0 1.943 1.833 3.18l5.042 2.916c.76.44 1.998.44 2.75 0l5.042-2.915c1.833-1.238 1.833-1.238 1.833-3.172V8.351c0-1.934 0-1.934-1.833-3.172l-5.042-2.915c-.752-.44-1.99-.44-2.75 0L4.583 5.18C2.75 6.417 2.75 6.417 2.75 8.351Z"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M11 13.75a2.75 2.75 0 1 0 0-5.5 2.75 2.75 0 0 0 0 5.5Z"
    />
  </svg>
)

export default SettingIcon
