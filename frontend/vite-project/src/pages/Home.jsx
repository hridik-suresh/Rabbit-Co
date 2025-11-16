import Hero from "../components/Layout/Hero";
import GenderCollectionSection from "../components/Products/GenderCollectionSection";
import NewArrivals from "../components/Products/NewArrivals";
import ProductDetails from "../components/Products/ProductDetails";
import ProductGrid from "../components/Products/ProductGrid";
import FeaturedCollection from "../components/Products/FeaturedCollection";
import FeaturedSection from "../components/Products/FeaturedSection";

const placeholderProducts = [
  {
    _id: 11,
    name: "Product 11",
    image: [
      {
        url: "https://picsum.photos/500/500?random=11",
        alt: "Product 11 Image",
      },
    ],
    price: "$49.99",
  },
  {
    _id: 12,
    name: "Product 12",
    image: [
      {
        url: "https://picsum.photos/500/500?random=12",
        alt: "Product 12 Image",
      },
    ],
    price: "$59.99",
  },
  {
    _id: 13,
    name: "Product 13",
    image: [
      {
        url: "https://picsum.photos/500/500?random=13",
        alt: "Product 13 Image",
      },
    ],
    price: "$69.99",
  },
  {
    _id: 14,
    name: "Product 14",
    image: [
      {
        url: "https://picsum.photos/500/500?random=14",
        alt: "Product 14 Image",
      },
    ],
    price: "$79.99",
  },
  {
    _id: 15,
    name: "Product 15",
    image: [
      {
        url: "https://picsum.photos/500/500?random=15",
        alt: "Product 15 Image",
      },
    ],
    price: "$89.99",
  },
  {
    _id: 16,
    name: "Product 16",
    image: [
      {
        url: "https://picsum.photos/500/500?random=16",
        alt: "Product 16 Image",
      },
    ],
    price: "$99.99",
  },
  {
    _id: 17,
    name: "Product 17",
    image: [
      {
        url: "https://picsum.photos/500/500?random=17",
        alt: "Product 17 Image",
      },
    ],
    price: "$109.99",
  },
  {
    _id: 18,
    name: "Product 18",
    image: [
      {
        url: "https://picsum.photos/500/500?random=18",
        alt: "Product 18 Image",
      },
    ],
    price: "$119.99",
  },
];

function Home() {
  return (
    <div>
      <Hero />
      <GenderCollectionSection />
      <NewArrivals />

      {/* {Best Seller} */}
      <h2 className="text-3xl text-center font-bold mb-4">Best Seller</h2>
      <ProductDetails />

      <div className="container px-7 mb-10 mx-auto">
        <h2 className="text-3xl text-center font-bold mb-4">
          Top Wears for Women
        </h2>
        <ProductGrid products={placeholderProducts} />
      </div>

      <FeaturedCollection />
      <FeaturedSection />
    </div>
  );
}

export default Home;
