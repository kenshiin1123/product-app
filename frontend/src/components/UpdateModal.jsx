import PropTypes from "prop-types";
import { useEffect, useState } from "react";
import "react-toastify/dist/ReactToastify.css";
import { useProductStore } from "../store/product";
import { AiOutlineLoading3Quarters } from "react-icons/ai";

const UpdateModal = ({ modalDisplay = false, handleUpdateModal, selectedProduct, handleProductUpdate }) => {
  const initialNewProduct = { name: "", price: "", image: "" };
  const [newProduct, setNewProduct] = useState(initialNewProduct);

  const { getAProduct } = useProductStore();

  const [isFetching, setIsFetching] = useState(false);
  const updateIsFetching = (bool) => {
    setIsFetching(bool);
  };

  //? Function to handle input changes
  const handleInputChange = (e) => {
    const { id, value } = e.target;
    setNewProduct((prevProduct) => ({ ...prevProduct, [id]: value }));
  };

  //? Fetch product details only if selectedProduct is not an object
  useEffect(() => {
    const fetchProduct = async () => {
      if (typeof selectedProduct !== "object") {
        try {
          updateIsFetching(true);
          const data = await getAProduct(selectedProduct);
          if (data?.data?.data) {
            setNewProduct(data.data.data);
          }
        } catch (error) {
          console.error("Failed to fetch product:", error);
        } finally {
          updateIsFetching(false);
        }
      }
    };

    if (selectedProduct) {
      fetchProduct();
    }
  }, [getAProduct, selectedProduct]);

  //* Keyboard Shortcuts: [esc] Closes Modal.
  useEffect(() => {
    const handleEscPress = (event) => {
      if (event.key === "Escape" && modalDisplay === true) {
        handleUpdateModal();
      }
    };
    window.addEventListener("keydown", handleEscPress);
    return () => {
      window.removeEventListener("keydown", handleEscPress);
    };
  });

  return (
    <div
      className={`fixed top-0 ${modalDisplay ? "flex" : "hidden"} flex h-full w-full items-center justify-center bg-gray-800 bg-opacity-15 text-black backdrop-blur-sm`}>
      <div
        className={`${isFetching ? "flex min-h-60 items-center justify-center [&>header]:hidden [&>main]:hidden" : null} no-scrollbar max-h-[80%] w-[40%] overflow-scroll rounded bg-white py-5 shadow-sm shadow-gray-400 outline-1 max-sm:w-[80%] sm:mt-14 md:w-1/2 lg:w-2/5 lg:py-6 dark:bg-black dark:text-white dark:shadow-none dark:outline dark:outline-[#25292e]`}>
        {isFetching && (
          <div className="flex animate-spin text-5xl">
            <AiOutlineLoading3Quarters />
          </div>
        )}
        <header className="mb-1 text-center text-3xl">Update Product</header>
        <main
          className={`flex flex-col px-7 py-3 lg:py-6 [&>input]:mb-3 [&>input]:rounded [&>input]:border [&>input]:border-black [&>input]:border-opacity-50 [&>input]:py-2 [&>input]:indent-3 [&>input]:text-black`}>
          <label htmlFor="name">Name</label>
          <input onChange={handleInputChange} type="text" id="name" value={newProduct.name} />

          <label htmlFor="price">Price</label>
          <input onChange={handleInputChange} type="text" id="price" value={newProduct.price} />

          <label htmlFor="image">Image URL</label>
          <input onChange={handleInputChange} type="text" id="image" value={newProduct.image} />

          <section className="mx-auto flex gap-2 [&>button]:mx-auto [&>button]:mt-3 [&>button]:w-20 [&>button]:rounded [&>button]:py-1 [&>button]:dark:border [&>button]:dark:border-gray-600 [&>button]:dark:bg-black">
            <button
              onClick={handleUpdateModal}
              className="bg-red-400 shadow-md hover:bg-red-600 dark:hover:bg-white dark:hover:text-black">
              Cancel
            </button>
            <button
              onClick={() => handleProductUpdate(selectedProduct, newProduct).then(() => handleUpdateModal())}
              className="bg-lime-400 shadow-md hover:bg-lime-500 dark:hover:bg-white dark:hover:text-black">
              Confirm
            </button>
          </section>
        </main>
      </div>
    </div>
  );
};

// PropTypes definition outside component for better performance
UpdateModal.propTypes = {
  modalDisplay: PropTypes.bool,
  handleUpdateModal: PropTypes.func.isRequired,
  selectedProduct: PropTypes.oneOfType([PropTypes.string, PropTypes.object]),
  handleProductUpdate: PropTypes.func.isRequired,
};

export default UpdateModal;
