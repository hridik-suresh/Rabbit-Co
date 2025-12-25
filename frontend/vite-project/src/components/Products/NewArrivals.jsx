import { useState, useRef, useEffect } from "react";
import { Link } from "react-router-dom";
import { FiChevronLeft, FiChevronRight } from "react-icons/fi";
import axios from "axios";

function NewArrivals() {
  const scrollRef = useRef(null);
  const [canScrollRight, setCanScrollRight] = useState(true);
  const [canScrollLeft, setCanScrollLeft] = useState(false);
  const [newArrivals, setNewArrivals] = useState([]);
  const [loading, setLoading] = useState(true);

  // Fetch New Arrivals from API
  useEffect(() => {
    const fetchNewArrivals = async () => {
      try {
        const response = await axios.get(
          `${import.meta.env.VITE_BACKEND_URL}/api/products/new-arrivals`
        );
        // Safety check to ensure we always have an array
        setNewArrivals(Array.isArray(response.data) ? response.data : []);
      } catch (error) {
        console.error("Error fetching new arrivals:", error);
      } finally {
        setLoading(false);
      }
    };

    fetchNewArrivals();
  }, []);

  // Update button states based on scroll position
  const updateScrollButtons = () => {
    const container = scrollRef.current;
    if (container) {
      const left = container.scrollLeft;
      const maxScroll = container.scrollWidth - container.clientWidth;

      setCanScrollLeft(left > 5); // 5px buffer for better UX
      setCanScrollRight(left < maxScroll - 5);
    }
  };

  // Attach and cleanup scroll listener
  useEffect(() => {
    const container = scrollRef.current;
    if (container) {
      container.addEventListener("scroll", updateScrollButtons);
    }

    return () => {
      if (container) {
        container.removeEventListener("scroll", updateScrollButtons);
      }
    };
  }, [newArrivals]); // Re-run if product count changes

  const scroll = (direction) => {
    const container = scrollRef.current;
    if (container) {
      // Scroll by the width of the container (one "page")
      const scrollAmount =
        direction === "left" ? -container.clientWidth : container.clientWidth;
      container.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  if (loading) {
    return (
      <div className="text-center py-20 text-gray-500">
        Loading New Arrivals...
      </div>
    );
  }

  // If no products found, don't render the section at all
  if (newArrivals.length === 0) return null;

  return (
    <section className="py-16 px-4 sm:px-10">
      <div className="container mx-auto text-center mb-10 relative">
        <h2 className="text-3xl font-bold mb-4">New Arrivals</h2>
        <p className="text-lg text-gray-600 mb-8">
          Discover the latest styles straight off the runway, freshly added to
          keep your wardrobe up-to-date.
        </p>

        {/* Navigation Buttons */}
        <div className="absolute right-0 bottom-[-30px] flex space-x-2 z-10">
          <button
            onClick={() => scroll("left")}
            disabled={!canScrollLeft}
            className={`p-2 rounded border transition-all ${
              canScrollLeft
                ? "bg-white text-black shadow-md hover:bg-gray-50"
                : "bg-gray-100 text-gray-300 cursor-not-allowed"
            }`}
          >
            <FiChevronLeft size={24} />
          </button>
          <button
            onClick={() => scroll("right")}
            disabled={!canScrollRight}
            className={`p-2 rounded border transition-all ${
              canScrollRight
                ? "bg-white text-black shadow-md hover:bg-gray-50"
                : "bg-gray-100 text-gray-300 cursor-not-allowed"
            }`}
          >
            <FiChevronRight size={24} />
          </button>
        </div>
      </div>

      {/* Horizontal Product Container */}
      <div
        ref={scrollRef}
        className="container mx-auto overflow-x-auto flex space-x-6 relative no-scrollbar pb-4"
        style={{ scrollSnapType: "x mandatory" }}
      >
        {newArrivals.map((product) => (
          <div
            key={product._id}
            className="min-w-[80%] sm:min-w-[45%] lg:min-w-[30%] relative snap-start"
          >
            <Link to={`/products/${product._id}`} className="block group">
              <div className="overflow-hidden rounded-lg">
                <img
                  src={
                    product.images?.[0]?.url ||
                    product.image?.[0]?.url ||
                    "https://via.placeholder.com/500"
                  }
                  alt={product.name}
                  className="w-full h-[500px] object-cover transition-transform duration-500 group-hover:scale-105"
                />
              </div>

              <div className="absolute bottom-0 left-0 right-0 bg-black/30 backdrop-blur-md text-white rounded-b-lg p-4">
                <h4 className="font-medium text-lg">{product.name}</h4>
                <p className="mt-1">${product.price}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </section>
  );
}

export default NewArrivals;
