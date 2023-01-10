const _ = require("lodash")
const plugin = require("tailwindcss/plugin")
const defaultTheme = require("tailwindcss/defaultTheme")

function font_size(min, max) {
	const scale = ((max - 16) / 1792) * 100

	return `clamp(${min / 16}rem, calc(1rem + ${scale}vw), ${max / 16}rem)`
}

module.exports = {
	content: [
		"./templates/**/*.html",
		"./templates/**/*.twig",
		"./src/scripts/**/*.js",
	],
	theme: {
		fontSize: {
			xs: "0.75rem", // 12
			sm: "0.875rem", // 14
			base: "1rem", // 16
			lg: "1.125rem", // 18
			xl: "1.25rem", // 20
			"2xl": "1.5rem", // 24
			"3xl": "2rem", // 32
			"4xl": "2.5rem", // 40
			"5xl": "3rem", // 48
			"6xl": "4", // 64
			"7xl": "4.5rem", // 72
			"8xl": "6rem", // 96
			"9xl": "8rem", // 128
		},
		letterSpacing: {
			tight: "-0.01em",
		},
		screens: {
			xs: "360px",
			sm: "480px",
			md: "768px",
			lg: "1024px",
			xl: "1280px",
			xxl: "1600px",
			xxxl: "1920px",

			// Max
			"max-xs": { max: "359px" },
			"max-sm": { max: "479px" },
			"max-md": { max: "767px" },
			"max-lg": { max: "1023px" },
			"max-xl": { max: "1279px" },
			"max-xxl": { max: "1599px" },
			"max-xxxl": { max: "1919px" },
		},
		transitionDuration: {
			DEFAULT: "300ms",
			150: "150ms",
			200: "200ms",
			500: "500ms",
			1000: "1000ms",
		},
		transitionTimingFunction: {
			DEFAULT: "cubic-bezier(0.4, 0, 0.2, 1)",
			linear: "linear",
			in: "cubic-bezier(0.4, 0, 1, 1)",
			out: "cubic-bezier(0, 0, 0.2, 1)",
			"in-out": "cubic-bezier(0.4, 0, 0.2, 1)",
		},
		extend: {
			borderWidth: {
				3: "3px",
			},
			colors: {
				transparent: "transparent",
				current: "currentColor",
				white: "#ffffff",
				black: "#1e1e1e",
			},
			fontFamily: {
				sans: [...defaultTheme.fontFamily.sans],
				serif: [...defaultTheme.fontFamily.serif],
			},
			lineHeight: {
				0: "0",
			},
			maxHeight: {
				0: "0",
			},
			rotate: {
				5: "5deg",
			},
			gridColumn: {
				"span-13": "span 13 / span 13",
				"span-14": "span 14 / span 14",
				"span-15": "span 15 / span 15",
				"span-16": "span 16 / span 16",
				"span-17": "span 17 / span 17",
				"span-18": "span 18 / span 18",
				"span-19": "span 19 / span 19",
				"span-20": "span 20 / span 20",
				"span-21": "span 21 / span 21",
				"span-22": "span 22 / span 22",
				"span-23": "span 23 / span 23",
				"span-24": "span 24 / span 24",
			},
			gridColumnEnd: {
				13: "13",
				14: "14",
				15: "15",
				16: "16",
				17: "17",
				18: "18",
				19: "19",
				20: "20",
				21: "21",
				22: "22",
				23: "23",
				24: "24",
			},
			gridColumnStart: {
				13: "13",
				14: "14",
				15: "15",
				16: "16",
				17: "17",
				18: "18",
				19: "19",
				20: "20",
				21: "21",
				22: "22",
				23: "23",
				24: "24",
			},
			gridTemplateColumns: {
				22: "repeat(22, minmax(0, 1fr))",
				24: "repeat(24, minmax(0, 1fr))",
			},
			spacing: {
				// Calendar
				"1/7": "14.2857143%",
				"2/7": "28.5714286%",
				"3/7": "42.8571429%",
				"4/7": "57.1428571%",
				"5/7": "71.4285714%",
				"6/7": "85.7142857%",
				120: "30rem",
				144: "36rem",
				"-px": "-1px",
			},
		},
	},
	corePlugins: {
		container: false,
		clear: false,
		float: false,
		outline: false,
	},
	plugins: [
		require("@tailwindcss/forms")({
			strategy: "class",
		}),
		require("@tailwindcss/line-clamp"),

		// Hocus
		plugin(function ({ addVariant, e }) {
			addVariant("hocus", ["&:hover", "&:focus"])
			addVariant("group-hocus", [".group:hover &", ".group:focus &"])
		}),

		/*
			Responsive type
			@min: @max * .666666 (rems)
			@val: @max / 1792 * 100 (viewport widths)
			@max: scale value (rems)
		*/
		plugin(function ({ addUtilities }) {
			const typeUtilities = {
				".type-2xs": {
					fontSize: font_size(10, 12), // Small Tag
				},

				".type-xs": {
					fontSize: font_size(12, 16), // Tiny
				},

				".type-sm": {
					fontSize: font_size(14, 18), // Small
				},

				".type-base": {
					fontSize: font_size(14, 20), // P2
				},

				".type-lg": {
					fontSize: font_size(16, 24), // P1
				},

				".type-xl": {
					fontSize: font_size(20, 32), // H4
				},

				".type-2xl": {
					fontSize: font_size(24, 40), // H3
				},

				".type-3xl": {
					fontSize: font_size(32, 48), // H2
				},

				".type-4xl": {
					fontSize: font_size(42, 64), // H1
				},

				".type-5xl": {
					fontSize: font_size(48, 72),
				},

				".type-6xl": {
					fontSize: font_size(64, 96),
				},

				".type-7xl": {
					fontSize: font_size(74, 112),
				},

				".type-9xl": {
					fontSize: font_size(84, 144),
				},
			}

			addUtilities(typeUtilities, ["responsive"])
		}),

		// Flood utilities
		plugin(function ({ addUtilities, config }) {
			const containerPadding = {
				min: "1.5rem",
				xs: "1.5rem",
				sm: "2rem",
				md: "3rem",
				lg: "4rem",
				xl: "5rem",
				xxl: "8rem",
				xxxl: "12rem",
			}

			const floodUtilities = _.map(
				containerPadding,
				(padding, screen) => {
					let width = config(`theme.screens.${screen}`)

					return {
						[`@media (min-width: ${width})`]: {
							".container": {
								"padding-left": padding,
								"padding-right": padding,
							},
							".padding-l": {
								"padding-left": padding,
							},
							".padding-r": {
								"padding-right": padding,
							},
							".flood-r": {
								"margin-right": `-${padding}`,
							},
							".flood-l": {
								"margin-left": `-${padding}`,
							},
							".bordered": {
								"padding-left": `calc(${padding} - 2rem)`,
								"padding-right": `calc(${padding} - 2rem)`,
							},
						},
					}
				}
			)

			floodUtilities.unshift({
				".container": {
					"padding-left": containerPadding.min,
					"padding-right": containerPadding.min,
				},
				".padding-l": {
					"padding-left": containerPadding.min,
				},
				".padding-r": {
					"padding-right": containerPadding.min,
				},
				".flood-r": {
					"margin-right": `-${containerPadding.min}`,
				},
				".flood-l": {
					"margin-left": `-${containerPadding.min}`,
				},
			})

			addUtilities([...floodUtilities])
		}),

		// AlpineJS Breakpoints
		// Flood utilities
		plugin(function ({ addBase, config }) {
			const minBreakpoints = Object.fromEntries(
				Object.entries(config("theme.screens")).filter(
					([key, value]) => !key.includes("max")
				)
			)

			const breakpoints = _.map(minBreakpoints, (label, value) => {
				return {
					[`@media (min-width: ${label})`]: {
						"html:root": {
							"--breakpoint": `${value}`,
						},
					},
				}
			})

			breakpoints.unshift({
				":root": {
					"--breakpoint": "unset",
				},
			})

			addBase([...breakpoints])
		}),
	],
}
