import Product, { ProductType } from "./Product";
import ProductWireframe from "./ProductWireframe";
import { useEffect, useState } from "react";
import { fetchProducts } from "../services/productServices";

type CategoryProductsProps = {
  children: React.ReactNode;
  category: string;
};

export default function CategoryProducts({
  children,
  category: gender,
}: CategoryProductsProps) {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [error, setError] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    async function getProducts() {
      setError("");
      setLoading(true);
      const data = await fetchProducts();

      if (data.error) {
        setError("There was an error fetching products");
        setLoading(false);
        return;
      }

      setProducts(
        [...data]
          .filter((product) => product.gender === gender)
          .sort(
            (a, b) =>
              new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
          )
          .slice(0, 4),
      );
      setLoading(false);
    }
    getProducts();
  }, [gender]);

  async function refreshProducts() {
    setError("");
    setLoading(true);
    const data = await fetchProducts();

    if (data.error) {
      setError(data.error);
      setLoading(true);
      return;
    }

    setProducts(
      [...data]
        .filter((product) => product.gender === gender)
        .sort(
          (a, b) =>
            new Date(b.createdAt).getTime() - new Date(a.createdAt).getTime(),
        )
        .slice(0, 8),
    );
    setLoading(false);
  }

  return (
    <div className="mx-auto flex w-[90%] max-w-6xl flex-col gap-4">
      {children}
      <div className="scrollbar-hidden flex w-full gap-4 overflow-x-auto sm:gap-6">
        {loading ? (
          Array(8)
            .fill("")
            .map((_, i) => <ProductWireframe key={i} fixedWidth />)
        ) : error ? (
          <p className="flex-center col-span-4 h-60 w-full flex-col text-sm sm:text-base">
            ❌{` ${error} `}❌
            <button
              onClick={refreshProducts}
              className="flex-center mt-4 gap-2 rounded-full bg-accent-blue-100 px-3 py-1 text-white ring-blue-400 duration-300 hover:bg-accent-blue-200 focus-visible:ring active:bg-accent-blue-300"
            >
              <svg
                height={16}
                width={16}
                viewBox="0 0 16 16"
                xmlns="http://www.w3.org/2000/svg"
                fill="#000000"
              >
                <g id="SVGRepo_bgCarrier" strokeWidth="0"></g>
                <g
                  id="SVGRepo_tracerCarrier"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                ></g>
                <g id="SVGRepo_iconCarrier">
                  {" "}
                  <path
                    fill="#fff"
                    d="M14.9547098,7.98576084 L15.0711,7.99552 C15.6179,8.07328 15.9981,8.57957 15.9204,9.12636 C15.6826,10.7983 14.9218,12.3522 13.747,13.5654 C12.5721,14.7785 11.0435,15.5888 9.37999,15.8801 C7.7165,16.1714 6.00349,15.9288 4.48631,15.187 C3.77335,14.8385 3.12082,14.3881 2.5472,13.8537 L1.70711,14.6938 C1.07714,15.3238 3.55271368e-15,14.8776 3.55271368e-15,13.9867 L3.55271368e-15,9.99998 L3.98673,9.99998 C4.87763,9.99998 5.3238,11.0771 4.69383,11.7071 L3.9626,12.4383 C4.38006,12.8181 4.85153,13.1394 5.36475,13.3903 C6.50264,13.9466 7.78739,14.1285 9.03501,13.9101 C10.2826,13.6916 11.4291,13.0839 12.3102,12.174 C13.1914,11.2641 13.762,10.0988 13.9403,8.84476 C14.0181,8.29798 14.5244,7.91776 15.0711,7.99552 L14.9547098,7.98576084 Z M11.5137,0.812976 C12.2279,1.16215 12.8814,1.61349 13.4558,2.14905 L14.2929,1.31193 C14.9229,0.681961 16,1.12813 16,2.01904 L16,6.00001 L12.019,6.00001 C11.1281,6.00001 10.6819,4.92287 11.3119,4.29291 L12.0404,3.56441 C11.6222,3.18346 11.1497,2.86125 10.6353,2.60973 C9.49736,2.05342 8.21261,1.87146 6.96499,2.08994 C5.71737,2.30841 4.57089,2.91611 3.68976,3.82599 C2.80862,4.73586 2.23802,5.90125 2.05969,7.15524 C1.98193,7.70202 1.47564,8.08224 0.928858,8.00448 C0.382075,7.92672 0.00185585,7.42043 0.0796146,6.87364 C0.31739,5.20166 1.07818,3.64782 2.25303,2.43465 C3.42788,1.22148 4.95652,0.411217 6.62001,0.119916 C8.2835,-0.171384 9.99651,0.0712178 11.5137,0.812976 Z"
                  ></path>{" "}
                </g>
              </svg>
              Retry
            </button>
          </p>
        ) : (
          products.map((product) => (
            <Product product={product} key={product.name} fixedWidth />
          ))
        )}
      </div>
    </div>
  );
}
