import { useEffect, useState } from "react";

function MyOrderPage() {
  const [orders, setOrders] = useState([]);

  useEffect(() => {
    const mockOrders = [
      {
        id: 1,
        createdAt: "2024-01-15",
        shippingAddress: { city: "New York", country: "USA" },
        orderItems: [{ name: "Product A", image: "https://picsum.photos/200" }],
        totalPrice: 99.99,
        isPaid: true,
      },
      {
        id: 2,
        createdAt: "2024-02-20",
        shippingAddress: { city: "Los Angeles", country: "USA" },
        orderItems: [{ name: "Product B", image: "https://picsum.photos/500" }],
        totalPrice: 149.99,
        isPaid: false,
      },
      {
        id: 3,
        createdAt: "2024-03-05",
        shippingAddress: { city: "Chicago", country: "USA" },
        orderItems: [{ name: "Product C", image: "https://picsum.photos/250" }],
        totalPrice: 199.99,
        isPaid: true,
      },
    ];
    setOrders(mockOrders);
  }, []);

  return (
    <div className="max-w-7xl mx-auto p-4 sm:p-6">
      <h2 className="text-xl sm:text-2xl font-bold mb-6">My Orders</h2>
      <div className="relative shadow-md sm:rounded-lg overflow-hidden">
        <table className="w-full text-sm text-left text-gray-500">
          <thead className="text-xs text-gray-700 uppercase bg-gray-50">
            <tr>
              <th className="px-6 py-3">Items</th>
              <th className="px-6 py-3">Order ID</th>
              <th className="px-6 py-3">Date</th>
              <th className="px-6 py-3">Shipping Address</th>
              <th className="px-6 py-3">Price</th>
              <th className="px-6 py-3">Status</th>
            </tr>
          </thead>
          <tbody>
            {orders.map((order) => (
              <tr key={order.id} className="border-b">
                <td className="px-6 py-4 flex items-center space-x-4">
                  <img
                    src={order.orderItems[0].image}
                    alt={order.orderItems[0].name}
                    className="w-12 h-12 object-cover rounded"
                  />
                  <div>
                    <p className="text-sm font-medium">
                      {order.orderItems[0].name}
                    </p>
                    <p className="text-xs text-gray-500">Qty: 1</p>
                  </div>
                </td>
                <td className="px-6 py-4">{order.id}</td>
                <td className="px-6 py-4">{order.createdAt}</td>
                <td className="px-6 py-4">
                  {order.shippingAddress.city}, {order.shippingAddress.country}
                </td>
                <td className="px-6 py-4">${order.totalPrice.toFixed(2)}</td>
                <td className="px-6 py-4">
                  {order.isPaid ? "Paid" : "Pending"}
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default MyOrderPage;
