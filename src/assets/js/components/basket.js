import BasketAction from '../classes/BasketAction';

function basketAction() {
	const basket = document.querySelector('.basket');

	const Basket = new BasketAction();
	Basket.basket = basket;

	return Basket;
}

export default basketAction;
