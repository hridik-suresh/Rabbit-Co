import { Link } from "react-router-dom";
import featured from "../../assets/featured.webp";

function FeaturedCollection() {
  return (
    <section className="py-16 px-10">
      <div className="container mx-auto flex flex-col-reverse lg:flex-row items-center bg-green-50 rounded-3xl">
        {/*text content*/}
        <div className="lg:w-1/2 p-8 lg:text-left text-center">
          <h2 className="text-lg font-semibold text-gray-700 mb-4">
            Comfort and Style
          </h2>
          <h1 className="text-4xl lg:text-5xl font-bold mb-6">
            Apparel made for everyday life
          </h1>
          <p className="text-gray-600 text-lg mb-6">
            Discover our featured collection of apparel designed for everyday
            life. Combining comfort and style, our pieces are perfect for any
            occasion.
          </p>
          <Link
            to="/collections/all"
            className="bg-black text-white px-6 py-3 rounded-lg text-lg hover:bg-gray-800"
          >
            Shop Now
          </Link>
        </div>

        {/*image*/}
        <div className="lg:w-1/2">
          <img
            src={featured}
            alt="Featured Collection"
            className="w-full h-full object-cover lg:rounded-tr-3xl lg:rounded-br-3xl"
          />
        </div>
      </div>
    </section>
  );
}

export default FeaturedCollection;
