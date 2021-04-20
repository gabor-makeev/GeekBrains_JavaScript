// first task

function countNumber(number) {
    if (number < 0 || number > 999) {
        console.log('Введите число от 0 до 999');
        return {}
    }
    return {
        'Единицы': Math.floor(number % 10),
        'Десятки': Math.floor((number % 100) / 10),
        'Сотни': Math.floor(number / 100),
    }
}

// second task

let shoppingCart = {
    products: [
        {
            name: 'T-shirt',
            itemId: '#000',
            price: 7.99,
            quantity: 3,
        },
        {
            name: 'Pants',
            itemId: '#001',
            price: 9.99,
            quantity: 1,
        },
        {
            name: 'Jacket',
            itemId: '#002',
            price: 39.99,
            quantity: 1,
        },
        {
            name: 'Socks',
            itemId: '#003',
            price: 1.99,
            quantity: 2,
        }
    ],
    totalPrice() {
        return shoppingCart.products.reduce(
            (sum, currentItem) => sum + currentItem.price * currentItem.quantity, 0)
    },
}

// third task

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

let shoppingCart2 = {
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
    }
}