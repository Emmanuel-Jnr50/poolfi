const DropIconBold = ({ color = "#5B6478", width = 24, height = 24, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={width}
    height={height}
    fill="none"
    {...props}
  >
    <path
      stroke={color}
      strokeMiterlimit={10}
      strokeWidth={1.75}
      d="M11.56 2.026a.908.908 0 0 0-1.12 0C8.7 3.355 3.558 7.69 3.585 12.742c0 4.088 3.328 7.425 7.425 7.425 4.098 0 7.425-3.328 7.425-7.416.01-4.978-5.142-9.387-6.875-10.725Z"
    />
  </svg>
)

export default DropIconBold
