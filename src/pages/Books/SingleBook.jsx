import React from "react";
import { useParams } from "react-router-dom";
import { getImgUrl } from "../../utils/getImgUrl";
import { FiShoppingCart } from "react-icons/fi";
import { useDispatch } from "react-redux";
import { addToCart } from "../../redux/features/cart/cartSlice";
import { useFetchBookByIdQuery } from "../../redux/features/books/bookApi";

const SingleBook = () => {
  const { id } = useParams();
  const dispatch =useDispatch();
  const { data: book = [] } = useFetchBookByIdQuery(id);
  const handleAddToCart =(product)=>{
      dispatch(addToCart(product));
  }
  return (
    <div className="max-w-lg shadow-md p-5 mx-auto">
      <h1 className="text-2xl font-bold mb-6">{book?.title}</h1>
      <div className="">
        <div>
            <img
            src={`${getImgUrl(book?.coverImage)}`}
            alt={book?.title}
            className="mb-8"
            />
        </div>
        <div className="mb-5">
            <p className="text-gray-700 mb-2"><strong>Author:</strong>{book?.author || "admin"}</p>
            <p className="text-gray-700 mb-4"><strong>published:</strong>{new Date(book?.createdAt).toLocaleDateString("in")}</p>
            <p className="text-gray-700 mb-4"><strong>Category:</strong>{book?.category}</p>
            <p className="text-gray-700 mb-2"><strong>Description:</strong>{book?.description}</p>
        </div>
        <button onClick={()=>handleAddToCart(book)} className="btn-primary px-6 space-x-1 flex items-center gap-1">
            <FiShoppingCart className="" /><span>Add to Cart</span>
        </button>
      </div>
    </div>
  );
};

export default SingleBook;
