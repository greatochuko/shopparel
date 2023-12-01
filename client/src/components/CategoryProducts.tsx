import Product, { ProductType } from "./Product";

type CategoryProductsProps = {
  children: React.ReactNode;
  products: ProductType[];
};

export default function CategoryProducts({
  children,
  products,
}: CategoryProductsProps) {
  return (
    <div className="max-w-7xl w-[90%] mx-auto flex flex-col gap-4">
      {children}
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Product product={product} key={product.name} />
        ))}
      </div>
    </div>
  );
}
