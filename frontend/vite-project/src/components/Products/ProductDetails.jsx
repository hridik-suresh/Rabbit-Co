import { useState, useEffect } from "react";
import { toast } from "sonner";
import ProductGrid from "./ProductGrid";

const selectedProduct = {
  name: "Jacket",
  currentPrice: "$99.99",
  originalPrice: "$149.99",
  description:
    "This is a stylish and comfortable jacket perfect for all seasons.",
  brand: "FashionCo",
  material: "100% Cotton",
  sizes: ["S", "M", "L", "XL"],
  colors: ["Red", "Blue", "Green"],
  images: [
    {
      url: "https://picsum.photos/500/500?random=10",
      alt: "Jacket Image 1",
    },
    {
      url: "https://picsum.photos/500/500?random=11",
      alt: "Jacket Image 2",
    },
  ],
};

const similarProducts = [
  {
    _id: 7,
    name: "Product 7",
    image: [
      { url: "https://picsum.photos/500/500?random=7", alt: "Product 7 Image" },
    ],
    price: "$59.99",
  },
  {
    _id: 8,
    name: "Product 8",
    image: [
      { url: "https://picsum.photos/500/500?random=8", alt: "Product 8 Image" },
    ],
    price: "$69.99",
  },
  {
    _id: 9,
    name: "Product 9",
    image: [
      { url: "https://picsum.photos/500/500?random=9", alt: "Product 9 Image" },
    ],
    price: "$79.99",
  },
  {
    _id: 10,
    name: "Product 10",
    image: [
      {
        url: "https://picsum.photos/500/500?random=10",
        alt: "Product 10 Image",
      },
    ],
    price: "$89.99",
  },
];

function ProductDetails() {
  const [mainImage, setMainImage] = useState(selectedProduct.images[0].url);
  const [selectedSize, setSelectedSize] = useState("");
  const [selectedColor, setSelectedColor] = useState("");
  const [quantity, setQuantity] = useState(1);
  const [isButtonDisabled, setIsButtonDisabled] = useState(false);

  useEffect(() => {
    if (selectedProduct.images.length > 0) {
      setMainImage(selectedProduct.images[0].url);
    }
  }, []);

  const handleAddToCart = () => {
    if (!selectedSize || !selectedColor) {
      toast.error("Please select size and color", { duration: 1000 });
      return;
    }

    // Simulate adding to cart
    setIsButtonDisabled(true);

    setTimeout(() => {
      setIsButtonDisabled(false);
      toast.success("Product added to cart!", { duration: 1000 });
    }, 500);
  };

  return (
    <div className="p-6">
      <div className="max-w-6xl mx-auto bg-white p-8 rounded-lg">
        <div className="flex flex-col md:flex-row">
          {/*Left Tumbnails*/}
          <div className="hidden md:flex flex-col space-y-4 mr-6">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alt}
                onClick={() => setMainImage(image.url)}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${
                  mainImage === image.url
                    ? "border-black"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>
          {/*Main Image*/}
          <div className="md:w-1/2">
            <img
              src={mainImage}
              alt={selectedProduct.images[0].alt}
              className="w-full h-auto object-cover rounded-lg"
            />
          </div>
          {/*mobile Thumbnails*/}
          <div className="flex md:hidden space-x-4 mt-4 overflow-x-scroll">
            {selectedProduct.images.map((image, index) => (
              <img
                key={index}
                src={image.url}
                alt={image.alt}
                onClick={() => setMainImage(image.url)}
                className={`w-20 h-20 object-cover rounded-md cursor-pointer border ${
                  mainImage === image.url
                    ? "border-black"
                    : "border-transparent"
                }`}
              />
            ))}
          </div>
          {/*Product Info*/}
          <div className="md:w-1/2 md:ml-10">
            <h1 className="text-2xl md:text-3xl font-semibold mb-2">
              {selectedProduct.name}
            </h1>
            <p className="text-lg text-gray-600 mb-1 line-through">
              {selectedProduct.originalPrice && selectedProduct.originalPrice}
            </p>
            <p className="text-xl font-semibold text-red-600 mb-2">
              {selectedProduct.currentPrice}
            </p>
            <p className="text-gray-700 mb-4">{selectedProduct.description}</p>
            <div className="mb-4">
              <p className="text-gray-700">Color:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.colors.map((color) => (
                  <button
                    key={color}
                    onClick={() => setSelectedColor(color)}
                    className={`w-6 h-6 rounded-full ${
                      selectedColor === color ? "ring-2 ring-black" : ""
                    }`}
                    style={{
                      backgroundColor: color.toLowerCase(),
                      filter: "brightness(0.8)",
                    }}
                  ></button>
                ))}
              </div>
            </div>
            <div className="mb-4">
              <p className="text-gray-700">Size:</p>
              <div className="flex gap-2 mt-2">
                {selectedProduct.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={() => setSelectedSize(size)}
                    className={`mr-2 px-3 py-1 border rounded ${
                      selectedSize === size ? "bg-black text-white" : ""
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <div className="mb-6">
              <p className="text-gray-700">Quantity:</p>
              <div className="flex items-center space-x-4 mt-2">
                <button
                  onClick={() => setQuantity(quantity > 1 ? quantity - 1 : 1)}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  -
                </button>
                <span className="text-lg">{quantity}</span>
                <button
                  onClick={() => setQuantity(quantity + 1)}
                  className="px-2 py-1 bg-gray-200 rounded text-lg"
                >
                  +
                </button>
              </div>
            </div>
            <button
              onClick={handleAddToCart}
              disabled={isButtonDisabled}
              className={`bg-black text-white px-4 py-2 rounded mb-4 w-full ${
                isButtonDisabled ? "opacity-50 cursor-not-allowed" : ""
              }`}
            >
              {isButtonDisabled ? "Adding..." : "ADD TO CART"}
            </button>

            <div className="mt-10 text-gray-700">
              <h3 className="font-semibold mb-2">Product Details:</h3>
              <table className="w-full text-left text-sm text-gray-600">
                <tbody>
                  <tr>
                    <td className="py-2 font-medium">Brand</td>
                    <td className="py-2">{selectedProduct.brand}</td>
                  </tr>
                  <tr>
                    <td className="py-2 font-medium">Material</td>
                    <td className="py-2">{selectedProduct.material}</td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
        <div className="mt-16">
          <h2 className="text-3xl text-center font-bold mb-4">
            You May Also Like
          </h2>
          <ProductGrid products={similarProducts} />
        </div>
      </div>
    </div>
  );
}

export default ProductDetails;
