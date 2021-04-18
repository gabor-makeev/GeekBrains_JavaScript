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
};

// tasks 3 - 3.2

let cart = {
    cartBlock: null,
    content: [
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

    fill() {
        let content = '';
        if (this.content.length === 0)
            content += `<p>Корзина пуста</p>`;
        else {
            for (let i = 0; i < this.content.length; i++) {
                for (let j = 0; j < catalog.products.length; j++) {
                    if (this.content[i].itemId === catalog.products[j].itemId) {
                        content += `<div class="cart-item">
                                    <h3>${catalog.products[j].name}</h3>
                                    <ul>
                                        <li>Стоимость: $${catalog.products[j].price}</li>
                                        <li>Количество: ${this.content[i].quantity}</li>
                                    </ul>
                                </div>`;
                    }
                }
            }
            content += `<p>В корзине ${this.content.length} товара(ов) на сумму $${this.totalPrice()}.</p>`
        }
        this.cartBlock.innerHTML = content;
        return this.cartBlock;
    },

    totalPrice() {
        let sum = 0;
        for (let i = 0; i < this.content.length; i++) {
            for (let j = 0; j < catalog.products.length; j++) {
                if (this.content[i].itemId === catalog.products[j].itemId) {
                    sum += this.content[i].quantity * catalog.products[j].price;
                }
            }
        }
        return sum;
    },

    init() {
        this.cartBlock = document.querySelector('.cart-block');
        this.fill();

    }
}

// for empty cart testing
// cart.content = [];

cart.init();