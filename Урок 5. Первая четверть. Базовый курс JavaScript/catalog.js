let products = [
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
    ]

function displayCatalog() {
    let catalogSettings = {
        width: '1000px',
        border: '1px solid saddlebrown',
        display: 'flex',
        ['flex-wrap']: 'wrap',
        ['justify-content']: 'space-evenly',
        ['margin']: '0 auto',
        gap: '20px',
    }

    let catalog = document.getElementById('catalog');
    for (const prop in catalogSettings) {
        catalog.style[prop] = catalogSettings[prop];
    }

    let generatedCatalog = '';

    for (const item in products) {
        generatedCatalog += `<div style="width: 20%; height: 200px; display: flex; flex-direction: column; align-items: center; border: 1px solid black;">
                              <h3>${products[item].name}</h3>
                              <ul>
                                  <li>ID: ${products[item].itemId}</li>
                                  <li>Цена: $${products[item].price}</li>
                              </ul>
                          </div>`
    }

    catalog.innerHTML = generatedCatalog;
    return catalog;
}

displayCatalog();