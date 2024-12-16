const Cart = ({ cart, updateQuantity, removeFromCart }) => {
  const totalPrice = cart.reduce((total, item) => total + item.price * item.quantity, 0);
  const discountedPrice = totalPrice * 0.9;

  return (
    <div className="container mx-auto p-4">
      <h1 className="text-2xl font-bold mb-4">Cart</h1>
      {cart.length === 0 ? (
        <p>Your cart is empty.</p>
      ) : (
     
        
        <div>
        <div className="text-right mt-4">
            <p className="font-bold">Total Price: ${totalPrice.toFixed(2)}</p>
            <p className="font-bold text-green-500 text-xl">Discounted Price: ${discountedPrice.toFixed(2)}</p>
          </div>
          <div className="flex flex-row flex-wrap gap-16 mt-5">
          {cart.map((item) => (
            <div key={item.id} className=" flex flex-col border p-4 rounded shadow mb-4 w-64 justify-evenly">
            <img className=" h-60 w-60 rounded-lg" src={item.image} alt={item.title}/>
              <h2 className="font-semibold text-lg">{item.title}</h2>
              <p className="text-gray-600">${item.price} x {item.quantity}</p>
              <div className="flex items-center mt-2">
                <button
                  className="bg-gray-300 px-2 py-1 rounded"
                  onClick={() => updateQuantity(item.id, item.quantity - 1)}
                >
                  -
                </button>
                <span className="mx-2">{item.quantity}</span>
                <button
                  className="bg-gray-300 px-2 py-1 rounded"
                  onClick={() => updateQuantity(item.id, item.quantity + 1)}
                >
                  +
                </button>
              </div>
              <button
                className="bg-red-500 text-white px-4 py-2 mt-2 rounded"
                onClick={() => removeFromCart(item.id)}
              >
                Remove
              </button>
              
            </div>
            
          ))}
          </div>
          
        </div>
      )}
      
    </div>
    
  );
};

export default Cart;