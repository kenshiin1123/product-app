import { MdDelete } from "react-icons/md";
import { FaEdit } from "react-icons/fa";
import PropTypes from "prop-types";
import { useProductStore } from "../store/product";

const Product = ({ product, handleDeleteProduct, handleUpdateModal }) => {
  const { isDeletingProduct } = useProductStore();

  const handleDelete = (id) => {
    // You can delete again when it is finished deleting a product
    !isDeletingProduct && handleDeleteProduct(id);
  };

  return (
    <div
      key={product._id}
      className={`max-h-80 min-h-60 min-w-40 rounded bg-white pb-3 shadow-sm shadow-gray-500 outline-1 transition-opacity duration-300 dark:bg-black dark:shadow-sm dark:outline dark:outline-[#25292e]`}>
      <header className="flex max-h-[70%] min-h-[65%] scale-[.95] items-center justify-center overflow-hidden rounded">
        <img src={product.image} alt={product.name + " image"} className="mx-auto w-full" loading="lazy" />
      </header>
      <main className="flex h-[15%] items-center justify-around border-b border-b-black border-opacity-5 text-xl">
        <section>{product.name}</section>
        <section>₱{product.price}</section>
      </main>
      <footer className="flex h-[15%] justify-end gap-2 p-3 text-2xl text-black [&>button]:flex [&>button]:h-8 [&>button]:w-12 [&>button]:items-center [&>button]:justify-center [&>button]:rounded">
        <button onClick={() => handleDelete(product._id)} className="bg-red-400 hover:bg-red-600">
          <MdDelete />
        </button>
        <button onClick={() => handleUpdateModal(product._id)} className="bg-blue-400 hover:bg-blue-600">
          <FaEdit />
        </button>
      </footer>
    </div>
  );
};

Product.propTypes = {
  product: PropTypes.object.isRequired,
  handleDeleteProduct: PropTypes.func.isRequired,
  handleUpdateModal: PropTypes.func.isRequired,
};

export default Product;
