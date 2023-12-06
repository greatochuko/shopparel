import ProductDetailImages from "../components/ProductDetailImages";
import ProductConfiguration from "../components/ProductConfiguration";
import SectionHeader from "../components/SectionHeader";
import Review from "../components/Review";
import SimilarProducts from "../components/SimilarProducts";

const product = {
  _id: "123abc",
  name: "Plaid Flannel Shirt",
  imgUrl: "/men-product-4.png",
  images: [
    "/men-product-4.png",
    "/men-product-3.png",
    "/men-product-2.png",
    "/men-product-1.png",
  ],
  brand: "Nike",
  price: 299,
  sizes: ["l", "m", "xl", "s", "xs"],
  categories: ["V-Neck T-Shirts"],
  colors: ["black", "red", "blue", "orange"],
  rating: 4,
  reviews: [
    {
      user: {
        fullName: "John Doe",
        imgUrl: "/feedback-user-image-1.jpg",
        email: "john@gmail.com",
        _id: "123abc",
      },
      date: "November 12, 2023",
      rating: 3,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat corrupti obcaecati facilis odit vel dignissimos porro exercitationem aliquam molestiae temporibus impedit rem illum cupiditate dolorem harum ipsum unde magni!",
    },
    {
      user: {
        fullName: "John Doe",
        imgUrl: "/feedback-user-image-2.jpg",
        email: "john@gmail.com",
        _id: "123abcd",
      },
      date: "November 23, 2023",
      rating: 5,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat corrupti obcaecati facilis odit vel dignissimos porro exercitationem aliquam molestiae temporibus impedit rem illum cupiditate dolorem harum ipsum unde magni!",
    },
    {
      user: {
        fullName: "John Doe",
        imgUrl: "/feedback-user-image-3.jpg",
        email: "john@gmail.com",
        _id: "123abce",
      },
      date: "August 18, 2023",
      rating: 4,
      review:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat corrupti obcaecati facilis odit vel dignissimos porro exercitationem aliquam molestiae temporibus impedit rem illum cupiditate dolorem harum ipsum unde magni!",
    },
  ],
};

export default function ProductDetailPage() {
  return (
    <main className="mt-[70px] w-[90%] max-w-7xl mx-auto mb-4 flex flex-col gap-16">
      <div className="flex flex-col gap-8 md:flex-row">
        <ProductDetailImages product={product} />
        <ProductConfiguration product={product} />
      </div>
      <section>
        <SectionHeader title="Product Description" />
        <p className="mt-3 text-zinc-700">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Architecto
          reprehenderit perspiciatis tempore aut quis officiis officia eum. Id
          debitis iure maiores soluta perspiciatis voluptate, reprehenderit ad
          accusamus, aliquam accusantium exercitationem.
        </p>
      </section>
      <SimilarProducts />
      <section className="max-w-3xl">
        <SectionHeader title="User Reviews" />
        <div
          id="reviews"
          className="flex flex-col gap-10 mt-4 text-zinc-700 scroll-mt-36"
        >
          {product.reviews.map((review) => (
            <Review key={review.user._id} review={review} />
          ))}
        </div>
      </section>
    </main>
  );
}
