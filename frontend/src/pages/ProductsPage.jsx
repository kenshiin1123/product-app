import Header from "../components/Header";
import { Link } from "react-router-dom";
import { useProductStore } from "../store/product";
import { useEffect, useState } from "react";
import { ToastContainer, toast, Flip } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import Product from "../components/Product";
import UpdateModal from "../components/UpdateModal";
import { useGlobalStore } from "../store/global";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const ProductsPage = () => {
  //? When a product card's update button is clicked, this will capture the card's Id
  //? so that the update modal can identify which product is to be updated.
  const [selectedProduct, setSelectedProduct] = useState("");

  //? A global state for fetching product from the server
  const { getProducts, products, deleteProduct, updateProduct, isGettingProducts } = useProductStore();
  //? Modal State: false = hidden. true = show
  const [modalDisplay, setModalDisplay] = useState(false);

  const handleUpdateModal = (productId) => {
    //? Get the ID of the product that the user wanted to update
    setSelectedProduct(productId);
    //? Opens or closes the update modal
    setModalDisplay(!modalDisplay);
  };

  //? Get the products as the page is loaded
  useEffect(() => {
    getProducts();
  }, [getProducts]);

  const handleDeleteProduct = async (productId) => {
    const { success, message } = await deleteProduct(productId);
    if (!success) toast.error(message);
    else {
      toast.success(message);
    }
  };

  const handleProductUpdate = async (productId, updatedProduct) => {
    const { success, message } = await updateProduct(productId, updatedProduct);
    if (!success) toast.error(message);
    else {
      toast.success(message);
    }
  };

  const { darkMode } = useGlobalStore();

  const MainTag = (
    <main>
      <ToastContainer transition={Flip} position="bottom-right" theme={darkMode ? "dark" : "light"} />
      <Header text="Products Page" />
      {/* Only display this "No product found" when the fetch is finished or there are actually no products */}
      {products.length === 0 && isGettingProducts === false && (
        <div className="mx-auto mt-10 flex flex-col gap-10 text-center">
          <p className="text-2xl">No products available ☹️</p>
          <Link
            className="text-1xl mx-auto w-fit rounded border border-black border-opacity-20 p-3 transition-transform duration-75 hover:translate-y-[-0.1rem] hover:shadow-md dark:border-white"
            to={"/products/create"}>
            Create a Product
          </Link>
        </div>
      )}
      {isGettingProducts && (
        <div className="mt-20 flex animate-spin items-center justify-center text-7xl">
          <AiOutlineLoading3Quarters className="" />
        </div>
      )}
      <div className="mx-auto my-10 grid w-[90%] gap-10 px-5 sm:grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
        {products.map((product) => (
          <Product
            key={product._id}
            product={product}
            handleDeleteProduct={handleDeleteProduct}
            handleUpdateModal={handleUpdateModal}
            setModalDisplay={setModalDisplay}
          />
        ))}
      </div>
      <UpdateModal
        handleUpdateModal={handleUpdateModal}
        modalDisplay={modalDisplay}
        selectedProduct={selectedProduct}
        handleProductUpdate={handleProductUpdate}
      />
    </main>
  );

  return MainTag;
};

export default ProductsPage;
