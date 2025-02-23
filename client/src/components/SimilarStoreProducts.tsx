import { useEffect, useState } from "react";
import SectionHeader from "./SectionHeader";
import Product, { ProductType } from "./Product";
import ProductWireframe from "./ProductWireframe";
import { fetchStoreProducts } from "../services/storeServices";

export default function SimilarStoreProducts({
  storeId,
  productId,
}: {
  storeId: string;
  productId: string;
}) {
  const [similarSellerProducts, setSimilarSellerProducts] = useState<
    ProductType[]
  >([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getProduct() {
      setLoading(true);
      const data = await fetchStoreProducts(storeId);

      if (data.error) return setLoading(false);
      setSimilarSellerProducts(
        data
          .filter(
            (product: ProductType) =>
              product._id !== productId && product.isPublished,
          )
          .slice(0, 8),
      );
      setLoading(false);
    }
    getProduct();
  }, [productId, storeId]);

  if (similarSellerProducts.length)
    return (
      <section className="w-full">
        <SectionHeader title="More products from this seller" />
        <div className="scrollbar-hidden mt-4 flex w-full gap-4 overflow-x-auto">
          {loading
            ? Array(8)
                .fill("")
                .map((_, i) => <ProductWireframe key={i} fixedWidth />)
            : similarSellerProducts.map((product) => (
                <Product key={product.name} product={product} fixedWidth />
              ))}
        </div>
      </section>
    );
}
