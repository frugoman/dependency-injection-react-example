export default class CacheWithRemoteFallbackProductsRepository {
    cache
    remote

    constructor(cache, remote) {
        this.cache = cache
        this.remote = remote
    }

    async getAll() {
        const cache = await this.cache.getAll()
        if (cache && cache.length > 0) {
            return cache
        }
        const remoteProducts = await this.remote.getAll()
        remoteProducts.forEach(this.cache.create)
        return remoteProducts
    }

    async create(product) {
        const newProduct = await this.remote.create(product)
        return this.cache.create(newProduct)
    }
}