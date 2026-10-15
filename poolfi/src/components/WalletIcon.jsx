const WalletIcon = ({ color = "#6B7488", width = 24, height = 24, ...props }) => (
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
      d="m11.605 2.308-.027.064-2.659 6.17H6.307c-.623 0-1.22.128-1.76.357L6.15 5.067l.037-.091.064-.147a.793.793 0 0 1 .064-.156c1.2-2.777 2.558-3.41 5.29-2.365Z"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M16.546 8.725a4.363 4.363 0 0 0-1.293-.183H8.92l2.658-6.17.028-.064c.137.046.266.11.403.165l2.026.853c1.127.467 1.916.953 2.392 1.54.092.11.165.21.23.33.082.128.146.256.183.394.037.082.064.165.082.238.248.77.101 1.714-.375 2.897Z"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M19.728 13.015v1.788c0 .183-.009.366-.018.55-.174 3.199-1.962 4.812-5.353 4.812h-7.15c-.22 0-.44-.018-.651-.046-2.915-.192-4.473-1.75-4.666-4.665a5.06 5.06 0 0 1-.046-.651v-1.788A4.486 4.486 0 0 1 4.558 8.9a4.54 4.54 0 0 1 1.76-.357h8.946c.45 0 .89.064 1.293.183a4.495 4.495 0 0 1 3.171 4.29Z"
    />
    <path
      stroke={color}
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={1.75}
      d="M6.151 5.067 4.547 8.9a4.486 4.486 0 0 0-2.713 4.116v-2.686A5.361 5.361 0 0 1 6.15 5.067ZM19.725 10.329v2.685a4.472 4.472 0 0 0-3.171-4.28c.476-1.192.614-2.127.385-2.906a1.044 1.044 0 0 0-.083-.238 5.338 5.338 0 0 1 2.87 4.739Z"
    />
  </svg>
)

export default WalletIcon
