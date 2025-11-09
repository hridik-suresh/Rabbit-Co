import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";

function NewArrivals() {
  const newArrivals = [
    {
      _id: 1,
      name: "Product 1",
      image: [
        {
          url: "https://picsum.photos/500/500?random=1",
          alt: "Product 1 Image",
        },
      ],
      price: "$49.99",
    },
    {
      _id: 2,
      name: "Product 2",
      image: [
        {
          url: "https://picsum.photos/500/500?random=2",
          alt: "Product 2 Image",
        },
      ],
      price: "$29.99",
    },
    {
      _id: 3,
      name: "Product 3",
      image: [
        {
          url: "https://picsum.photos/500/500?random=3",
          alt: "Product 3 Image",
        },
      ],
      price: "$39.99",
    },
    {
      _id: 4,
      name: "Product 4",
      image: [
        {
          url: "https://picsum.photos/500/500?random=4",
          alt: "Product 4 Image",
        },
      ],
      price: "$59.99",
    },
    {
      _id: 5,
      name: "Product 5",
      image: [
        {
          url: "https://picsum.photos/500/500?random=5",
          alt: "Product 5 Image",
        },
      ],
      price: "$69.99",
    },
    {
      _id: 6,
      name: "Product 6",
      image: [
        {
          url: "https://picsum.photos/500/500?random=6",
          alt: "Product 6 Image",
        },
      ],
      price: "$79.99",
    },
    {
      _id: 7,
      name: "Product 7",
      image: [
        {
          url: "https://picsum.photos/500/500?random=7",
          alt: "Product 7 Image",
        },
      ],
      price: "$89.99",
    },
    {
      _id: 8,
      name: "Product 8",
      image: [
        {
          url: "https://picsum.photos/500/500?random=8",
          alt: "Product 8 Image",
        },
      ],
      price: "$99.99",
    },
  ];

  return (
    <section className="px-10">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe up-to-date.
        </p>

        {/*scroll btn*/}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2">
          <button className="p-2 rounded border bg-white text-black">
            <FiChevronLeft />
          </button>
          <button className="p-2 rounded border bg-white text-black">
            <FiChevronRight />
          </button>
        </div>
      </div>

      {/*products grid*/}
      <div className="container mx-auto overflow-x-auto flex space-x-4 relative">
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-full sm:min-w-[50%] lg:min-w-[30%] relative"
          >
            <img
              src={product.image[0].url}
              alt={product.image[0].alt}
              className="w-full h-[500px] object-cover rounded-lg"
            />
            <div className="absolute bottom-0 left-0 right-0 bg-opacity-50 backdrop-blur-md text-white rounded-b-lg p-4">
              <Link to={`/products/${product._id}`} className="block">
                <h4 className="font-medium">{product.name}</h4>
                <p className="mt-1">{product.price}</p>
              </Link>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;
