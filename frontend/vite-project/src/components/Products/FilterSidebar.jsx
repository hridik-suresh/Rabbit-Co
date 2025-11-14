import { useEffect, useState } from "react";
import { useSearchParams } from "react-router-dom";



function FilterSidebar() {
    const [searchParams, setSearchParams] = useSearchParams();
    const [filters, setFilters] = useState({
        category: "",
        gender: "",
        color: "",
        size: [],
        material: [],
        brand: [],
        minPrice: 0,
        maxPrice: 100,
    });
    const [priceRange, setPriceRange] = useState([0, 100]);

    const colors = [
        "Red",
        "Blue",
        "Black",
        "Green",
        "Yellow",
        "Gray",
        "White",
        "Pink",
        "Beige",
        "Navy",
    ];
    const categorie = ["Top Wear", "Bottom Wear"];
    const sizes = ["XS", "S", "M", "L", "XL", "XXL"];
    const materials = [
        "Cotton",
        "Whool",
        "Denim",
        "Polyester",
        "Silk",
        "Linen",
        "Viscose",
        "Fleece",
    ];
    const brands = [
        "Urban Threads",
        "Modern Fit",
        "Street Style",
        "Beach Breeze",
        "Fishionista",
        "ChicStyle",
    ];
    const genders = ["Men", "Female"];

    useEffect(() => {
        const params = Object.fromEntries([...searchParams]);
        setFilters({
          category: params.categorie || "",
          gender: params.gender || "",
          color: params.color || "",
          size: params.size ? params.size.split(",") : [],
          material: params.material ? params.material.split(",") : [],
          brand: params.brand ? params.brand.split(",") : [],
          minPrice: params.minPrice || 0,
          maxPrice: params.maxPrice || 100,
        });

        setPriceRange([0, params.maxPrice || 100]);
    }, [searchParams]);

    return (
        <div className="">
            Filter Sidebar
        </div>
    )
}

export default FilterSidebar;