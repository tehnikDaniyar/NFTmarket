import * as flsFunctions from "./modules/functions.js";
// import Swiper from "swiper";
// import {
// 	Navigation,
// 	EffectFade,
// 	Pagination,
// 	Thumbs,
// 	Controller,
// 	FreeMode,
// 	Scrollbar,
// 	A11y,
// 	Mousewheel
// } from "swiper";
import AOS from "aos";

flsFunctions.isWebp();

import { burger } from "./modules/burger.js";
burger();

import { sliderAuctions } from "./modules/auctions.js";
sliderAuctions();