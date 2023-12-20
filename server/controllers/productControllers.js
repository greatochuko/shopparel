import { Product } from "../models/Product.js";

export async function getAllProduct(req, res) {
  try {
    const products = await Product.find();
    res.json(products);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
}

export async function getBrandProducts(req, res) {
  try {
    const { brand } = req.params;
    const products = await Product.find({ brand });
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

const descriptions = [
  "Elevate your style with our timeless Fedora Hat. Crafted with precision and attention to detail, this hat is the epitome of sophistication. The classic brim and distinctive crown add a touch of charm to any outfit. Whether you're dressing up for a special occasion or adding flair to your everyday look, our Fedora Hat is the perfect choice for the discerning individual.",

  "Embrace casual cool with our trendy Bucket Hat. Designed for both style and functionality, this hat is a must-have accessory for any laid-back adventure. The wide brim provides optimal sun protection, while the relaxed fit ensures comfort. Available in a variety of colors and patterns, our Bucket Hat is the ideal way to make a fashion statement while staying effortlessly cool.",

  "Rediscover the art of timekeeping with our Analog Wrist Watch. Meticulously crafted with precision movement, this watch combines classic elegance with modern style. The timeless design and durable materials make it a versatile accessory suitable for any occasion. Stay punctual and make a lasting impression with our Analog Wrist Watch.",

  "Seamlessly blend technology with style with our Smartwatch. Stay connected and monitor your health and fitness while enjoying a sleek and modern design. Packed with features, including notifications, fitness tracking, and customizable watch faces, our Smartwatch is the perfect companion for the tech-savvy individual who values both form and function.",

  "Embrace comfort and style with our Casual V-Neck Sweater. Made from soft, high-quality fabrics, this sweater is perfect for a relaxed day out or a cozy night in. The versatile V-neck design adds a touch of sophistication, making it a wardrobe staple for those who appreciate casual elegance.",

  "Upgrade your casual wardrobe with our Striped Short-Sleeve Shirt. The classic stripes and breathable fabric make it a go-to choice for warm days. Whether you're heading to a weekend brunch or a casual outing, this shirt effortlessly combines style and comfort for a laid-back yet polished look.",

  "Elevate your workout with our Performance Leggings. Designed for optimal comfort and flexibility, these leggings are perfect for any fitness routine. The moisture-wicking fabric keeps you cool, and the flattering fit enhances your silhouette. Step into confidence and style with our Performance Leggings.",

  "Conquer your fitness goals in style with our Training Hoodie. Whether you're hitting the gym or enjoying an outdoor workout, this hoodie provides both comfort and functionality. The breathable fabric and modern design make it a go-to choice for those who prioritize performance without compromising on style.",

  "Sport a timeless look with our Classic Baseball Cap. Whether you're a sports enthusiast or just looking for a casual accessory, this cap is a versatile addition to your wardrobe. The adjustable strap ensures a perfect fit, while the classic design adds a touch of nostalgia to your everyday style.",

  " Stay warm and fashionable with our cozy Beanie Hat. Made from soft, quality materials, this hat is a winter essential. The snug fit and stylish design make it easy to pair with any cold-weather ensemble. Beat the chill in style with our Beanie Hat.",

  "Elevate your look with our Tailored Trousers. Perfect for both professional settings and upscale events, these trousers boast a refined fit and classic style. Crafted with attention to detail, they offer a sophisticated silhouette that pairs seamlessly with dress shirts, blouses, or blazers. Make a lasting impression with our Tailored Trousers.",

  "Embrace the joy of celebration with our Floral Party Dress. The vibrant floral pattern and flattering silhouette make it the perfect choice for special occasions. Whether you're attending a wedding or a festive gathering, this dress ensures you'll stand out with grace and style.",

  "Stay cool and stylish in our Striped Summer Shorts. The playful stripes and comfortable fit make them an essential for warm-weather adventures. Pair them with a casual tee or tank top for a laid-back look that exudes summer vibes.",

  "Effortlessly transition from work to play with our Casual Button-Down Shirt. The versatile design and comfortable fabric make it suitable for various occasions. Whether you're dressing up for the office or heading out for a casual dinner, this shirt strikes the perfect balance between style and comfort.",

  "Amp up your casual wardrobe with our Sporty V-Neck T-Shirt. The V-neck design and athletic-inspired details add a modern edge to a classic staple. Whether you're hitting the gym or running errands, this t-shirt keeps you looking and feeling cool.",

  "Make a statement with our Slim Fit Blazer. Tailored to perfection, this blazer adds a touch of sophistication to any ensemble. Whether you're dressing up for a formal event or adding a polished finish to a casual outfit, our Slim Fit Blazer is a versatile must-have.",

  "Embrace the spirit of summer with our Printed Summer Dress. The playful prints and breezy silhouette make it a go-to choice for warm days. Whether you're strolling through the park or attending a casual outdoor gathering, this dress ensures you're both comfortable and stylish.",

  "Discover timeless style with our Classic Denim Jeans. Crafted from high-quality denim, these jeans offer a comfortable fit and classic look. Whether you're dressing them up with a blazer or keeping it casual with a tee, these jeans are a versatile wardrobe essential.",

  "Brave the elements in style with our Classic Wool Coat. Timeless and sophisticated, this coat is crafted from premium wool to keep you warm while exuding elegance. The tailored fit and versatile design make it the perfect outerwear choice for any occasion.",

  "Embrace the rebellious spirit with our Leather Biker Jacket. Crafted from high-quality leather, this jacket adds a touch of edge to any outfit. Whether you're riding on two wheels or simply looking to make a bold fashion statement, the Leather Biker Jacket is a symbol of cool confidence.",

  "Embrace timeless femininity with our Wrap Maxi Dress. The flattering wrap design and flowing silhouette make it a versatile choice for a variety of occasions. From garden parties to evening events, this dress ensures you radiate elegance and grace with every step.",

  "Add a touch of romance to your winter wardrobe with our Off-the-Shoulder Knit Sweater. The off-the-shoulder design and cozy knit fabric combine comfort with a hint of allure. Whether you're enjoying a cozy night in or stepping out for a casual gathering, this sweater is the perfect blend of style and warmth.",

  "Elevate your denim collection with our Classic Straight-Leg Jeans. Designed for both style and comfort, these jeans offer a versatile fit that complements any casual or semi-casual ensemble. The timeless straight-leg silhouette ensures a classic look that never goes out of fashion.",

  "Embrace the cozy charm of fall with our Plaid Flannel Shirt. The classic plaid pattern and soft flannel fabric make it a seasonal favorite. Whether you're spending a day outdoors or enjoying a laid-back weekend, this shirt adds a touch of rustic style to your wardrobe.",

  "Channel urban chic with our Leather Bomber Jacket. The sleek design and high-quality leather make this jacket a standout piece in any wardrobe. Perfect for casual outings or nights on the town, the Leather Bomber Jacket is a bold choice for those who appreciate edgy style.",

  "Embrace the beauty of nature with our Floral Print Ruffle Top. The delicate floral pattern and charming ruffle details add a touch of romance to any outfit. Whether you're dressing up for a date night or adding a feminine touch to your everyday style, this top is a delightful choice.",

  "Elevate your basics with our Classic Cotton Crew Neck Tee. The soft cotton fabric and timeless design make this tee a comfortable and stylish essential. Perfect for layering or as a standalone piece, it's a versatile addition to any casual wardrobe.",

  "Embrace laid-back comfort with our Relaxed Fit V-Neck Tee. The loose fit and V-neck design make it a go-to choice for casual days. Whether you're lounging at home or heading out for a relaxed outing, this tee ensures you stay comfortable without compromising on style.",
];
