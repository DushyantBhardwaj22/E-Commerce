import { datoCMSClient } from "./datoCms";

import ProductsPage from "./Productspage.js"

export async function getStaticPaths() {
  const response = await datoCMSClient.items.all({
    filter: { type: "product" },
    fields: "slug",
  });
  const products = response.data;

  const paths = products.map((product) => ({
    params: { slug: product.slug },
  }));

  return { paths, fallback: false };
}

export async function getStaticProps({ params }) {
  const response = await datoCMSClient.items.find({
    filter: { type: "product", fields: { slug: { eq: params.slug } } },
    fields: "title, price, description, images",
  });
  const product = response.data;

  return {
    props: {
      product,
    },
  };
}
export default function ProductPage({ product }) {
    return (
      <div>
        <h1>{product.title}</h1>
        <p>{product.price}</p>
        <p>{product.description}</p>
        {product.images.map((image) => (
          <img src={image.url} key={image.id} />
        ))}
      </div>
    );
  }
  
  