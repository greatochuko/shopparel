import { products } from "../pages/SearchPage";
import Product from "./Product";
import SectionHeader from "./SectionHeader";

export default function SimilarProducts() {
  return (
    <section>
      <SectionHeader title="Similar Products" />
      <div className="grid grid-cols-5 gap-4 mt-4 ">
        {products.slice(0, 5).map((product) => (
          <Product key={product.name} product={product} />
        ))}
      </div>
    </section>
  );
}
