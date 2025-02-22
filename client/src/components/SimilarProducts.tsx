import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import Product, { ProductType } from "./Product";
import { fetchSimilarProducts } from "../services/productServices";
import ProductWireframe from "./ProductWireframe";

export default function SimilarProducts({
  productCategories,
  productId,
}: {
  productCategories: string[];
  productId: string;
}) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProduct() {
      setLoading(true);
      const data = await fetchSimilarProducts(productCategories, productId);

      if (data.error) return setLoading(false);
      setProducts(data);
      setLoading(false);
    }
    getProduct();
  }, [productCategories, productId]);

  if (products.length)
    return (
      <section className="w-full">
        <SectionHeader title="Similar Products" />
        <div className="scrollbar-hidden mt-4 flex w-full gap-4 overflow-x-auto">
          {loading ? (
            <>
              <ProductWireframe />
              <ProductWireframe />
              <ProductWireframe />
              <ProductWireframe />
              <ProductWireframe />
              <ProductWireframe />
              <ProductWireframe />
              <ProductWireframe />
            </>
          ) : (
            products.map((product) => (
              <Product key={product.name} product={product} />
            ))
          )}
        </div>
      </section>
    );
}
