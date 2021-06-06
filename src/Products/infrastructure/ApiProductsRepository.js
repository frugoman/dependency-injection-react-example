export default class ApiProductsRepository {

    getAll() {
        // Call API
        return Promise.resolve([
            {
                id: '1',
                name: 'Frying Pan'
            },
            {
                id: '2',
                name: 'Nice Shoes'
            },
            {
                id: '3',
                name: 'Cool Hammer'
            }
        ])
    }

    create(product) {
        // Call API
        product.id = Math.random().toString(36).substring(7)
        return Promise.resolve(product)
    }
}