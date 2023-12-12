import { useEffect, useState } from "react";
import { ProductType } from "../components/Product";
import SearchFilter from "../components/SearchFilter";
import SearchResults from "../components/SearchResults";
import { useSearchParams } from "react-router-dom";
import { fetchSearchProducts } from "../services/productServices";

export const products = [
  {
    name: "Relaxed Fit V-Neck Tee",
    imgUrl: "/women-product-1.png",
    brand: "Helen",
    price: 299,
    images: [
      "/women-product-1.png",
      "/men-product-3.png",
      "/men-product-2.png",
      "/men-product-1.png",
    ],

    rating: 4,
    reviews: [
      {
        user: {
          firstName: "John",
          lastName: "Doe",
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
          firstName: "John",
          lastName: "Doe",
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
          firstName: "John",
          lastName: "Doe",
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
    _id: "123abc1",
    sizes: ["l", "m", "xl", "s", "xs"],
    categories: ["V-Neck T-Shirts"],
    colors: ["black"],
  },
  {
    name: "Off-the-Shoulder Knit Sweater",
    imgUrl: "/women-product-2.png",
    brand: "Helen",
    price: 299,
    images: [
      "/women-product-2.png",
      "/men-product-3.png",
      "/men-product-2.png",
      "/men-product-1.png",
    ],
    rating: 4,
    reviews: [
      {
        user: {
          firstName: "John",
          lastName: "Doe",
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
          firstName: "John",
          lastName: "Doe",
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
          firstName: "John",
          lastName: "Doe",
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
    _id: "123abc2",
    sizes: ["l", "m", "xl", "s", "2xl"],
    categories: ["sweater"],
    colors: ["yellow", "orange"],
  },
  {
    name: "Classic Straight-Leg Jeans",
    imgUrl: "/men-product-1.png",
    brand: "Helen",
    price: 299,
    images: [
      "/men-product-1.png",
      "/men-product-3.png",
      "/men-product-2.png",
      "/men-product-4.png",
    ],
    rating: 4,
    reviews: [
      {
        user: {
          firstName: "John",
          lastName: "Doe",
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
          firstName: "John",
          lastName: "Doe",
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
          firstName: "John",
          lastName: "Doe",
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
    _id: "123abc3",
    sizes: ["l", "m", "xl", "s"],
    categories: ["jeans", "trousers"],
    colors: ["navy", "black", "blue"],
  },
  {
    name: "Leather Bomber Jacket",
    imgUrl: "/men-product-2.png",
    brand: "Helen",
    price: 299,
    images: [
      "/men-product-2.png",
      "/men-product-3.png",
      "/men-product-2.png",
      "/men-product-1.png",
    ],
    rating: 4,
    reviews: [
      {
        user: {
          firstName: "John",
          lastName: "Doe",
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
          firstName: "John",
          lastName: "Doe",
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
          firstName: "John",
          lastName: "Doe",
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
    _id: "123abc4",
    sizes: ["l", "m", "xl", "2xl"],
    categories: ["coats", "jackets", "sweater"],
    colors: ["black"],
  },
  {
    name: "Wrap Maxi Dress",
    imgUrl: "/women-product-3.png",
    brand: "Helen",
    price: 299,
    images: [
      "/women-product-3.png",
      "/men-product-3.png",
      "/men-product-2.png",
      "/men-product-1.png",
    ],
    rating: 4,
    reviews: [
      {
        user: {
          firstName: "John",
          lastName: "Doe",
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
          firstName: "John",
          lastName: "Doe",
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
          firstName: "John",
          lastName: "Doe",
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
    _id: "123abc5",
    sizes: ["l", "m", "s", "xs"],
    categories: ["Casual Dresses", "Formal Dresses"],
    colors: ["red", "orange"],
  },
  {
    name: "Floral Print Ruffle Top",
    imgUrl: "/women-product-4.png",
    brand: "Helen",
    price: 299,
    images: [
      "/women-product-4.png",
      "/men-product-3.png",
      "/men-product-2.png",
      "/men-product-1.png",
    ],
    rating: 4,
    reviews: [
      {
        user: {
          firstName: "John",
          lastName: "Doe",
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
          firstName: "John",
          lastName: "Doe",
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
          firstName: "John",
          lastName: "Doe",
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
    _id: "123abc6",
    sizes: ["l", "xl", "m", "s", "xs", "xxs"],
    categories: ["Casual Dresses", "Summer Dresses", "Party Dresses"],
    colors: ["yellow", "blue"],
  },
  {
    name: "Classic Cotton Crew Neck Tee",
    imgUrl: "/men-product-3.png",
    brand: "Helen",
    price: 299,
    images: [
      "/men-product-3.png",
      "/men-product-4.png",
      "/men-product-2.png",
      "/men-product-1.png",
    ],
    rating: 4,
    reviews: [
      {
        user: {
          firstName: "John",
          lastName: "Doe",
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
          firstName: "John",
          lastName: "Doe",
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
          firstName: "John",
          lastName: "Doe",
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
    _id: "123abc7",
    sizes: ["l", "xl", "m", "s", "xs", "xxs", "2xl"],
    categories: ["Polo Shirts", "Crewneck T-Shirts"],
    colors: ["black", "navy"],
  },
  {
    name: "Plaid Flannel Shirt",
    imgUrl: "/men-product-4.png",
    brand: "Helen",
    price: 299,
    images: [
      "/men-product-4.png",
      "/men-product-3.png",
      "/men-product-2.png",
      "/men-product-1.png",
    ],
    rating: 4,
    reviews: [
      {
        user: {
          firstName: "John",
          lastName: "Doe",
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
          firstName: "John",
          lastName: "Doe",
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
          firstName: "John",
          lastName: "Doe",
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
    _id: "123abc8",
    sizes: ["3xl", "2xl", "l", "m", "xl", "s", "xs"],
    categories: [
      "Flannel Shirts",
      "Long-Sleeve T-Shirts",
      "Button-Down Shirts",
    ],
    colors: ["red", "black", "blue"],
  },
];

export default function SearchPage() {
  const [products, setProducts] = useState<ProductType[]>([]);
  const [searchParams] = useSearchParams();
  const query = searchParams.get("q");

  useEffect(() => {
    async function searchProducts() {
      if (query) {
        const data = await fetchSearchProducts(query as string);

        if (data.error) return;
        setProducts(data);
      }
    }
    searchProducts();
  }, [query]);
  return (
    <main className="pt-[102px] h-fit max-w-7xl w-[90%] mx-auto flex flex-col md:flex-row gap-8 mb-8 text-zinc-500">
      <SearchFilter products={products} />
      <SearchResults products={products} />
    </main>
  );
}
