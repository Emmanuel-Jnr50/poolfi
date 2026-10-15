const PlusIcon = ({ color = "#fff", width = 24, height = 24, ...props }) => (
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
      strokeWidth={2}
      d="M5 12h14m-7-7v14"
    />
  </svg>
)

export default PlusIcon
