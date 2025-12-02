import { Link } from "react-router-dom";

const AdminHomePage = () => {
  const orders = [
    {
      _id: 12345,
      user: {
        name: "John Doe",
      },
      totalPrice: 250,
      status: "Processing",
    },
    {
      _id: 12346,
      user: {
        name: "Jane Smith",
      },
      totalPrice: 300,
      status: "Shipped",
    },
    {
      _id: 12347,
      user: {
        name: "Alice Johnson",
      },
      totalPrice: 400,
      status: "Delivered",
    },
    {
      _id: 12348,
      user: {
        name: "Bob Brown",
      },
      totalPrice: 500,
      status: "Cancelled",
    },
    {
      _id: 12349,
      user: {
        name: "Charlie Davis",
      },
      totalPrice: 600,
      status: "Pending",
    },
    {
      _id: 12350,
      user: {
        name: "Eve Wilson",
      },
      totalPrice: 700,
      status: "Processing",
    },
  ];

  // Helper function to determine status badge color
  const getStatusColor = (status) => {
    switch (status) {
      case "Delivered":
        return "bg-green-100 text-green-800";
      case "Shipped":
        return "bg-blue-100 text-blue-800";
      case "Processing":
        return "bg-yellow-100 text-yellow-800";
      case "Cancelled":
        return "bg-red-100 text-red-800";
      case "Pending":
      default:
        return "bg-gray-100 text-gray-800";
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h1 className="text-3xl font-bold mb-6">Admin Dashboard</h1>

      {/* Dashboard Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
        <div className="p-4 shadow-md rounded-lg ">
          <h2 className="text-xl font-semibold ">Revenue</h2>
          <p className="text-2xl mt-2">$12,345</p>
        </div>
        <div className="p-4 shadow-md rounded-lg ">
          <h2 className="text-xl font-semibold ">Total Orders</h2>
          <p className="text-2xl mt-2">200</p>
          <Link to="/admin/orders" className="text-blue-500 hover:underline">
            Manage Orders
          </Link>
        </div>
        <div className="p-4 shadow-md rounded-lg ">
          <h2 className="text-xl font-semibold ">Total Products</h2>
          <p className="text-2xl mt-2">150</p>
          <Link to="/admin/products" className="text-blue-500 hover:underline">
            Manage Products
          </Link>
        </div>
      </div>

      {/* Recent Orders Section */}
      <div className="mt-6">
        <h2 className="text-2xl font-bold mb-4">Recent Orders</h2>
        <div className="overflow-x-auto w-full shadow-md rounded-lg">
          <table className="min-w-full w-full text-left text-gray-500">
            <thead className="bg-gray-100 text-xs uppercase text-gray-700">
              <tr>
                <th className="py-3 px-4">Order ID</th>
                <th className="py-3 px-4">User</th>
                <th className="py-3 px-4">Total Price</th>
                <th className="py-3 px-4">Status</th>
              </tr>
            </thead>
            <tbody>
              {/* Map over the orders array to create table rows */}
              {orders.map((order) => (
                <tr
                  key={order._id}
                  className="bg-white border-b hover:bg-gray-50"
                >
                  <td className="py-4 px-4 font-medium text-gray-900 whitespace-nowrap">
                    {order._id}
                  </td>
                  <td className="py-4 px-4">{order.user.name}</td>
                  <td className="py-4 px-4">${order.totalPrice.toFixed(2)}</td>
                  <td className="py-4 px-4">
                    {/* Add a status badge for better visual indication */}
                    <span
                      className={`px-3 py-1 inline-flex text-xs leading-5 font-semibold rounded-full ${getStatusColor(
                        order.status
                      )}`}
                    >
                      {order.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

export default AdminHomePage;
