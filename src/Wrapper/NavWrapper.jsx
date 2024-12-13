import { Outlet, useNavigate } from "react-router-dom";

const NavWrapper = ({ cartCount }) => {
  const navigate = useNavigate();

  return (
    <>
      <nav className="bg-orange-500 flex flex-row justify-between text-white">
        <button onClick={() => navigate("/")} className="font-bold text-4xl pl-5">
          Trendy Cart
        </button>
        <div className="flex flex-row justify-around items-center align-middle gap-4 p-3 pr-10">
          <button
            onClick={() => navigate("/")}
            className="font-bold text-xl hover:bg-orange-300 p-2 rounded-lg"
          >
            Home
          </button>
          <button
            onClick={() => navigate("/cart")}
            className="flex flex-row gap-1 font-bold text-xl hover:bg-orange-300 p-2 rounded-lg"
          >
            Cart<p>{cartCount}</p>
          </button>
        </div>
      </nav>
      <main>
        <Outlet />
      </main>
    </>
  );
};

export default NavWrapper;
