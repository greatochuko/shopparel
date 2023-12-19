import { Product } from "../models/Product.js";

export async function getAllProduct(req, res) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getProduct(req, res) {
  try {
    const { productId } = req.params;
    const product = await Product.findById(productId).populate({
      path: "reviews",
      populate: { path: "user", select: "imgUrl firstName lastName" },
    });
    res.json(product);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function searchProducts(req, res) {
  try {
    const { query, page } = req.query;
    const products = await Product.find().select(
      "name imgUrl brand price gender colors sizes categories"
    );
    const searchedProducts = products.filter((product) =>
      product.name
        .toLowerCase()
        .includes(query !== "null" ? query.toLowerCase() : "")
    );
    const start = page === "null" ? 0 : (parseInt(page) - 1) * 16;
    const end = page === "null" ? 16 : parseInt(page) * 16;
    const paginatedSearchedProducts = searchedProducts.slice(start, end);
    res.json({
      products: paginatedSearchedProducts,
      totalProducts: searchedProducts.length,
    });
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

export async function getSimilarProducts(req, res) {
  try {
    const { categories, productId } = req.query;
    const categoryList = categories.split(",");
    const products = await Product.find();
    const similarProducts = products.filter(
      (product) =>
        product.categories.some((category) =>
          categoryList.includes(category)
        ) && product._id.toString() !== productId
    );
    res.json(similarProducts);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function populate(req, res) {
  const products = [
    {
      _id: {
        $oid: "6578656bc5fa77b2d89cdd73",
      },
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
      gender: "female",
      rating: 4,
      reviews: [
        {
          $oid: "6580ac332305a0073c73c64b",
        },
      ],
      sizes: ["l", "m", "xl", "s", "xs"],
      categories: ["V-Neck T-Shirts"],
      colors: ["black"],
      __v: 0,
    },
    {
      _id: {
        $oid: "6578656bc5fa77b2d89cdd74",
      },
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
      gender: "female",
      rating: 4,
      reviews: [],
      sizes: ["l", "m", "xl", "s", "2xl"],
      categories: ["sweater"],
      colors: ["yellow", "orange"],
      __v: 0,
    },
    {
      _id: {
        $oid: "6578656bc5fa77b2d89cdd75",
      },
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
      gender: "male",
      rating: 4,
      reviews: [],
      sizes: ["l", "m", "xl", "s"],
      categories: ["jeans", "trousers"],
      colors: ["navy", "black", "blue"],
      __v: 0,
    },
    {
      _id: {
        $oid: "6578656bc5fa77b2d89cdd78",
      },
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
      gender: "female",
      rating: 4,
      reviews: [],
      sizes: ["l", "xl", "m", "s", "xs", "xxs"],
      categories: ["Casual Dresses", "Summer Dresses", "Party Dresses"],
      colors: ["yellow", "blue"],
      __v: 0,
    },
    {
      _id: {
        $oid: "6578656bc5fa77b2d89cdd79",
      },
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
      gender: "male",
      rating: 4,
      reviews: [],
      sizes: ["l", "xl", "m", "s", "xs", "xxs", "2xl"],
      categories: ["Polo Shirts", "Crewneck T-Shirts"],
      colors: ["black", "navy"],
      __v: 0,
    },
    {
      _id: {
        $oid: "6578656bc5fa77b2d89cdd7a",
      },
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
      gender: "male",
      rating: 4,
      reviews: [],
      sizes: ["3xl", "2xl", "l", "m", "xl", "s", "xs"],
      categories: [
        "Flannel Shirts",
        "Long-Sleeve T-Shirts",
        "Button-Down Shirts",
      ],
      colors: ["red", "black", "blue"],
      __v: 0,
    },
    {
      _id: {
        $oid: "6578656bc5fa77b2d89cdd76",
      },
      name: "Leather Bomber Jacket",
      imgUrl: "/men-product-2.png",
      brand: "Helen",
      price: 299,
      images: [
        "/men-product-2.png",
        "/men-product-3.png",
        "/men-product-4.png",
        "/men-product-1.png",
      ],
      gender: "male",
      rating: 4,
      reviews: [],
      sizes: ["l", "m", "xl", "2xl"],
      categories: ["coats", "jackets", "sweater"],
      colors: ["black", "gray"],
      __v: 0,
    },
    {
      _id: {
        $oid: "6578656bc5fa77b2d89cdd77",
      },
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
      gender: "female",
      rating: 4,
      reviews: [],
      sizes: ["l", "m", "s", "xs"],
      categories: ["Casual Dresses", "Formal Dresses"],
      colors: ["red", "orange"],
      __v: 0,
    },
    {
      _id: {
        $oid: "65815364855d070699c22d98",
      },
      name: "Classic Wool Coat",
      imgUrl: "/classic-wool-coat.png",
      brand: "FashionBrand",
      price: 99.99,
      images: ["/classic-wool-coat.png"],
      gender: "Men",
      rating: 5,
      reviews: [],
      sizes: ["S", "M", "L", "XL"],
      categories: ["Coats", "Winterwear"],
      colors: ["black", "gray", "navy"],
      __v: 0,
    },
    {
      _id: {
        $oid: "65815364855d070699c22d99",
      },
      name: "Leather Biker Jacket",
      imgUrl: "/leather-biker-jacket.png",
      brand: "UrbanStyle",
      price: 129.99,
      images: ["/leather-biker-jacket.png"],
      gender: "Women",
      rating: 5,
      reviews: [],
      sizes: ["XS", "S", "M", "L"],
      categories: ["Jackets", "Winterwear"],
      colors: ["black", "brown", "red"],
      __v: 0,
    },
    {
      _id: {
        $oid: "65815364855d070699c22d9a",
      },
      name: "Slim Fit Blazer",
      imgUrl: "/slim-fit-blazer.png",
      brand: "ModernStyle",
      price: 79.99,
      images: ["/slim-fit-blazer.png"],
      gender: "Men",
      rating: 5,
      reviews: [],
      sizes: ["S", "M", "L", "XL"],
      categories: ["Blazers", "Formal Dresses"],
      colors: ["gray", "navy", "black"],
      __v: 0,
    },
    {
      _id: {
        $oid: "65815364855d070699c22d9d",
      },
      name: "Printed Summer Dress",
      imgUrl: "/printed-summer-dress.png",
      brand: "ChicDesigns",
      price: 49.99,
      images: ["/printed-summer-dress.png"],
      gender: "Women",
      rating: 5,
      reviews: [],
      sizes: ["XS", "S", "M", "L"],
      categories: ["Casual Dresses", "Summer Dresses"],
      colors: ["pink", "yellow", "white"],
      __v: 0,
    },
    {
      _id: {
        $oid: "65815364855d070699c22d9e",
      },
      name: "Classic Denim Jeans",
      imgUrl: "/classic-denim-jeans.png",
      brand: "DenimDreams",
      price: 69.99,
      images: ["/classic-denim-jeans.png"],
      gender: "Unisex",
      rating: 5,
      reviews: [],
      sizes: ["L", "XL", "2XL", "3XL"],
      categories: ["Jeans", "Casual Dresses"],
      colors: ["blue", "black", "gray"],
      __v: 0,
    },
    {
      _id: {
        $oid: "65815364855d070699c22d9f",
      },
      name: "Tailored Trousers",
      imgUrl: "/tailored-trousers.png",
      brand: "CityChic",
      price: 54.99,
      images: ["/tailored-trousers.png"],
      gender: "Women",
      rating: 5,
      reviews: [],
      sizes: ["XS", "S", "M", "L"],
      categories: ["Trousers", "Formal Dresses"],
      colors: ["black", "gray", "white"],
      __v: 0,
    },
    {
      _id: {
        $oid: "65815364855d070699c22da0",
      },
      name: "Floral Party Dress",
      imgUrl: "/floral-party-dress.png",
      brand: "GlamourChic",
      price: 89.99,
      images: ["/floral-party-dress.png"],
      gender: "Women",
      rating: 5,
      reviews: [],
      sizes: ["XS", "S", "M", "L"],
      categories: ["Party Dresses", "Formal Dresses"],
      colors: ["red", "pink", "white"],
      __v: 0,
    },
    {
      _id: {
        $oid: "65815364855d070699c22da1",
      },
      name: "Striped Summer Shorts",
      imgUrl: "/striped-summer-shorts.png",
      brand: "BeachLife",
      price: 34.99,
      images: ["image1.jpg", "image2.jpg"],
      gender: "Unisex",
      rating: 5,
      reviews: [],
      sizes: ["28", "30", "32", "34"],
      categories: ["Shorts", "Summer Dresses"],
      colors: ["blue", "white", "gray"],
      __v: 0,
    },
    {
      _id: {
        $oid: "65815364855d070699c22da2",
      },
      name: "Casual Button-Down Shirt",
      imgUrl: "/casual-button-down-shirt.png",
      brand: "RelaxedLook",
      price: 39.99,
      images: ["/casual-button-down-shirt.png"],
      gender: "Men",
      rating: 5,
      reviews: [],
      sizes: ["S", "M", "L", "XL"],
      categories: ["Button-Down Shirts", "Casual Dresses"],
      colors: ["black", "gray", "white"],
      __v: 0,
    },
    {
      _id: {
        $oid: "65815364855d070699c22da3",
      },
      name: "Sporty V-Neck T-Shirt",
      imgUrl: "/sporty-v-neck-t-shirt.png",
      brand: "SportyStyle",
      price: 19.99,
      images: ["/sporty-v-neck-t-shirt.png"],
      gender: "Women",
      rating: 5,
      reviews: [],
      sizes: ["XS", "S", "M", "L"],
      categories: ["V-Neck T-Shirts", "Long-Sleeve T-Shirts"],
      colors: ["green", "teal", "gray"],
      __v: 0,
    },
    {
      _id: {
        $oid: "65815364855d070699c22da4",
      },
      name: "Performance Leggings",
      imgUrl: "/performance-leggings.png",
      brand: "ActiveLife",
      price: 34.99,
      images: ["/performance-leggings.png"],
      gender: "Women",
      rating: 5,
      reviews: [],
      sizes: ["XS", "S", "M", "L"],
      categories: ["Performance Leggings", "Athletic Shorts"],
      colors: ["purple", "black", "gray"],
      __v: 0,
    },
    {
      _id: {
        $oid: "65815364855d070699c22da5",
      },
      name: "Training Hoodie",
      imgUrl: "/training-hoodie.png",
      brand: "FitFlex",
      price: 49.99,
      images: [
        "training-hoodie.png",
        "training-hoodie-2.png",
        "training-hoodie-3.png",
      ],
      gender: "Men",
      rating: 5,
      reviews: [],
      sizes: ["S", "M", "L", "XL"],
      categories: ["Training Hoodies", "Athletic Shorts"],
      colors: ["blue", "black", "white"],
      __v: 0,
    },
    {
      _id: {
        $oid: "65815364855d070699c22da6",
      },
      name: "Classic Baseball Cap",
      imgUrl: "/classic-baseball-cap.png",
      brand: "SportyStyle",
      price: 24.99,
      images: ["/classic-baseball-cap.png", "/classic-baseball-cap-2.png"],
      gender: "Unisex",
      rating: 5,
      reviews: [],
      sizes: ["M"],
      categories: ["Baseball Caps", "Hats"],
      colors: ["black", "navy"],
      __v: 0,
    },
    {
      _id: {
        $oid: "65815364855d070699c22da7",
      },
      name: "Beanie Hat",
      imgUrl: "/beanie-hat.png",
      brand: "WinterStyle",
      price: 19.99,
      images: ["/beanie-hat.png", "/beanie-hat-2.png", "/beanie-hat-3.png"],
      gender: "Unisex",
      rating: 5,
      reviews: [],
      sizes: ["M"],
      categories: ["Beanies", "Hats"],
      colors: ["pink", "yellow", "red"],
      __v: 0,
    },
    {
      _id: {
        $oid: "65815364855d070699c22da8",
      },
      name: "Fedora Hat",
      imgUrl: "/fedora-hat.png",
      brand: "HatMaster",
      price: 29.99,
      images: ["/fedora-hat.png"],
      gender: "Unisex",
      rating: 5,
      reviews: [],
      sizes: ["M"],
      categories: ["Fedora Hats", "Bucket Hats"],
      colors: ["brown"],
      __v: 0,
    },
    {
      _id: {
        $oid: "65815364855d070699c22da9",
      },
      name: "Bucket Hat",
      imgUrl: "/bucket-hat.png",
      brand: "CasualSun",
      price: 19.99,
      images: ["/bucket-hat.png"],
      gender: "Unisex",
      rating: 5,
      reviews: [],
      sizes: ["M"],
      categories: ["Bucket Hats", "Hats"],
      colors: ["white"],
      __v: 0,
    },
    {
      _id: {
        $oid: "65815364855d070699c22daa",
      },
      name: "Analog Wrist Watch",
      imgUrl: "/analog-wrist-watch.png",
      brand: "TimeTrend",
      price: 49.99,
      images: ["/analog-wrist-watch.png", "/analog-wrist-watch-2.png"],
      gender: "Unisex",
      rating: 5,
      reviews: [],
      sizes: ["M"],
      categories: ["Analog Watches", "Fashion Bracelet Watches"],
      colors: ["brown", "gold"],
      __v: 0,
    },
    {
      _id: {
        $oid: "65815364855d070699c22dab",
      },
      name: "Smartwatch",
      imgUrl: "/smartwatch.png",
      brand: "TechGadget",
      price: 129.99,
      images: ["smartwatch.png", "smartwatch-2.png"],
      gender: "Unisex",
      rating: 5,
      reviews: [],
      sizes: ["M"],
      categories: ["Smartwatches", "Digital Watches"],
      colors: ["navy", "white"],
      __v: 0,
    },
    {
      _id: {
        $oid: "65815364855d070699c22d9b",
      },
      name: "Casual V-Neck Sweater",
      imgUrl: "/casual-v-neck-sweater.png",
      brand: "CozyComfort",
      price: 59.99,
      images: ["/casual-v-neck-sweater.png"],
      gender: "Women",
      rating: 5,
      reviews: [],
      sizes: ["XS", "S", "M", "L"],
      categories: ["Sweater", "Winterwear"],
      colors: ["purple", "teal", "gray"],
      __v: 0,
    },
    {
      _id: {
        $oid: "65815364855d070699c22d9c",
      },
      name: "Striped Short-Sleeve Shirt",
      imgUrl: "/striped-short-sleeve-shirt.png",
      brand: "CasualVibes",
      price: 29.99,
      images: ["/striped-short-sleeve-shirt.png"],
      gender: "Men",
      rating: 5,
      reviews: [],
      sizes: ["S", "M", "L", "XL"],
      categories: ["Short-Sleeve Shirts", "Printed or Patterned Shirts"],
      colors: ["blue", "white", "gray"],
      __v: 0,
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
