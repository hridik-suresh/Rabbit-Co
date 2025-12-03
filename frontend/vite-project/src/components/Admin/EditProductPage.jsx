import { useState } from "react";

const EditProductPage = () => {
  const [productData, setProductData] = useState({
    name: "",
    description: "",
    price: 0,
    countInStock: 0,
    sku: "",
    category: "",
    brand: "",
    sizes: [],
    colors: [],
    collections: "",
    material: "",
    gender: "",
    images: [
      {
        url: "https://picsum.photos/150?random=1",
      },
      {
        url: "https://picsum.photos/150?random=2",
      },
    ],
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setProductData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleImageUpload = async (e) => {
    const files = Array.from(e.target.files);

    console.log(files);
    // Implement image upload logic here
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Implement form submission logic here
  };

  return (
    <div className="max-w-5xl mx-auto p-6 shadow-md rounded-md">
      <h2 className="text-3xl font-bold mb-6">Edit Product</h2>
      <form onSubmit={handleSubmit}>
        {/* name */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="name">
            Product Name
          </label>
          <input
            type="text"
            name="name"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={productData.name}
            onChange={handleChange}
            required
          />
        </div>
        {/* description */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="description">
            Description
          </label>
          <textarea
            name="description"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={productData.description}
            onChange={handleChange}
            required
          />
        </div>
        {/* price */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="price">
            Price
          </label>
          <input
            type="number"
            name="price"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={productData.price}
            onChange={handleChange}
          />
        </div>
        {/* countInStock */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="countInStock">
            Count In Stock
          </label>
          <input
            type="number"
            name="countInStock"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={productData.countInStock}
            onChange={handleChange}
          />
        </div>
        {/* sku */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="sku">
            SKU
          </label>
          <input
            type="text"
            name="sku"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={productData.sku}
            onChange={handleChange}
          />
        </div>
        {/*sizes */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="sizes">
            Sizes (comma separated)
          </label>
          <input
            type="text"
            name="sizes"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={productData.sizes.join(",")}
            onChange={(e) =>
              setProductData((prevData) => ({
                ...prevData,
                sizes: e.target.value.split(",").map((size) => size.trim()),
              }))
            }
          />
        </div>
        {/* colors */}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="colors">
            Colors (comma separated)
          </label>
          <input
            type="text"
            name="colors"
            className="w-full px-3 py-2 border border-gray-300 rounded-md"
            value={productData.colors.join(",")}
            onChange={(e) =>
              setProductData((prevData) => ({
                ...prevData,
                colors: e.target.value.split(",").map((color) => color.trim()),
              }))
            }
          />
        </div>

        {/*image upload*/}
        <div className="mb-4">
          <label className="block text-gray-700 mb-2" htmlFor="images">
            Product Images
          </label>
          <input
            type="file"
            name="images"
            multiple
            onChange={handleImageUpload} // Implement image upload handler
            className="block px-4 py-2 bg-gray-500 text-white border border-gray-300 rounded-md cursor-pointer hover:bg-gray-600 transition"
          />
          <div className="mt-4 flex space-x-4">
            {productData.images.map((image, index) => (
              <div
                key={index}
                className="w-24 h-24 border border-gray-300 rounded-md overflow-hidden"
              >
                <img
                  src={image.url}
                  alt={`Product Image ${index + 1}`}
                  className="w-full h-full object-cover"
                />
              </div>
            ))}
          </div>
        </div>
        <button className="w-full py-2 bg-green-500 text-white rounded-md hover:bg-green-600 transition">
          Save Changes
        </button>
      </form>
    </div>
  );
};

export default EditProductPage;
