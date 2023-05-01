class HeaderActions {
	#header;
	#menu;
	constructor() {
		this.#header = undefined;
		this.#menu = undefined;
		this.isMenuactive = false;

		this.handleMenuButtonClick = this.handleMenuButtonClick.bind(this);
	}

	set header(newHeader) {
		this.#header = newHeader;
		this.menu = newHeader.querySelector('.menu');
	}

	handleMenuButtonClick(event) {
		if (this.isMenuactive) {
			event.currentTarget.classList.remove('header__menu-btn_active');
			this.menu?.classList.replace('menu_active', 'menu_nonactive');
			this.isMenuactive = false;
		} else {
			event.currentTarget.classList.add('header__menu-btn_active');
			this.menu?.classList.replace('menu_nonactive', 'menu_active');
			this.isMenuactive = true;
		}
	}
}

export default HeaderActions;
