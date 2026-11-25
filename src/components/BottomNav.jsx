import { useLocation, useNavigate } from "react-router-dom";

function BottomNav() {
  const navigate = useNavigate();
  const location = useLocation();

  const links = [
    { name: "Home", icon: "🏠", path: "/home" },
    { name: "Menu", icon: "🍽️", path: "/menu" },
    { name: "Cart", icon: "🛒", path: "/cart" },
    { name: "Orders", icon: "📦", path: "/orders" },
    { name: "Profile", icon: "👤", path: "/profile" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 z-50 w-full border-t border-gray-200 bg-white px-2 py-3 shadow-lg">
      <div className="mx-auto flex max-w-3xl justify-around">

        {links.map((link) => (
          <button
            key={link.path}
            onClick={() => navigate(link.path)}
            className={`flex flex-col items-center gap-1 text-xs ${
              location.pathname === link.path
                ? "font-bold text-orange-600"
                : "text-gray-500"
            }`}
          >
            <span className="text-xl">{link.icon}</span>
            {link.name}
          </button>
        ))}

      </div>
    </nav>
  );
}

export default BottomNav;