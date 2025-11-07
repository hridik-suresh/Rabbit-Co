import { HiMagnifyingGlass, HiMiniXMark } from "react-icons/hi2";
import { useState } from "react";

function SearchBar() {
  const [searchTerm, setSearchTerm] = useState("");
  const [isOpen, setIsOpen] = useState(false);

  const handleSearchToggle = () => {
    setIsOpen(!isOpen);
    };
    const handleSearchSubmit = (e) => {
      e.preventDefault();
        // Handle search submission logic here
        console.log("Searching for:", searchTerm);
        setIsOpen(false);
    };

  return (
    <div
      className={`flex items-center justify-center w-full transition-all duration-300 ${
        isOpen ? "absolute top-0 left-0 w-full bg-white h-24 z-50" : "w-auto"
      }`}
    >
      {isOpen ? (
        <form onSubmit={handleSearchSubmit} className=" relative flex items-center justify-center w-full">
          <div className="relative w-1/2">
            <input
              type="text"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="border border-gray-100 py-2 px-4 pl-2 pr-12 rounded-lg focus:outline-none w-full placeholder:text-gray-700"
              placeholder="Search..."
            />
            <button
              type="submit"
              className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            >
              <HiMagnifyingGlass className="size-6" />
            </button>
          </div>
          <button
            type="button"
            className="absolute right-2 top-1/2 transform -translate-y-1/2 text-gray-600 hover:text-gray-800"
            onClick={handleSearchToggle}
          >
            <HiMiniXMark className="size-6" />
          </button>
        </form>
      ) : (
        <button onClick={handleSearchToggle}>
          <HiMagnifyingGlass className="size-6 " />
        </button>
      )}
    </div>
  );
}

export default SearchBar;
