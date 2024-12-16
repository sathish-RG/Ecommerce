const ProductDatas = async () => {
  try {
    const controller = new AbortController();
    const timeoutId = setTimeout(() => controller.abort(), 10000); // 10-second timeout

    const response = await fetch("https://fakestoreapi.com/products", {
      signal: controller.signal,
    });

    clearTimeout(timeoutId);

    if (!response.ok) {
      throw new Error("Failed to fetch products.");
    }

    return await response.json();
  } catch (error) {
    console.error("Error fetching products:", error.message);
    throw new Response(error.message, { status: 500 });
  }
};

export default ProductDatas;
