

let kitchenProducts = [
	{
		type: 'grater',
		price: 10
	},
	{
		type: 'pastry-bag',
		price: 25
	},
	{
		type: 'scale',
		price: 5
	},
	{
		type: 'whisk',
		price: 15
	}
];

let devicesProducts = [
	{
		type: 'desktop',
		price: [100,1000]
	},
	{
		type: 'laptop',
		price: [50,1500]
	},
	{
		type: 'smartphone',
		price: [80,2000]
	},
	{
		type: 'tablet',
		price: [20,1300]
	}
];

let cosmeticsProducts = [
	{
		type: 'blush',
		price: 100
	},
	{
		type: 'eyeshadow',
		price: 50
	},
	{
		type: 'lipstick',
		price: 80
	},
	{
		type: 'nail-polish',
		price: 200
	},
	{
		type: 'perfume',
		price: 300,
	}
];


// 


let Kitchen = {
    category: 'Kitchen'
};

let Devices = {
    category: 'Devices'
};

let Cosmetics = {
    category: 'Cosmetics'
};


// 


let modProducts = [];

let getProto = (arr, proto) => {
    modProducts = arr
    .map(products => {
        let newProducts = Object.create(proto);
        for(let key in products) {
            newProducts[key] = products[key];
        }
        return newProducts;
    })
    return modProducts
};

arr = [
    getProto(kitchenProducts, Kitchen),
    getProto(devicesProducts, Devices),
    getProto(cosmeticsProducts, Cosmetics)
];

let renderArr = [];
let newArr = [];

arr.forEach(element => {
    element.map(obj => {
        renderArr.push(`<div class='category__box'>
                            <div class='category__img'>
                                <img src='./img/${obj.type}.svg' alt=''>
                            </div>
                            <div class='category__title'>
                                <p class='title__name'>Name:
                                    <span>${obj.type}</span>
                                </p>
                                <p class='title__price'>Price:
                                    <span>$${Array.isArray(obj.price) === true ? String(obj.price[0])+-+String(obj.price[1]) : obj.price}</span>
                                </p>
                            </div>
						</div>`)
    })
    document.write(`
	<div class='wrapper'>
		<div class='category__main_title'><p>
				<h2>Category: ${element[0].category}</h2>
			</p></div>
		<div class='category'>${renderArr.join('')}</div>
	</div>
	`);
    renderArr.splice(0);
});



