let catalog = {
    catalogBlock: null,
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

    render() {
        let generatedCatalog = '';
        for (const item in this.products) {
            generatedCatalog += `<div class="catalog-item">
                              <h3>${this.products[item].name}</h3>
                              <ul>
                                  <li>ID: ${this.products[item].itemId}</li>
                                  <li>Цена: $${this.products[item].price}</li>
                              </ul>
                          </div>`
        }

        this.catalogBlock.innerHTML = generatedCatalog;
        return catalog;
    },

    init() {
        this.catalogBlock = document.getElementById('catalog');
        this.render();

    }

}

catalog.init();