import { useState, useMemo } from "react";
import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css"
const products = [
  { id: 1, name: "Classic Tee", price: 29, color: "black", size: "medium", image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=400&q=80", category: "Tops" },
  { id: 2, name: "Slim Chinos", price: 59, color: "green", size: "small", image: "https://images.unsplash.com/photo-1624378439575-d8705ad7ae80?w=400&q=80", category: "Bottoms" },
  { id: 3, name: "Denim Jacket", price: 119, color: "blue", size: "large", image: "https://images.unsplash.com/photo-1551537482-f2075a1d41f2?w=400&q=80", category: "Outerwear" },
  { id: 4, name: "Polo Shirt", price: 45, color: "green", size: "medium", image: "https://images.unsplash.com/photo-1586790170083-2f9ceadc732d?w=400&q=80", category: "Tops" },
  { id: 5, name: "Cargo Shorts", price: 39, color: "black", size: "large", image: "https://images.unsplash.com/photo-1591195853828-11db59a44f43?w=400&q=80", category: "Bottoms" },
  { id: 6, name: "Hoodie", price: 79, color: "blue", size: "small", image: "https://images.unsplash.com/photo-1556821840-3a63f15732ce?w=400&q=80", category: "Outerwear" },
  { id: 7, name: "Linen Shirt", price: 65, color: "green", size: "large", image: "https://images.unsplash.com/photo-1602810318383-e386cc2a3ccf?w=400&q=80", category: "Tops" },
  { id: 8, name: "Track Pants", price: 55, color: "black", size: "medium", image: "https://images.unsplash.com/photo-1552902865-b72c031ac5ea?w=400&q=80", category: "Bottoms" },
  { id: 9, name: "Bomber Jacket", price: 149, color: "black", size: "small", image: "https://images.unsplash.com/photo-1544022613-e87ca75a784a?w=400&q=80", category: "Outerwear" },
  { id: 10, name: "V-Neck Sweater", price: 89, color: "blue", size: "medium", image: "https://images.unsplash.com/photo-1434389677669-e08b4cac3105?w=400&q=80", category: "Tops" },
  { id: 11, name: "Jogger Pants", price: 49, color: "green", size: "small", image: "https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&q=80", category: "Bottoms" },
  { id: 12, name: "Trench Coat", price: 189, color: "blue", size: "large", image: "https://images.unsplash.com/photo-1539533018447-63fcce2678e3?w=400&q=80", category: "Outerwear" },
];

const COLORS = ["green", "blue", "black"];
const SIZES = ["small", "medium", "large"];
const PER_PAGE = 6;

const colorMeta = {
  green: { hex: "#22c55e" },
  blue: { hex: "#3b82f6" },
  black: { hex: "#171717" },
};

const sizeMeta = { small: "S", medium: "M", large: "L" };

const SearchIcon = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2.2" viewBox="0 0 24 24">
    <circle cx="11" cy="11" r="7" />
    <line x1="16.5" y1="16.5" x2="22" y2="22" />
  </svg>
);

const PlusIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <line x1="12" y1="5" x2="12" y2="19" />
    <line x1="5" y1="12" x2="19" y2="12" />
  </svg>
);

const CheckIcon = () => (
  <svg className="w-3.5 h-3.5" fill="none" stroke="currentColor" strokeWidth="2.5" viewBox="0 0 24 24">
    <polyline points="20 6 9 17 4 12" />
  </svg>
);

const ChevronLeft = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polyline points="15 18 9 12 15 6" />
  </svg>
);

const ChevronRight = () => (
  <svg className="w-4 h-4" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
    <polyline points="9 18 15 12 9 6" />
  </svg>
);

export default function Shop() {
  const [search, setSearch] = useState("");
  const [sort, setSort] = useState("default");
  const [minPrice, setMinPrice] = useState("");
  const [maxPrice, setMaxPrice] = useState("");
  const [selectedColors, setSelectedColors] = useState([]);
  const [selectedSizes, setSelectedSizes] = useState([]);
  const [page, setPage] = useState(1);
  const [addedIds, setAddedIds] = useState([]);

  const toggleArr = (arr, setArr, val) => {
    setArr(arr.includes(val) ? arr.filter(x => x !== val) : [...arr, val]);
    setPage(1);
  };

  const handleAdd = (id, name) => {
    setAddedIds((p) => [...p, id]);

    toast.success(`${name} added to cart 🛒`, {
      position: "top-right",
      autoClose: 2000,
      theme: "dark",
    });

    setTimeout(() => {
      setAddedIds((p) => p.filter(x => x !== id));
    }, 1500);
  };

  const filtered = useMemo(() => {
    let r = [...products];

    if (search.trim())
      r = r.filter(p =>
        p.name.toLowerCase().includes(search.toLowerCase())
      );

    if (selectedColors.length)
      r = r.filter(p => selectedColors.includes(p.color));

    if (selectedSizes.length)
      r = r.filter(p => selectedSizes.includes(p.size));

    const mn = parseFloat(minPrice);
    const mx = parseFloat(maxPrice);

    if (!isNaN(mn)) r = r.filter(p => p.price >= mn);
    if (!isNaN(mx)) r = r.filter(p => p.price <= mx);

    if (sort === "low") r.sort((a, b) => a.price - b.price);
    if (sort === "high") r.sort((a, b) => b.price - a.price);

    return r;
  }, [search, sort, minPrice, maxPrice, selectedColors, selectedSizes]);

  const totalPages = Math.max(1, Math.ceil(filtered.length / PER_PAGE));
  const paginated = filtered.slice((page - 1) * PER_PAGE, page * PER_PAGE);
  return (
    <div className="min-h-screen bg-stone-50 font-serif text-neutral-900">
      {/* Header */}
      <header className="bg-gray-900 text-white px-8 py-4">
        <h1 className="text-xl font-bold">Shop Products</h1>
      </header>

      {/* Controls */}
      <div className="px-8 py-4 flex gap-4 flex-wrap">
        <input
          className="border p-2"
          placeholder="Search..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />

        <select
          className="border p-2"
          value={sort}
          onChange={(e) => setSort(e.target.value)}
        >
          <option value="default">Default</option>
          <option value="low">Low to High</option>
          <option value="high">High to Low</option>
        </select>
      </div>

      {/* Products */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-8">
        {paginated.map((p) => (
          <div key={p.id} className="bg-white p-4 shadow rounded">
            <img src={p.image} className="h-40 w-full object-cover" />
            <h2 className="font-bold mt-2">{p.name}</h2>
            <p>${p.price}</p>

            <button
              onClick={() => handleAdd(p.id, p.name)}
              className="mt-2 bg-black text-white px-3 py-1 rounded"
            >
              Add to Cart
            </button>
          </div>
        ))}
      </div>

      {/* Toast */}
      <ToastContainer />

    </div>
  );
}