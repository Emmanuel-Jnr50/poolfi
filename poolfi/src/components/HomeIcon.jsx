const HomeIcon = ({ color = "#5B6478", width = 20, height = 20, ...props }) => (
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
      strokeWidth={1.75}
      d="m8.268 2.603-4.94 3.85c-.825.642-1.494 2.008-1.494 3.044v6.792c0 2.127 1.732 3.868 3.859 3.868h10.615a3.871 3.871 0 0 0 3.859-3.859V9.625c0-1.11-.743-2.53-1.65-3.162l-5.665-3.97c-1.284-.898-3.346-.852-4.584.11ZM11 16.49v-2.75"
    />
  </svg>
)
// Usage: import HomeIcon from "./HomeIcon"; <HomeIcon color="#000" width={24} height={24} />
export default HomeIcon