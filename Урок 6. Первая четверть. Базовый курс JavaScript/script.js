let catalog = {
    catalogBlock: null,
    generateItemLayout(item) {
        return `<div>
                    <h3>${item.name}</h3>
                    <div>Price: $${item.price}</div>
                    <div>Stock: ${item.stock}</div>
                    <button data-purchase-id="${item.itemId}">Buy</button>
                </div>`
    },

    items: [
        {
            name: 'T-shirt',
            itemId: '#000',
            price: 7.99,
            stock: 10,
        },
        {
            name: 'Pants',
            itemId: '#001',
            price: 9.99,
            stock: 10,
        },
        {
            name: 'Jacket',
            itemId: '#002',
            price: 39.99,
            stock: 10,
        },
        {
            name: 'Socks',
            itemId: '#003',
            price: 1.99,
            stock: 10,
        },
        {
            name: 'Hat',
            itemId: '#004',
            price: 14.99,
            stock: 10,
        },
        {
            name: 'Glasses',
            itemId: '#005',
            price: 3.99,
            stock: 10,
        }
    ],

    addToCart(event) {
        if (event.target.tagName === 'BUTTON') {
            this.items.forEach(item => {
                if (event.target.dataset.purchaseId === item.itemId) {
                    cart.fill(item);
                    cart.render();
                }
            })
        }
    },

    render() {
        this.catalogBlock.innerHTML = `<h2>Каталог</h2>`;
        this.items.forEach(item =>
            this.catalogBlock.
                insertAdjacentHTML('beforeend', this.generateItemLayout(item)));
    },

    init() {
        this.catalogBlock = document.getElementById('catalog-block');
        document.querySelector(`#catalog-block`)
            .addEventListener('click', event => {
                this.addToCart(event);
            })

        this.render();
    },
}

let cart = {
    cartBlock: null,
    products: [],

    generateProductLayout(product) {
        return `<div>
                    <h3>${product.name}</h3>
                    <div>Price: $${product.price}</div>
                    <div>Quantity: ${product.quantity}</div>
                    <button data-delete-id="${[product.itemId]}">Delete</button>
                </div>`
    },

    fill(item) {
        for (let product in this.products) {
            if (this.products[product].itemId === item.itemId) {
                if (this.products[product].quantity < item.stock) {
                    this.products[product].quantity++;
                    return;
                } else {
                    return;
                }
            }
        }
        this.products.push({name: item.name, itemId: item.itemId, price: item.price, quantity: 1});
    },

    remove(event) {
        if (event.target.tagName === 'BUTTON') {
            for (let product in this.products) {
                if (event.target.dataset.deleteId === this.products[product].itemId) {
                    if (this.products[product].quantity > 1) {
                        this.products[product].quantity--;
                    } else {
                        this.products.splice(product, 1);
                    }
                    this.render();
                }
            }
        }
    },

    getTotalCost() {
            return this.products.reduce(
                (sum, product) => sum + product.price * product.quantity, 0).toFixed(2);
    },

    generateTotalCostLayout(cartCost) {
        if (cartCost > 0) {
            this.cartBlock.insertAdjacentHTML('beforeend', `<p>В корзине ${this.products.length} товара(ов) на сумму $${cartCost}</p>`);
        } else {
            this.cartBlock.insertAdjacentHTML('beforeend', `<p>Корзина пуста</p>`);
        }
    },

    render() {
        this.cartBlock.innerHTML = `<h2>Корзина</h2>`;
        this.products.forEach(item =>
            this.cartBlock.
                insertAdjacentHTML('beforeend', this.generateProductLayout(item)));
        this.generateTotalCostLayout(this.getTotalCost());
    },

    init() {
        this.cartBlock = document.getElementById('cart-block');
        document.querySelector(`#cart-block`)
            .addEventListener('click', event => {
                this.remove(event);
            })

        this.render();
    },
}

catalog.init();
cart.init();

