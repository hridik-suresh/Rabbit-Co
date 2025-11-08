import { IoMdClose } from "react-icons/io";

function CartDrawer({ isDrawerOpen, toggleCartDrawer }) {
  

  return (
    <div
      className={`fixed top-0 right-0 h-full w-3/4 sm:w-1/2 md:w-1/4 bg-white shadow-lg transform transition-transform duration-300 flex flex-col z-50 ${
        isDrawerOpen ? "translate-x-0" : "translate-x-full"
      }`}
    >
      <div className="flex justify-end p-4">
        <button onClick={toggleCartDrawer}>
          <IoMdClose className="size-6 text-gray-600"/>
        </button>
      </div>
    </div>
  );
}

export default CartDrawer;
