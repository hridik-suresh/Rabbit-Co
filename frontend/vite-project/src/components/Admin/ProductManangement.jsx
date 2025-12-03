import { Link } from "react-router-dom";

const ProductManangement = () => {
  const products = [
    { id: 1, name: "Product 1", price: 29.99, sku: "SKU001" },
    { id: 2, name: "Product 2", price: 49.99, sku: "SKU002" },
    { id: 3, name: "Product 3", price: 19.99, sku: "SKU003" },
    { id: 4, name: "Product 4", price: 99.99, sku: "SKU004" },
    { id: 5, name: "Product 5", price: 59.99, sku: "SKU005" },
  ];

  const handleDelete = (id) => {
    if (window.confirm("Are you sure you want to delete this product?")) {
      // Implement delete logic here
      console.log(`Deleted Product ID: ${id}`);
    }
  };

  return (
    <div className="max-w-7xl mx-auto p-6">
      <h2 className="text-2xl font-bold mb-4">Product Management</h2>
      <div className="overflow-x-auto shadow-md sm:rounded-lg">
        <table className="min-w-full text-left text-gray-500">
          <thead className="bg-gray-50 text-gray-700 uppercase">
            <tr>
              <th className="py-3 px-6">Product Name</th>
              <th className="py-3 px-6">Price</th>
              <th className="py-3 px-6">SKU</th>
              <th className="py-3 px-6">Actions</th>
            </tr>
          </thead>
          <tbody>
            {products.length > 0 ? (
              products.map((product) => (
                <tr
                  key={product.id}
                  className="bg-white border-b hover:bg-gray-50 cursor-pointer"
                >
                  <td className="p-4 font-medium text-gray-900 whitespace-nowrap">
                    {product.name}
                  </td>
                  <td className="p-4">${product.price.toFixed(2)}</td>
                  <td className="p-4">{product.sku}</td>
                  <td className="p-4">
                    <Link
                      to={`/admin/products/${product.id}/edit`}
                      className="bg-yellow-500 text-white px-3 py-1 rounded hover:bg-yellow-600"
                    >
                      Edit
                    </Link>
                    <button
                      onClick={() => {
                        handleDelete(product._id);
                      }}
                      className="bg-red-500 text-white px-3 py-1 rounded hover:bg-red-600 ml-2"
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="4" className="p-4 text-center text-gray-500">
                  No products found.
                </td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};
export default ProductManangement;
