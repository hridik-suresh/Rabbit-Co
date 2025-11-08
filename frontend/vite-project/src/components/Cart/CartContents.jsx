import { RiDeleteBin3Line } from "react-icons/ri";

function CartContents() {
  const cartProducts = [
    {
      productId: 1,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=1",
    },
    {
      productId: 2,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=2",
    },
    {
      productId: 3,
      name: "T-shirt",
      size: "M",
      color: "Red",
      quantity: 1,
      price: 15,
      image: "https://picsum.photos/200?random=3",
    },
  ];
  return (
    <div>
      {cartProducts.map((product, index) => {
        return (
          <div key={index} className="flex items-start justify-between py-4 border-b">
            <div className="flex">
              <img
                src={product.image}
                alt={product.name}
                className="w-20 h-24 object-cover mr-4 rounded"
              />
              <div>
                <h3>{product.name}</h3>
                <p className="text-sm text-gray-500">
                  size: {product.size} | color: {product.color}
                </p>
                <div className="flex  items-center mt-2">
                  <button className="border flex items-center justify-center rounded px-2 py-s text-sm font-medium">
                    +
                  </button>
                  <span className="mx-4 border rounded px-2 flex items-center justify-center">
                    {product.quantity}
                  </span>
                  <button className="border flex items-center justify-center rounded px-2 py-s text-sm font-medium">
                    -
                  </button>
                </div>
              </div>
            </div>
            <div >
              <p className="font-medium">$ {product.price.toLocaleString()}</p>
              <button>
                <RiDeleteBin3Line className="size-6 mt-2 text-red-600" />
              </button>
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default CartContents;
