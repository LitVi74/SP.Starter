// import { gsap } from 'gsap';

// import { ScrollToPlugin } from 'gsap/ScrollToPlugin.js';
// gsap.registerPlugin(ScrollToPlugin);

// global.gsap = gsap;

// gsap.defaults({
// 	overwrite: 'auto',
// });

class ProjectApp {
	constructor() {
		this.env = require('./utils/env').default;
		this.utils = require('./utils/utils').default;
		this.classes = {
			// Signal: require('./classes/Signal').default,
			HeaderActive: require('./classes/HeaderActions').default,
			BasketActive: require('./classes/BasketAction').default,
		};
		this.components = {
			header: require('./components/header').default,
			basket: require('./components/basket').default,
		};
		this.helpers = {};
		this.modules = {};
		document.addEventListener('DOMContentLoaded', () => {
			document.documentElement.classList.remove('_loading');
		});
	}
}

global.ProjectApp = new ProjectApp();
global.ProjectApp.components.header();
global.ProjectApp.components.basket();

if (module.hot) {
	module.hot.accept();
}
