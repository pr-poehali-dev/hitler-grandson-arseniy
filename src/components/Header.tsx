import { Link, useLocation } from "react-router-dom";

const Header = () => {
  const location = useLocation();

  const navItems = [
    { path: "/", label: "Главная" },
    { path: "/biography", label: "Биография" },
    { path: "/contacts", label: "Контакты" },
  ];

  return (
    <header className="bg-white shadow-sm border-b">
      <div className="max-w-4xl mx-auto px-6 py-4">
        <nav className="flex items-center justify-between">
          <Link to="/" className="text-2xl font-bold text-gray-900">
            Арсений Белоусов
          </Link>
          <ul className="flex space-x-8">
            {navItems.map((item) => (
              <li key={item.path}>
                <Link
                  to={item.path}
                  className={`transition-colors hover:text-blue-600 ${
                    location.pathname === item.path
                      ? "text-blue-600 font-medium"
                      : "text-gray-700"
                  }`}
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
        </nav>
      </div>
    </header>
  );
};

export default Header;
