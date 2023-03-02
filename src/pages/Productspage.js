export default function ProductsPage({ products }) {
    return (
      <div>
        {products.map((product) => (
          <div key={product.id}>
            <h2>{product.name}</h2>
            <p>{product.description}</p>
            <img src={product.image.url} alt={product.image.alt} />
            <p>Price: ${product.price}</p>
            <p>Inventory: {product.inventory}</p>
          </div>
        ))}
      </div>
    );
  }
  