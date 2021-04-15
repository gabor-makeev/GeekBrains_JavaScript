//first task

//version 1.0
// function showPrimeNumber (n, range) {
//     while (n <= range) {
//         let divider = 0;
//         for (let i = 1; i <= n; i++) {
//             if (n % i === 0) {
//                 divider++;
//             }
//         }
//         if (divider == 2) console.log(n);
//         n++;
//     }
// }
//
// showPrimeNumber(1, 100);

//version 2.0
function showPrimeNumber(n, range) {
    while (n <= range) {
        let prime = true;
        for (let i = 2; i < 100; i++) {
            if (i === n) continue;
            if (n % i === 0 || n === 1) {
                prime = false;
            }
        }
        if (prime === true) {
            console.log(n);
        }
        n++;
    }
}

console.log(`Простые числа от 1 до 100:`);
showPrimeNumber(1, 100);


//second task

// structure: Name, Quantity, Price
let shoppingCart = [
    ['T-shirt', 3, 7.99],
    ['Pants', 1, 9.99],
    ['Jacket', 1, 39.99],
    ['Socks', 2, 1.99]
];

function countBasketPrice (cart) {
    let price = 0;
    for (let i = 0; i < cart.length; i++) {
        price += cart[i][1] * cart[i][2];
    }
    console.log(`Цена всех товаров в корзине: $${price.toFixed(2)}`);
}

countBasketPrice(shoppingCart);

//third task

for (let i = 0; i < 10; console.log(i++)){}

//fourth task

for (let i = 1; i < 21; i++) {
    let pyramid = '';
    for (let j = 1; j <= i; j++){
        pyramid += 'x';
    }
    console.log(pyramid);
}