import { useState } from "react";
import { useNavigate } from "react-router-dom";
import BottomNav from "../components/BottomNav.jsx";

const foodItems = [
  { id: 1, name: "Chicken Momo", price: 120, emoji: "🥟", category: "Snacks" },
  { id: 2, name: "Veg Chowmein", price: 100, emoji: "🍜", category: "Meals" },
  { id: 3, name: "Chicken Burger", price: 180, emoji: "🍔", category: "Snacks" },
  { id: 4, name: "Cold Coffee", price: 100, emoji: "🥤", category: "Drinks" },
];

function Home() {
  const navigate = useNavigate();
  const [search, setSearch] = useState("");

  const filteredItems = foodItems.filter((item) =>
    item.name.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-[#fff8f1] pb-24">

      {/* Header */}
      <header className="bg-[#f47b45] px-6 py-6 text-white">
        <div className="mx-auto max-w-5xl">

          <h1 className="mt-1 text-2xl font-bold">
            Hello, *name* 👋
          </h1>

          <p className="mt-2 text-sm text-orange-50">
            What would you like to eat today?
          </p>

        </div>
      </header>

      <main className="mx-auto max-w-5xl space-y-6 px-5 py-6">

        {/* Search */}
        <input
          type="text"
          placeholder="🔍  Search your favourite food..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="w-full rounded-2xl border border-gray-200 bg-white px-5 py-4 shadow-sm outline-none focus:border-orange-400"
        />

        {/* Queue information */}
        <div className="grid gap-4 sm:grid-cols-2">

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Current Queue</p>
            <h2 className="mt-2 text-3xl font-bold text-orange-600">
              #
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              People waiting
            </p>
          </div>

          <div className="rounded-2xl bg-white p-5 shadow-sm">
            <p className="text-sm text-gray-500">Your Order</p>
            <h2 className="mt-2 text-xl font-bold text-green-600">
              #
            </h2>
            <p className="mt-1 text-sm text-gray-500">
              Preparing your order
            </p>
          </div>

        </div>

        {/* Banner */}
        <div className="flex items-center justify-between gap-4 rounded-2xl bg-orange-100 p-6">
          <div>
            <h2 className="text-xl font-bold text-gray-800">
              Hungry?
            </h2>

            <p className="mt-2 text-sm text-gray-600">
              Pre-order your meal and skip the queue!
            </p>

            <button
              onClick={() => navigate("/menu")}
              className="mt-4 rounded-xl bg-[#f47b45] px-5 py-2 font-semibold text-white hover:bg-orange-600"
            >
              Order Now
            </button>
          </div>

          <span className="text-6xl">🍱</span>
        </div>

        {/* Popular food */}
        <section>
          <div className="mb-4 flex items-center justify-between">
            <h2 className="text-xl font-bold text-gray-800">
              Popular Today
            </h2>

            <button
              onClick={() => navigate("/menu")}
              className="text-sm font-semibold text-orange-600"
            >
              See all
            </button>
          </div>

          <div className="grid grid-cols-2 gap-4 sm:grid-cols-4">

            {filteredItems.map((item) => (
              <div
                key={item.id}
                className="rounded-2xl bg-white p-4 shadow-sm transition hover:-translate-y-1 hover:shadow-md"
              >
                <div className="flex h-24 items-center justify-center rounded-xl bg-orange-50 text-5xl">
                  {item.emoji}
                </div>

                <h3 className="mt-3 font-semibold text-gray-800">
                  {item.name}
                </h3>

                <p className="mt-1 text-sm text-gray-500">
                  {item.category}
                </p>

                <p className="mt-2 font-bold text-orange-600">
                  Rs. {item.price}
                </p>
              </div>
            ))}

            {filteredItems.length === 0 && (
              <p className="col-span-2 text-sm text-gray-500 sm:col-span-4">
                No food items found.
              </p>
            )}

          </div>
        </section>

      </main>

      <BottomNav />
    </div>
  );
}

export default Home;