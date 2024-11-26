import AdminReviewsHeader from "../components/AdminReviewsHeader";
import { useEffect, useState } from "react";
import { fetchStoreProducts } from "../services/storeServices";
import {
  Link,
  useLocation,
  useNavigate,
  useOutletContext,
  useParams,
} from "react-router-dom";
import { StoreType } from "../components/AdminPageLayout";
import AdminReview from "../components/AdminReview";
import { ProductType } from "../components/Product";
import Rating from "../components/Rating";
import { fetchProduct } from "../services/productServices";
import LoadingIndicator from "../components/LoadingIndicator";
import { ReviewType } from "../components/Review";

export default function AdminReviewsPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [reviews, setReviews] = useState<ReviewType[] | null>(null);
  const [loading, setLoading] = useState(true);
  const { pathname } = useLocation();
  const { productId } = useParams();
  const { store } = useOutletContext<{ store: StoreType }>();
  const navigate = useNavigate();

  useEffect(() => {
    document.title = `Shopparel-Admin: Reviews`;
    async function getStoreProducts() {
      setLoading(true);
      const data = await fetchStoreProducts(store?._id);

      if (data.error) return;
      setProducts(
        data.filter((product: ProductType) => product.isPublished === true)
      );
      setLoading(false);
    }

    async function getReviews() {
      setLoading(true);
      const data = await fetchProduct(productId as string);
      if (data.error) return;
      setReviews(data.reviews);
      setLoading(false);
    }

    if (store?._id) {
      pathname === "/admin/reviews" ? getStoreProducts() : getReviews();
    }

    return () => {
      setProducts([]);
      setReviews(null);
    };
  }, [store?._id, productId, pathname]);

  return (
    <div className="flex flex-col flex-1 gap-4 w-[90%] max-w-6xl mx-auto py-6 text-zinc-800">
      <AdminReviewsHeader />
      {pathname === "/admin/reviews" ? (
        <ul
          key={1}
          className="flex flex-col h-full gap-2 p-4 bg-white rounded-md"
        >
          {loading ? (
            <div className="flex-1 flex-center">
              <LoadingIndicator className="fill-accent-blue-100" />
            </div>
          ) : (
            products.map((product) => (
              <li key={product._id}>
                <Link
                  to={`/admin/reviews/${product._id}`}
                  className="flex gap-4 p-2 duration-300 bg-white rounded-md cursor-pointer hover:bg-zinc-100 group"
                >
                  <img
                    src={product.images[0]}
                    alt=""
                    className="object-contain w-20 h-20 duration-300 rounded-md sm:w-24 sm:h-24 bg-zinc-100 group-hover:bg-zinc-200"
                  />
                  <div className="flex flex-col justify-between flex-1 gap-2">
                    <h3 className="text-sm sm:text-base">{product.name}</h3>
                    <p className="text-xs sm:text-sm text-zinc-500 line-clamp-2">
                      {product.description}
                    </p>
                    <div className="flex items-start gap-2 text-xs whitespace-nowrap sm:text-s">
                      <Rating rating={product.rating} />{" "}
                      <span>{product.reviews.length} Reviews</span>
                    </div>
                  </div>
                  <span className="flex-center">
                    <svg
                      width={20}
                      height={20}
                      viewBox="0 0 24 24"
                      fill="none"
                      xmlns="http://www.w3.org/2000/svg"
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
                          fillRule="evenodd"
                          clipRule="evenodd"
                          d="M8.79289 6.29289C9.18342 5.90237 9.81658 5.90237 10.2071 6.29289L15.2071 11.2929C15.5976 11.6834 15.5976 12.3166 15.2071 12.7071L10.2071 17.7071C9.81658 18.0976 9.18342 18.0976 8.79289 17.7071C8.40237 17.3166 8.40237 16.6834 8.79289 16.2929L13.0858 12L8.79289 7.70711C8.40237 7.31658 8.40237 6.68342 8.79289 6.29289Z"
                          fill="#000000"
                        ></path>{" "}
                      </g>
                    </svg>
                  </span>
                </Link>
              </li>
            ))
          )}
        </ul>
      ) : (
        <ul className="flex flex-col h-full gap-2 bg-white rounded-md">
          <header className="flex items-center justify-between p-4 py-2 border-b">
            <button
              onClick={() => navigate("/admin/reviews")}
              className="p-2 duration-300 rounded-md w-fit flex-center hover:bg-zinc-100"
            >
              <span>
                <svg
                  height={20}
                  width={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.2071 6.29289C15.5976 6.68342 15.5976 7.31658 15.2071 7.70711L10.9142 12L15.2071 16.2929C15.5976 16.6834 15.5976 17.3166 15.2071 17.7071C14.8166 18.0976 14.1834 18.0976 13.7929 17.7071L8.79289 12.7071C8.40237 12.3166 8.40237 11.6834 8.79289 11.2929L13.7929 6.29289C14.1834 5.90237 14.8166 5.90237 15.2071 6.29289Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
              </span>
              Back
            </button>
            <div className="flex-center">
              <span className="mr-2">
                1 - {(reviews?.length as number) > 20 ? 20 : reviews?.length} of{" "}
                {reviews?.length}
              </span>
              <button className="p-[2px] hover:bg-zinc-200 duration-300 rounded-md active:bg-zinc-300 focus-visible:bg-zinc-200">
                <svg
                  height={20}
                  width={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M15.2071 6.29289C15.5976 6.68342 15.5976 7.31658 15.2071 7.70711L10.9142 12L15.2071 16.2929C15.5976 16.6834 15.5976 17.3166 15.2071 17.7071C14.8166 18.0976 14.1834 18.0976 13.7929 17.7071L8.79289 12.7071C8.40237 12.3166 8.40237 11.6834 8.79289 11.2929L13.7929 6.29289C14.1834 5.90237 14.8166 5.90237 15.2071 6.29289Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
              </button>
              <button className="p-[2px] hover:bg-zinc-200 duration-300 rounded-md active:bg-zinc-300 focus-visible:bg-zinc-200">
                <svg
                  width={20}
                  height={20}
                  viewBox="0 0 24 24"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
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
                      fillRule="evenodd"
                      clipRule="evenodd"
                      d="M8.79289 6.29289C9.18342 5.90237 9.81658 5.90237 10.2071 6.29289L15.2071 11.2929C15.5976 11.6834 15.5976 12.3166 15.2071 12.7071L10.2071 17.7071C9.81658 18.0976 9.18342 18.0976 8.79289 17.7071C8.40237 17.3166 8.40237 16.6834 8.79289 16.2929L13.0858 12L8.79289 7.70711C8.40237 7.31658 8.40237 6.68342 8.79289 6.29289Z"
                      fill="#000000"
                    ></path>{" "}
                  </g>
                </svg>
              </button>
            </div>
          </header>
          {loading ? (
            <div className="flex-1 flex-center">
              <LoadingIndicator className="fill-accent-blue-100" />
            </div>
          ) : reviews?.length ? (
            reviews.map((review) => (
              <AdminReview key={review._id} review={review} />
            ))
          ) : reviews ? (
            <p className="w-full h-full flex-center">
              There are no reviews for this product
            </p>
          ) : null}
        </ul>
      )}
    </div>
  );
}
