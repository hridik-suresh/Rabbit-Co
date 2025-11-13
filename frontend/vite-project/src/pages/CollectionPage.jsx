import { useEffect, useRef, useState } from "react";
import { FaFilter } from "react-icons/fa";

import FilterSidebar from "../components/Products/FilterSidebar";
import SortOptions from "../components/Products/SortOptions";
import ProductGrid from "../components/Products/ProductGrid";

function CollectionPage() {
  const [products, setProducts] = useState([]);
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);
  const sidebarRef = useRef(null);

  const toggleSidebar = () => {
    setIsSidebarOpen(!isSidebarOpen);
  }
  const handleClickOutside = (e) => {
    //close sidebar if click outside
    if (sidebarRef.current && !sidebarRef.current.contains(e.target)) {
      setIsSidebarOpen(false);
    }
  }

  useEffect(() => {
    // Add event listener for clicks when the component mounts
    document.addEventListener("mousedown", handleClickOutside);

    // Remove event listener when the component unmounts
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  useEffect(() => {
    setTimeout(() => {
      const fetchProducts = [
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
      setProducts(fetchProducts);
    }, 1000);
  }, []);

  return (
    <div className="flex flex-col lg:flex-row">
      {/*Mobile filter button*/}
      <button onClick={toggleSidebar} className="lg:hidden border p-2 flex justify-center items-center">
        <FaFilter className="mr-2" /> Filters
      </button>

      {/*filter sidebar*/}
      <div ref={sidebarRef} className={`${isSidebarOpen ? "translate-x-0" : "-translate-x-full"} fixed inset-y-0 z-50 left-0 w-64 bg-white overflow-y-auto transition-transform duration-300 lg:static lg:translate-x-0`}>
        <FilterSidebar />
      </div>

      <div className="grow p-4">
        <h2 className="text-2xl uppercase mb-4">All Collections</h2>
        {/*Sort Option*/}
        <SortOptions />

        {/*Product Grid*/}
        <ProductGrid products={products} />


      </div>
    </div>
  );
}

export default CollectionPage;
