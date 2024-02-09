import { BASE_URL } from "./authServices";

export type ProductInfoType = {
  _id: string;
  name: string;
  description: string;
  price: number;
  shipping: number;
  discount: number;
  store: string;
};

export type ProductImagesType = {
  _id: string;
  imgUrl: string;
  images: string[];
};

export type ProductSpecsType = {
  _id: string;
  colors: string[];
  sizes: string[];
  gender: string;
  quantity: number;
  categories: string[];
  isPublished: boolean;
};

export async function fetchProducts() {
  try {
    const res = await fetch(`${BASE_URL}/products`);
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchProduct(productId: string) {
  try {
    const res = await fetch(`${BASE_URL}/product/${productId}`);
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchSearchProducts(query: string, page: string) {
  try {
    const res = await fetch(
      `${BASE_URL}/products/search?query=${query}&page=${page}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchSimilarProducts(
  categories: string[],
  productId: string
) {
  try {
    const res = await fetch(
      `${BASE_URL}/products/similar?categories=${categories}&productId=${productId}`
    );
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchSaveProductInfo(productInfo: ProductInfoType) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/products/save-product-info`, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(productInfo),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchEditProduct(
  productInfo:
    | ProductInfoType
    | ProductImagesType
    | ProductSpecsType
    | { isPublished: boolean }
) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/product`, {
      method: "PATCH",
      headers: {
        "Content-Type": "application/json",
        Authorization: `Bearer ${token}`,
      },

      body: JSON.stringify(productInfo),
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchDeleteProduct(productId: string) {
  try {
    const token = localStorage.getItem("token");
    const res = await fetch(`${BASE_URL}/product/${productId}`, {
      method: "DELETE",
      headers: {
        Authorization: `Bearer ${token}`,
      },
    });
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}
