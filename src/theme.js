import { extendTheme } from "@chakra-ui/react";
import { mode } from "@chakra-ui/theme-tools";
import { defineStyle } from "@chakra-ui/react";

const styles = {
	global: (props) => ({
		body: {
			bg: mode("#d2d3db", "#161722")(props),
			fontFamily: "'Josefin Sans', sans-serif",
			color: mode("#484b6a", "#cacde8")(props),
			fontWeight: "bold",
		},
	}),
};

const components = {
	Button: {
		baseStyle: (props) => ({
			bg: mode("#fafafa", "#25273c")(props),
			_active: {
				color: "#3a7bfd",
			},
		}),
		variants: (props) => ({
			base: defineStyle({
				fontSize: "10px",
			}),
			md: defineStyle({
				fontSize: "14px",
			}),
		}),
	},
	Input: {
		baseStyle: (props) => ({
			field: {
				bg: mode("#fafafa", "#25273c")(props),
			},
		}),
		defaultProps: {
			variants: null,
		},
		variants: {
			todo_input: (props) => ({
				placeholder: {
					color: mode("#9394a5", "#777a92")(props),
				},
			}),
		},
	},
	Container: {
		variants: {
			main: {
				display: "flex",
				flexDirection: "column",
				justifyContent: "center",
				position: "absolute",
				transform: "translate(-50%)",
			},
		},
	},
};

const colors = {
	primary: {
		brightBlue: "#3a7bfd",
		checkBackground: "linear-gradient #57ddff to #c058f3",
	},
	light: {
		veryLightGray: "#fafafa",
		veryLightGrayishBlue: "#e4e5f1",
		lightGrayishBlue: "#d2d3db",
		darkGrayishBlue: "#9394a5",
		veryDarkGrayishBlue: "#484b6a",
	},
	dark: {
		veryDarkBlue: "#161722",
		veryDarkDesaturatedBlue: "#25273c",
		lightGrayishBlue: "#cacde8",
		lightGrayishBlue_hover: "#e4e5f1",
		darkGrayishBlue: "#777a92",
		veryDarkGrayishBlue: {
			1: "#4d5066",
			2: "#393a4c",
		},
	},
};

const font = {
	family: `'Josefin Sans', sans-serif`,
	weight: {
		normal: 400,
		bold: 700,
	},
	size: {
		18: "18px",
	},
};

const bg = {
	darkDesktop: "todo-app/images/bg-desktop-dark.jpg",
	lightDesktop: "todo-app/images/bg-desktop-dark.jpg",
};

const theme = extendTheme({
	styles,
	components,
	colors,
	font,
	bg,
});

export default theme;
