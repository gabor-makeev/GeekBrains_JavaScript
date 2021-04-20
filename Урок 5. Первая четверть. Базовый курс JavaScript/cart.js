let catalog = {
    products: [
        {
            name: 'T-shirt',
            itemId: '#000',
            price: 7.99,
        },
        {
            name: 'Pants',
            itemId: '#001',
            price: 9.99,
        },
        {
            name: 'Jacket',
            itemId: '#002',
            price: 39.99,
        },
        {
            name: 'Socks',
            itemId: '#003',
            price: 1.99,
        },
        {
            name: 'Hat',
            itemId: '#004',
            price: 14.99,
        },
        {
            name: 'Glasses',
            itemId: '#005',
            price: 3.99,
        }
    ],
}

let shoppingCart = {
    cartContent: [
        {
            itemId: '#004',
            quantity: 3,
        },
        {
            itemId: '#001',
            quantity: 2,
        },
        {
            itemId: '#005',
            quantity: 3,
        },
        {
            itemId: '#003',
            quantity: 2,
        },
    ],

    totalPrice() {
        let sum = 0;
        for (let i = 0; i < this.cartContent.length; i++) {
            for (let j = 0; j < catalog.products.length; j++) {
                if (this.cartContent[i].itemId === catalog.products[j].itemId) {
                    sum += this.cartContent[i].quantity * catalog.products[j].price;
                }
            }
        }
        return sum;
    },
}

// tasks 3 - 3.2

let cartHTML = {
    settings: {
        width: '500px',
        height: '500px',
        border: '1px solid black',
        margin: '0 auto',
        display: 'flex',
        ['flex-wrap']: 'wrap',
        ['justify-content']: 'space-evenly',
    },
    cartBlock: document.querySelector('.cart-block'),
    style() {
        for (const prop in cartHTML.settings) {
            this.cartBlock.style[prop] = cartHTML.settings[prop];
        }
    },
    fill() {
        let content = '';
        if (shoppingCart.cartContent.length === 0)
            content += `<p>Корзина пуста</p>`;
        else {
            for (let i = 0; i < shoppingCart.cartContent.length; i++) {
                for (let j = 0; j < catalog.products.length; j++) {
                    if (shoppingCart.cartContent[i].itemId === catalog.products[j].itemId) {
                        content += `<div style="width: ${100 / 3}%; height: 200px; border: 1px solid black; display: flex; align-items: center; flex-direction: column;">
                                    <h3>${catalog.products[j].name}</h3>
                                    <ul>
                                        <li>Стоимость: $${catalog.products[j].price}</li>
                                        <li>Количество: ${shoppingCart.cartContent[i].quantity}</li>
                                    </ul>
                                </div>`;
                    }
                }
            }
            content += `<p>В корзине ${shoppingCart.cartContent.length} товара(ов) на сумму $${shoppingCart.totalPrice()}.</p>`
        }
        this.cartBlock.innerHTML = content;
        return this.cartBlock;
    },
    initCart() {
        cartHTML.style();
        cartHTML.fill();
    }
}

// for empty cart testing
// shoppingCart.cartContent = [];

cartHTML.initCart();