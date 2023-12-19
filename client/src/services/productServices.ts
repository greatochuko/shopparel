import { BASE_URL } from "./authServices";

export async function fetchProducts() {
  try {
    const res = await fetch(`${BASE_URL}/products`);
    const data = await res.json();
    return data;
  } catch (error) {
    return { error: (error as Error).message };
  }
}

export async function fetchBrandProducts(brand: string) {
  try {
    const res = await fetch(`${BASE_URL}/products/brand/${brand}`);
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
