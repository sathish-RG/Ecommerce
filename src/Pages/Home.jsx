import { useLoaderData } from "react-router-dom";

const Home = ({ addToCart }) => {
  const list = useLoaderData(); // Get data directly from loader

  if (!list || list.length === 0) {
    return <div className="font-bold text-4xl">No products available.</div>;
  }

  return (
    <div className="flex flex-row flex-wrap justify-around gap-5 pt-5">
      {list.map((product) => (
        <div
          key={product.id}
          className="flex flex-col w-64 h-auto rounded gap-3 p-5 border border-solid border-gray-300 justify-evenly"
        >
          <img src={product.image} alt={product.title} className="h-60 w-60" />
          <h2 className="font-bold">{product.title}</h2>
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
