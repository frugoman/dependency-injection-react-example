import ApiProductsRepository from "../Products/infrastructure/ApiProductsRepository";
import CacheWithRemoteFallbackProductsRepository from "../Products/infrastructure/CacheWithRemoteFallbackProductsRepository";
import LocalStorageProductsRepository from "../Products/infrastructure/LocalStorageProductsRepository";


import Products from "../Products/Presentation/Products";

export default function App() {
  const repository = new CacheWithRemoteFallbackProductsRepository(new LocalStorageProductsRepository(), new ApiProductsRepository()
  )
  return (
    <div>
      <Products productsRepository={repository} />
    </div>
  );
}
