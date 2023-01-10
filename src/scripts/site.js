// Chose one of the starting points to import

// ==============================================
// Postcss + tailwind
// ==============================================
import "../styles/css/site.css"

// Vendor imports
import { Fancybox } from "@fancyapps/ui"
import Alpine from "alpinejs"
import collapse from "@alpinejs/collapse"
import focus from "@alpinejs/focus"
import intersect from "@alpinejs/intersect"
import breakpoint from "alpinejs-breakpoints"
Alpine.plugin(intersect)
Alpine.plugin(breakpoint)
Alpine.plugin(collapse)
Alpine.plugin(focus)
window.Alpine = Alpine
window.AlpineBreakpointPluginBreakpointsList = [
	"xs",
	"sm",
	"md",
	"lg",
	"xl",
	"xxl",
	"xxxl",
]
window.Alpine.start()

import "lazysizes/plugins/respimg/ls.respimg"
import "lazysizes/plugins/parent-fit/ls.parent-fit"
import "lazysizes"
import "lazysizes/plugins/object-fit/ls.object-fit"

// Module imports
import "./modules/svgIconSprite"
// import "./modules/carousel"

// ==============================================
// SCSS
// ==============================================
// import "../styles/scss/site.scss"

// import "./modules/svgIconSprite"
// import "./modules/accessibility-toggles"
// import "./modules/accordion"
// import "./modules/carousel"
// import "./modules/datatable"
// // import "./modules/filters"
// import "./modules/google-maps"
// import "./modules/patches"
// import "./modules/scroller"
// import "./modules/toggler"
// import "./modules/video-fit"
