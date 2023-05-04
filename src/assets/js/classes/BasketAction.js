class BasketAction {
	#basket;
	#goods;
	#subSum;
	#totalSum;
	#tax = 100;
	#shipping = 150;

	constructor() {
		this.basketGoods = [
			{
				id: 'goods_1',
				name: 'Amet minim mollit non deserunt ullamco est sit',
				sprite: 'jacket',
				price: 525,
				count: 1,
			},
			{
				id: 'goods_2',
				name: 'Amet minim mollit non',
				sprite: 'sneakers',
				price: 525,
				count: 1,
			},
		];
	}

	set basket(newBasket) {
		this.#basket = newBasket;
		this.#goods = newBasket.querySelectorAll('.goods');
		this.#subSum = newBasket.querySelector('#sub-sum');
		this.#totalSum = newBasket.querySelector('#total-sum');

		this.addListeners();
	}

	addListeners() {
		Array.from(this.#goods).forEach(goods => {
			const plus = goods.querySelector('.i-number--plus');
			const minus = goods.querySelector('.i-number--minus');
			const deleteBtm = goods.querySelector('.goods__delete-btn');

			plus.addEventListener('click', this.countPlus.bind(this, goods));
			minus.addEventListener('click', this.countMinus.bind(this, goods));
			deleteBtm.addEventListener('click', this.deleteGoods.bind(this, goods));

			if (module.hot) {
				module.hot.dispose(() => {
					goods.querySelector('.i-number').value = 1;
					plus.removeEventListener('click', this.countPlus.bind(this, goods));
					minus.removeEventListener('click', this.countMinus.bind(this, goods));
					deleteBtm.removeEventListener('click', this.deleteGoods.bind(this, goods));
				});
			}
		});
	}

	countPlus(goodsElement) {
		const goodsId = goodsElement.getAttribute('id');
		const input = goodsElement.querySelector('.i-number');
		input.value = +input.value + 1;

		this.basketGoods.find(g => g.id === goodsId).count += 1;

		this.countGoodsSum(goodsElement);
		this.countTotalSum();
	}

	countMinus(goodsElement) {
		const goodsId = goodsElement.getAttribute('id');
		const input = goodsElement.querySelector('.i-number');
		input.value = +input.value - 1;

		this.basketGoods.find(g => g.id === goodsId).count -= 1;

		this.countGoodsSum(goodsElement);
		this.countTotalSum();
	}

	countGoodsSum(goodsElement) {
		const goodsId = goodsElement.getAttribute('id');
		const priseElement = goodsElement.querySelector('.goods__price--sum');
		const goods = this.basketGoods.find(g => g.id === goodsId);

		priseElement.innerText = '$' + goods.count * goods.price;
	}

	countTotalSum() {
		const subSum = this.basketGoods.reduce((sum, goods) => sum + goods.count * goods.price, 0);
		this.#subSum.innerText = '$' + subSum;
		this.#totalSum.innerText = '$' + (subSum + this.#tax + this.#shipping);
	}

	deleteGoods(goodsElement) {
		const goodsId = goodsElement.getAttribute('id');

		this.basketGoods = this.basketGoods.filter(g => g.id !== goodsId);
		this.countTotalSum();

		goodsElement.parentNode.removeChild(goodsElement);
	}
}

export default BasketAction;
