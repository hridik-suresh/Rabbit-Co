import { Link } from "react-router-dom";

function ProductGrid({ products }) {
  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
      {products.map((product, index) => (
        <Link to={`/products/${product._id}`} key={index} className="block">
          <div className="bg-white rounded-lg p-4">
            <div className="w-full h-94 mb-4">
              <img
                src={product.image[0].url}
                alt={product.image[0].alt}
                className="w-full h-full object-cover rounded-lg"
              />
            </div>
            <h3 className="text-lg font-medium mb-2">{product.name}</h3>
            <p className="text-gray-700">{product.price}</p>
          </div>
        </Link>
      ))}
    </div>
  );
}

export default ProductGrid;
