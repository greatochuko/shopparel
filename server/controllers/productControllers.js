import { Product } from "../models/Product.js";

export async function getAllProducts(req, res) {
  try {
    const products = await Product.find({ isPublished: true });
    res.json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getBrandProducts(req, res) {
  try {
    const { brand } = req.params;
    const products = await Product.find({ brand, isPublished: true });
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
    const products = await Product.find({ isPublished: true }).select(
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

export async function saveProductInfo(req, res) {
  try {
    const { name, description, price, shipping, discount, store } = req.body;
    const newProduct = await Product.create({
      name,
      description,
      price,
      shipping,
      discount,
      store,
    });
    res.json(newProduct);
  } catch (error) {
    console.log(error.message);
    res.status(400).json({ error: error.message });
  }
}

export async function editProduct(req, res) {
  try {
    const { _id: productId } = req.body;
    const product = await Product.findByIdAndUpdate(productId, req.body, {
      new: true,
    });

    if (!product) throw new Error(`Product with id ${productId} not found!`);

    res.json(product);
  } catch (error) {
    console.log(error.message);
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
