import React, { useEffect, useState } from 'react'

export default function Products({ productsRepository }) {
    const [products, setProducts] = useState([])
    useEffect(() => {
        productsRepository
            .getAll()
            .then(setProducts)
    }, [productsRepository])
    return (
        <div>
            <ul>
                {products.map(p => <li key={p.id}>{p.name}</li>)}
            </ul>
        </div>
    )
}
