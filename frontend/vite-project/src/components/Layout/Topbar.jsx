import { TbBrandMeta } from "react-icons/tb";
import { IoLogoInstagram } from "react-icons/io";
import { RiTwitterXLine } from "react-icons/ri";

function Topbar() {
  return (
    <div className="bg-[#ea2e0e] text-white">
      <div className="container mx-auto flex justify-center md:justify-between items-center py-3 px-4">
        <div className="hidden md:flex items-center space-x-4">
          <a href="#" className="hover:text-gray-300">
            <TbBrandMeta className="size-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <IoLogoInstagram className="size-5" />
          </a>
          <a href="#" className="hover:text-gray-300">
            <RiTwitterXLine className="size-4" />
          </a>
        </div>
        <div className="text-sm text-center">
          <span>We ship worldwide - Fast and reliable shipping!</span>
        </div>
        <div className=" hidden md:block text-sm">
          <a href="#" className="hover:text-gray-300">
            +91**********
          </a>
        </div>
      </div>
    </div>
  );
}

export default Topbar;
