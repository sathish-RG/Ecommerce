import { useEffect, useState } from "react";
import ProductDatas from "../Loaders/ProductDatas";
import { useNavigate } from "react-router-dom";

const Home = ({ addToCart }) => {
  const [list, setList] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const data = await ProductDatas();
        if (Array.isArray(data)) {
          setList(data);
        } else {
          setError("Data is not an array.");
        }
      } catch (err) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    fetchData();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <div className="flex flex-row flex-wrap justify-around gap-5 pt-5">
      {list.map((product) => (
        <div
          key={product.id}
          className="flex flex-col w-64 h-auto rounded gap-3 p-5 border border-solid border-gray-300"
        >
          <img src={product.image} alt={product.title} className="h-60 w-60" />
          {product.title}
          <span className="font-bold">${product.price}</span>
          <button
            className="bg-orange-500 rounded p-1 text-white font-bold"
            onClick={() => addToCart(product)}
          >
            Add to cart
          </button>
        </div>
      ))}
    </div>
  );
};

export default Home;

