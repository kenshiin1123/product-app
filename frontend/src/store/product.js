import { create } from "zustand";

export const useProductStore = create((set) => ({
  //? Product initial Value
  products: [],
  isGettingProducts: true,
  isDeletingProduct: false,
  isCreatingProduct: false,

  createProduct: async (newProduct) => {
    //? Error handler: Makes the user cannot proceed to the next step if there are missing fields
    if (!newProduct.name || !newProduct.price || !newProduct.image)
      return { success: false, message: "All fields must be completed." };

    if (isNaN(parseInt(newProduct.price)) === true) {
      return { success: false, message: "The price must be a valid numerical value." };
    }

    try {
      set({ isCreatingProduct: true });
      const res = await fetch("/api/products/", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(newProduct),
      });
      const data = await res.json();
      set((state) => ({ products: [...state.products, data.data] }));
      return { success: true, message: "A new product has been successfully created." };
    } catch (error) {
      console.log(error);
    } finally {
      set({ isCreatingProduct: false });
    }
  },
  getProducts: async () => {
    try {
      const res = await fetch("/api/products");
      if (!res.ok) throw new Error("Failed to fetch data");
      const data = await res.json();
      set({ products: data.data });
    } catch (error) {
      console.log(error);
    } finally {
      set({ isGettingProducts: false });
    }
  },
  getAProduct: async (productId) => {
    try {
      const res = await fetch(`/api/products/${productId}`);
      const data = await res.json();
      return { success: true, data: data };
    } catch (error) {
      return { success: false, data: error };
    }
  },
  deleteProduct: async (productId) => {
    set({ isDeleting: true });
    try {
      const res = await fetch(`/api/products/${productId}`, {
        method: "DELETE",
      });

      const data = await res.json();

      if (!data.success) return { success: false, message: data.message };

      set((state) => ({
        products: state.products.filter((product) => product._id !== productId), // Filter out the deleted product
      }));

      return data;
    } catch (error) {
      console.log(error);
    } finally {
      set({ isDeleting: false });
    }
  },
  updateProduct: async (productId, updatedProduct) => {
    if (!updatedProduct.name || !updatedProduct.price || !updatedProduct.image)
      return { success: false, message: "All fields must be completed." };

    if (isNaN(parseInt(updatedProduct.price)) === true)
      return { success: false, message: "The price must be a valid numerical value." };

    try {
      const res = await fetch(`/api/products/${productId}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify(updatedProduct),
      });

      if (!res.ok) {
        const errorData = await res.json();
        return { success: false, message: errorData.message || "Product update was unsuccessful." };
      }

      const data = await res.json();

      if (!data.success) {
        return { success: false, message: data.message };
      }

      set((state) => ({
        products: state.products.map((product) => (product && product._id === productId ? data.data : product)),
      }));

      return { success: true, message: data.message, data: data.data }; // Return success when the update is successful
    } catch (error) {
      // Handle network or other unexpected errors
      console.error("Error updating product:", error);
      return { success: false, message: error.message || "Unexpected error occurred" };
    }
  },
}));
