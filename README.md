# Shopparel: Fashion Ecommerce Web App

![Shopparel Logo](/images/home-page.png)

Welcome to Shopparel, your ultimate destination for fashion-forward online shopping! This web application is designed to provide users with a seamless and enjoyable shopping experience, offering a wide range of trendy clothing and accessories. Whether you're a fashion enthusiast or simply looking to upgrade your wardrobe, Shopparel has something for everyone.

## Table of Contents

1. [Features](#features)
2. [Installation](#installation)
3. [Usage](#usage)
4. [Screenshots](#screenshots)
5. [Technologies Used](#technologies-used)
6. [Contributing](#contributing)
7. [License](#license)

## Features

- **User Authentication:** Create an account, log in, and enjoy a personalized shopping experience.
- **Product Catalog:** Browse through a diverse collection of clothing and accessories.
- **Search and Filters:** Easily find products using search functionality and various filters.
- **Shopping Cart:** Add products to your cart and proceed to a secure checkout.
- **Order Tracking:** Track the status of your orders in real-time.
- **User Reviews:** Read and write product reviews to share your experiences.
- **Responsive Design:** Enjoy a seamless experience across various devices.

## Installation

To run Shopparel locally, follow these steps:

1. Clone the repository:

   ```bash
   git clone https://github.com/your-username/shopparel.git
   ```

2. Install dependencies in both frontend and backend:

   ```bash
   cd shopparel/client
   npm install
   ```

   ```bash
   cd shopparel/server
   npm install
   ```

3. **Set up the MongoDB Database:**

   - Shopparel uses MongoDB as its database. Follow these steps to set up the database:

     - Ensure MongoDB is installed on your system. You can download it [here](https://www.mongodb.com/try/download/community).

     - Create a new MongoDB database for Shopparel.

     - Configure the database connection in the `.env` file by adding the MongoDB connection URI. For example:

       ```
       MONGODB_URI=mongodb://localhost:27017/shopparel
       ```

     - Optionally, you can use a tool like MongoDB Compass to visually manage your database and collections.

     - Seed the database with initial data if needed. You can use a script or manually insert data into collections.

Now, your MongoDB database is ready for Shopparel. Adjust the connection details and other configurations as per your environment.

4. Configure environment variables:

   - Create a `.env` file and set up variables like `JWT_SECRET`, etc.

5. Start the application:
   ```bash
   cd shopparel/client
   npm run dev
   ```
   ```bash
   cd shopparel/server
   npm run dev
   ```

Visit `http://localhost:5173` in your web browser to access Shopparel.

## Usage

1. **Homepage:**

   - Explore the latest trends and featured products.

2. **Product Page:**

   - Click on a product to view detailed information, pricing, and customer reviews.

3. **Shopping Cart:**

   - Add products to your cart and proceed to checkout.

4. **User Account:**
   - Log in to manage your profile, track orders, and view order history.

## Screenshots

![Homepage](/images/home-page.png)
_Homepage showcasing the latest trends._

![Product Page](/images/product-page.png)
_Product page with detailed information and reviews._

![Product Listing Page](/images/search-page.png)
_Search results tailored for effortless discovery._

![Shopping Cart](/images/shopping-cart.png)
_Shopping cart for easy checkout._

## Technologies Used

- Frontend: HTML, CSS, JavaScript, TypeScript, React
- Backend: Node.js, Express, MongoDB
- Authentication: JWT
- Other: Context-API, CORS

## Contributing

We welcome contributions! Fork the repository, make your changes, and submit a pull request. Please follow the [contributing guidelines](CONTRIBUTING.md).

## License

This project is licensed under the [MIT License](LICENSE). Feel free to use, modify, and distribute as needed.

Happy Shopping! 🛍️
