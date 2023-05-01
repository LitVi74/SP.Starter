import HeaderActions from '../classes/HeaderActions';

function headerAction() {
	const header = document.querySelector('.header');

	const HeaderAct = new HeaderActions();
	HeaderAct.header = header;

	const menuButton = header.querySelector('.header__menu-btn');

	menuButton.addEventListener('click', HeaderAct.handleMenuButtonClick);
	if (module.hot) {
		module.hot.dispose(() => {
			menuButton.removeEventListener('click', HeaderAct.handleMenuButtonClick);
		});
	}
}

export default headerAction;
