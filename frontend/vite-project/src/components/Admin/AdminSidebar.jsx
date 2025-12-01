const AdminSidebar = () => {
  return (
    <div className="w-64 h-full bg-gray-900 text-white flex flex-col">
      <div className="p-4 border-b border-gray-700">
        <h2 className="text-2xl font-semibold">Admin Panel</h2>
      </div>
      <nav className="flex-1 p-4">
        <ul className="space-y-4">
          <li>
            <a
              href="/admin/dashboard"
              className="block hover:bg-gray-700 p-2 rounded"
            >
              Dashboard
            </a>
          </li>
          <li>
            <a
              href="/admin/products"
              className="block hover:bg-gray-700 p-2 rounded"
            >
              Products
            </a>
          </li>
          <li>
            <a
              href="/admin/orders"
              className="block hover:bg-gray-700 p-2 rounded"
            >
              Orders
            </a>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default AdminSidebar;
