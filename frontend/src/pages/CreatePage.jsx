import Header from "../components/Header";
import { useState } from "react";
import { useProductStore } from "../store/product";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import { useGlobalStore } from "../store/global";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

export default function CreatePage() {
  const initialNewProduct = { name: "", price: "", image: "" };
  const [newProduct, setNewProduct] = useState(initialNewProduct);
  const { isCreatingProduct } = useProductStore();

  const { createProduct } = useProductStore();
  const handleAddProduct = async () => {
    const { success, message } = await createProduct(newProduct);
    if (!success) toast.error(message);
    else {
      toast.success(message);
      setNewProduct(initialNewProduct);
    }
  };

  const { darkMode } = useGlobalStore();
  return (
    <main className="mb-10">
      <ToastContainer transition={Flip} position="bottom-right" theme={darkMode ? "dark" : "light"} />
      <Header text="Enter your product information." customTextSize="text-3xl" />
      <div
        className={`${isCreatingProduct && "items-center justify-center text-6xl [&>button]:hidden [&>input]:hidden [&>label]:hidden"} border-1 [&>input]:dark:border-1 mx-auto mt-10 flex min-h-72 flex-col rounded border-gray-600 bg-white px-7 py-6 shadow-sm shadow-gray-600 max-sm:w-[80%] sm:w-[80%] md:w-1/2 lg:w-2/5 dark:border dark:bg-black dark:shadow-none [&>input]:mb-3 [&>input]:rounded [&>input]:border [&>input]:border-gray-600 [&>input]:border-opacity-50 [&>input]:py-2 [&>input]:indent-3 [&>input]:text-black [&>input]:shadow-sm [&>input]:dark:border [&>input]:dark:bg-black [&>input]:dark:text-white [&>label]:mb-1`}>
        {isCreatingProduct && <AiOutlineLoading3Quarters className="animate-spin" />}

        <label htmlFor="name">Name</label>
        <input
          onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
          type="text"
          id="name"
          value={newProduct.name}
        />
        <label htmlFor="price">Price</label>
        <input
          onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
          type="text"
          id="price"
          value={newProduct.price}
        />
        <label htmlFor="image">Image URL</label>
        <input
          onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
          type="text"
          id="image"
          value={newProduct.image}
        />
        <button
          className="mx-auto mt-3 w-24 rounded bg-lime-500 py-1 shadow-md outline-none outline outline-1 transition-colors hover:bg-lime-600 active:bg-lime-500 active:shadow-sm dark:bg-black dark:outline-gray-600 dark:hover:bg-white dark:hover:text-black"
          onClick={handleAddProduct}>
          Submit
        </button>
      </div>
    </main>
  );
}
