import { createBrowserRouter, RouterProvider } from "react-router-dom";
import { useState } from "react";
import Home from "./Pages/Home";
import Cart from "./Pages/Cart";
import NavWrapper from "./Wrapper/NavWrapper";
import ProductDatas from "./Loaders/ProductDatas";

const App = () => {
  const [cart, setCart] = useState([]);

  const addToCart = (product) => {
    setCart((prevCart) => {
      const isProductInCart = prevCart.find((item) => item.id === product.id);
      if (isProductInCart) {
        return prevCart.map((item) =>
          item.id === product.id ? { ...item, quantity: item.quantity + 1 } : item
        );
      }
      return [...prevCart, { ...product, quantity: 1 }];
    });
  };

  const removeFromCart = (productId) => {
    setCart((prevCart) => prevCart.filter((item) => item.id !== productId));
  };

  const updateQuantity = (productId, quantity) => {
    setCart((prevCart) =>
      prevCart.map((item) =>
        item.id === productId ? { ...item, quantity: Math.max(1, quantity) } : item
      )
    );
  };

  const routes = [
    {
      path: '/',
      element: <NavWrapper cartCount={cart.length} />,
      children: [
        {
          path: '',
          element: <Home addToCart={addToCart} />,
          loader: ProductDatas,
        },
        {
          path: 'cart',
          element: (
            <Cart
              cart={cart}
              updateQuantity={updateQuantity}
              removeFromCart={removeFromCart}
            />
          ),
        },
      ],
    },
  ];

  const router = createBrowserRouter(routes);

  return <RouterProvider router={router} />;
};

export default App;
