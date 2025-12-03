const OrderManagementr = () => {
  const orders = [
    {
      _id: 1245,
      user: { name: "John Doe" },
      totalPrice: 250,
      status: "Processing",
    },
    {
      _id: 1246,
      user: { name: "Jane Smith" },
      totalPrice: 300,
      status: "Shipped",
    },
    {
      _id: 1247,
      user: { name: "Alice Johnson" },
      totalPrice: 150,
      status: "Delivered",
    },
  ]; // Placeholder for order data

  const handleStatusChange = (orderId, newStatus) => {
    // Logic to handle status change (e.g., API call to update order status)
    console.log(`Order ID: ${orderId}, New Status: ${newStatus}`);
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-2xl font-bold mb-4">Order Management</h1>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full bg-white">
          <thead className="bg-gray-200 uppercase text-sm leading-normal">
            <tr>
              <th className="py-3 px-6 text-left">Order ID</th>
              <th className="py-3 px-6 text-left">Customer Name</th>
              <th className="py-3 px-6 text-left">Total Price</th>
              <th className="py-3 px-6 text-left">Status</th>
              <th className="py-3 px-6 text-left">Actions</th>
            </tr>
          </thead>
          <tbody>
            {orders.length > 0 ? (
              orders.map((order) => (
                <tr
                  key={order._id}
                  className="border-b cursor-pointer hover:bg-gray-100"
                >
                  <td className="py-4 px-6 text-gray-900">#{order._id}</td>
                  <td className="py-4 px-6">{order.user.name}</td>
                  <td className="py-4 px-6">${order.totalPrice}</td>
                  <td className="py-4 px-6">
                    <select
                      value={order.status}
                      onChange={(e) => {
                        handleStatusChange(order._id, e.target.value);
                      }}
                      className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full p-2.5"
                    >
                      <option value="Processing">Processing</option>
                      <option value="Shipped">Shipped</option>
                      <option value="Delivered">Delivered</option>
                      <option value="Cancelled">Cancelled</option>
                    </select>
                  </td>
                  <td className="py-4 px-6">
                    <button
                      onClick={() => handleStatusChange(order._id, "Delivered")}
                      className="bg-green-600 text-white px-3 py-1 rounded-lg hover:bg-green-700"
                    >
                      Mark as Delivered
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="5" className="text-center py-4 px-6">
                  No orders found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default OrderManagementr;
