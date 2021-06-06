const productsKey = 'products'
export default class LocalStorageProductsRepository {

    getAll() {
        const value = localStorage.getItem(productsKey)
        const cached = JSON.parse(value) || []
        return Promise.resolve(cached)
    }
    
    create(product) {
        const value = localStorage.getItem(productsKey)
        const cached = JSON.parse(value) || []
        console.log(cached)
        cached.push(product)
        localStorage.setItem(productsKey, JSON.stringify(cached))
        return Promise.resolve(product)
    }
}