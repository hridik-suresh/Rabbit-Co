import { IoMdClose } from "react-icons/io";
import CartContents from "../Cart/CartContents";

function CartDrawer({ isDrawerOpen, toggleCartDrawer }) {
  return (
    <div
      className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 md:w-120 bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        isDrawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="size-6 text-gray-600" />
        </button>
      </div>
      <div className="grow p-4 overflow-y-auto">
        <h2 className="text-xl font-semibold mb-4">Shopping Cart</h2>
        {/* Cart items will go here */}
        <CartContents />
      </div>

      <div className="p-4 bg-white sticky bottom-0">
        <button className="w-full py-3 bg-black text-white rounded-lg font-semibold hover:bg-gray-800 transition">
          Checkout
        </button>
        <p className="text-sm tracking-tight text-gray-500 mt-2 text-center">
          Shipping, taxes, and discounts will be calculated at checkout.
        </p>
      </div>
    </div>
  );
}

export default CartDrawer;
