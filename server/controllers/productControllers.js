import { Product } from "../models/Product.js";

export async function getAllProduct(req, res) {
  try {
    const products = await Product.find().select(
      "name imgUrl brand price gender"
    );
    res.json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getProduct(req, res) {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId);
    // .populate({
    //   path: "reviews",
    //   populate: { path: "user", select: "imgUrl firstName lastName" },
    // });
    res.json(product);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
}

export async function searchProducts(req, res) {
  try {
    const { query } = req.query;
    const products = await Product.find().select(
      "name imgUrl brand price gender colors sizes categories"
    );
    const searchedProducts = products.filter((product) =>
      product.name.toLowerCase().includes(query.toLowerCase())
    );
    res.json(searchedProducts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function createProduct(req, res) {
  try {
    const {
      name,
      imgUrl,
      brand,
      price,
      gender,
      images,
      rating,
      reviews,
      sizes,
      categories,
      color,
    } = req.body;
    const newProduct = await Product.create({
      name,
      imgUrl,
      brand,
      price,
      gender,
      images,
      rating,
      reviews,
      sizes,
      categories,
      color,
    });
    res.json(newProduct);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function populate(req, res) {
  const products = [
    {
      name: "Relaxed Fit V-Neck Tee",
      imgUrl: "/women-product-1.png",
      brand: "Helen",
      price: 299,
      gender: "female",
      images: [
        "/women-product-1.png",
        "/men-product-3.png",
        "/men-product-2.png",
        "/men-product-1.png",
      ],

      rating: 4,

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
      gender: "female",
      images: [
        "/women-product-2.png",
        "/men-product-3.png",
        "/men-product-2.png",
        "/men-product-1.png",
      ],
      rating: 4,

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
      gender: "male",
      images: [
        "/men-product-1.png",
        "/men-product-3.png",
        "/men-product-2.png",
        "/men-product-4.png",
      ],
      rating: 4,

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
      gender: "male",
      images: [
        "/men-product-2.png",
        "/men-product-3.png",
        "/men-product-2.png",
        "/men-product-1.png",
      ],
      rating: 4,

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
      gender: "female",
      images: [
        "/women-product-3.png",
        "/men-product-3.png",
        "/men-product-2.png",
        "/men-product-1.png",
      ],
      rating: 4,

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
      gender: "female",
      images: [
        "/women-product-4.png",
        "/men-product-3.png",
        "/men-product-2.png",
        "/men-product-1.png",
      ],
      rating: 4,

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
      gender: "male",
      images: [
        "/men-product-3.png",
        "/men-product-4.png",
        "/men-product-2.png",
        "/men-product-1.png",
      ],
      rating: 4,

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
      gender: "male",
      images: [
        "/men-product-4.png",
        "/men-product-3.png",
        "/men-product-2.png",
        "/men-product-1.png",
      ],
      rating: 4,

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
  products.forEach(async (product) => {
    await Product.create({
      name: product.name,
      imgUrl: product.imgUrl,
      brand: product.brand,
      price: product.price,
      gender: product.gender,
      images: product.images,
      rating: product.rating,
      sizes: product.sizes,
      categories: product.categories,
      colors: product.colors,
    });
  });
  res.json("done");
}
