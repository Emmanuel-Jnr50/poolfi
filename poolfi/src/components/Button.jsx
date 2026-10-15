/**
 * Reusable button with an optional icon.
 *
 * Usage:
 *   <Button onClick={handleSave}>Save</Button>
 *   <Button icon={<SaveIcon />} backgroundColor="#2563eb" textColor="#fff"
 *     width={180} height={52}>Save</Button>
 *
 * Omit `icon` when it is not needed. Override `width`, `height`,
 * `backgroundColor`, and `textColor` for each use.
 */
export default function Button({
	children,
	icon,
	iconPosition = "left",
	width = "auto",
	height = 52,
	backgroundColor = "#2563eb",
	textColor = "#ffffff",
	type = "button",
	disabled = false,
	onClick,
	className = "",
	style = {},
	...props
}) {
	const buttonStyle = {
		display: "inline-flex",
		alignItems: "center",
		justifyContent: "center",
		gap: icon ? 8 : 0,
		width,
		height,
		padding: "0 16px",
		border: "none",
		borderRadius: 50,
		backgroundColor,
		color: textColor,
		font: "inherit",
		cursor: disabled ? "not-allowed" : "pointer",
		opacity: disabled ? 0.6 : 1,
		...style,
	};

	const iconElement = icon ? <span aria-hidden="true">{icon}</span> : null;

	return (
		<button
			type={type}
			onClick={onClick}
			disabled={disabled}
			className={className}
			style={buttonStyle}
			{...props}
		>
			{iconPosition === "right" && iconElement}
			{children}
			{iconPosition !== "right" && iconElement}
		</button>
	);
}
