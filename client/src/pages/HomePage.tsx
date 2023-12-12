import About from "../components/About";
import CategoryProducts from "../components/CategoryProducts";
import FeedbackSection from "../components/FeedbackSection";
import Hero from "../components/Hero";
import NewArrival from "../components/NewArrival";
import NewsLetterSection from "../components/NewsLetterSection";
import SectionHeader from "../components/SectionHeader";
import TopBrands from "../components/TopBrands";

const womenProducts = [
  {
    _id: "123abc",
    name: "Relaxed Fit V-Neck Tee",
    imgUrl: "/women-product-1.png",
    brand: "Helen",
    price: 299,
    sizes: ["l", "m", "xl", "s", "xs"],
    categories: ["V-Neck T-Shirts"],
    colors: ["black"],
    rating: 4,
    reviews: [
      {
        user: {
          firstName: "John Doe",
          lastName: "John Doe",
          imgUrl: "/feedback-user-image-1.jpg",
          email: "john@gmail.com",
          _id: "123abc",
        },
        date: "November 12, 2023",
        rating: 3,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat corrupti obcaecati facilis odit vel dignissimos porro exercitationem aliquam molestiae temporibus impedit rem illum cupiditate dolorem harum ipsum unde magni!",
      },
    ],
    images: ["a"],
  },
  {
    _id: "123abc",
    name: "Off-the-Shoulder Knit Sweater",
    imgUrl: "/women-product-2.png",
    brand: "Helen",
    price: 299,
    sizes: ["l", "m", "xl", "s", "xs"],
    categories: ["V-Neck T-Shirts"],
    colors: ["black"],
    rating: 4,
    reviews: [
      {
        user: {
          firstName: "John Doe",
          lastName: "John Doe",
          imgUrl: "/feedback-user-image-1.jpg",
          email: "john@gmail.com",
          _id: "123abc",
        },
        date: "November 12, 2023",
        rating: 3,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat corrupti obcaecati facilis odit vel dignissimos porro exercitationem aliquam molestiae temporibus impedit rem illum cupiditate dolorem harum ipsum unde magni!",
      },
    ],
    images: ["a"],
  },
  {
    _id: "123abc",
    name: "Wrap Maxi Dress",
    imgUrl: "/women-product-3.png",
    brand: "Helen",
    price: 299,
    sizes: ["l", "m", "xl", "s", "xs"],
    categories: ["V-Neck T-Shirts"],
    colors: ["black"],
    rating: 4,
    reviews: [
      {
        user: {
          firstName: "John Doe",
          lastName: "John Doe",
          imgUrl: "/feedback-user-image-1.jpg",
          email: "john@gmail.com",
          _id: "123abc",
        },
        date: "November 12, 2023",
        rating: 3,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat corrupti obcaecati facilis odit vel dignissimos porro exercitationem aliquam molestiae temporibus impedit rem illum cupiditate dolorem harum ipsum unde magni!",
      },
    ],
    images: ["a"],
  },
  {
    _id: "123abc",
    name: "Floral Print Ruffle Top",
    imgUrl: "/women-product-4.png",
    brand: "Helen",
    price: 299,
    sizes: ["l", "m", "xl", "s", "xs"],
    categories: ["V-Neck T-Shirts"],
    colors: ["black"],
    rating: 4,
    reviews: [
      {
        user: {
          firstName: "John Doe",
          lastName: "John Doe",
          imgUrl: "/feedback-user-image-1.jpg",
          email: "john@gmail.com",
          _id: "123abc",
        },
        date: "November 12, 2023",
        rating: 3,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat corrupti obcaecati facilis odit vel dignissimos porro exercitationem aliquam molestiae temporibus impedit rem illum cupiditate dolorem harum ipsum unde magni!",
      },
    ],
    images: ["a"],
  },
];
const menProducts = [
  {
    _id: "123abc",
    name: "Classic Straight-Leg Jeans",
    imgUrl: "/men-product-1.png",
    brand: "Helen",
    price: 299,
    sizes: ["l", "m", "xl", "s", "xs"],
    categories: ["V-Neck T-Shirts"],
    colors: ["black"],
    rating: 4,
    reviews: [
      {
        user: {
          firstName: "John Doe",
          lastName: "John Doe",
          imgUrl: "/feedback-user-image-1.jpg",
          email: "john@gmail.com",
          _id: "123abc",
        },
        date: "November 12, 2023",
        rating: 3,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat corrupti obcaecati facilis odit vel dignissimos porro exercitationem aliquam molestiae temporibus impedit rem illum cupiditate dolorem harum ipsum unde magni!",
      },
    ],
    images: ["a"],
  },
  {
    _id: "123abc",
    name: "Leather Bomber Jacket",
    imgUrl: "/men-product-2.png",
    brand: "Helen",
    price: 299,
    sizes: ["l", "m", "xl", "s", "xs"],
    categories: ["V-Neck T-Shirts"],
    colors: ["black"],
    rating: 4,
    reviews: [
      {
        user: {
          firstName: "John Doe",
          lastName: "John Doe",
          imgUrl: "/feedback-user-image-1.jpg",
          email: "john@gmail.com",
          _id: "123abc",
        },
        date: "November 12, 2023",
        rating: 3,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat corrupti obcaecati facilis odit vel dignissimos porro exercitationem aliquam molestiae temporibus impedit rem illum cupiditate dolorem harum ipsum unde magni!",
      },
    ],
    images: ["a"],
  },
  {
    _id: "123abc",
    name: "Classic Cotton Crew Neck Tee",
    imgUrl: "/men-product-3.png",
    brand: "Helen",
    price: 299,
    sizes: ["l", "m", "xl", "s", "xs"],
    categories: ["V-Neck T-Shirts"],
    colors: ["black"],
    rating: 4,
    reviews: [
      {
        user: {
          firstName: "John Doe",
          lastName: "John Doe",
          imgUrl: "/feedback-user-image-1.jpg",
          email: "john@gmail.com",
          _id: "123abc",
        },
        date: "November 12, 2023",
        rating: 3,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat corrupti obcaecati facilis odit vel dignissimos porro exercitationem aliquam molestiae temporibus impedit rem illum cupiditate dolorem harum ipsum unde magni!",
      },
    ],
    images: ["a"],
  },
  {
    _id: "123abc",
    name: "Plaid Flannel Shirt",
    imgUrl: "/men-product-4.png",
    brand: "Helen",
    price: 299,
    sizes: ["l", "m", "xl", "s", "xs"],
    categories: ["V-Neck T-Shirts"],
    colors: ["black"],
    rating: 4,
    reviews: [
      {
        user: {
          firstName: "John Doe",
          lastName: "John Doe",
          imgUrl: "/feedback-user-image-1.jpg",
          email: "john@gmail.com",
          _id: "123abc",
        },
        date: "November 12, 2023",
        rating: 3,
        review:
          "Lorem ipsum dolor sit amet consectetur adipisicing elit. Eaque, fugiat corrupti obcaecati facilis odit vel dignissimos porro exercitationem aliquam molestiae temporibus impedit rem illum cupiditate dolorem harum ipsum unde magni!",
      },
    ],
    images: ["a"],
  },
];

export default function HomePage() {
  return (
    <main className="pt-[70px] min-h-[80dvh] flex flex-col gap-8 mb-8">
      <Hero />
      <About />
      <NewArrival />
      <NewsLetterSection />
      <CategoryProducts products={menProducts}>
        <SectionHeader title="Men's Wears" />
      </CategoryProducts>
      <CategoryProducts products={womenProducts}>
        <SectionHeader title="Women's Wears" />
      </CategoryProducts>
      <TopBrands />
      <FeedbackSection />
    </main>
  );
}
