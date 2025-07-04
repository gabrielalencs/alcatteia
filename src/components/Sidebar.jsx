import { useState } from 'react';
import { FiClipboard, FiBarChart2, FiPhone, FiUsers, FiMenu, FiSmile } from 'react-icons/fi';
import { Link, useLocation } from 'react-router';

export default function Sidebar() {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

 const items = [
    { label: "Dashboard", icon: <FiBarChart2 />, link: "/dashboard/leader" },
    { label: "Kanban", icon: <FiClipboard />, active: true, link: "/kanban" },
    { label: "Reuniões", icon: <FiPhone />, link: "/meetings" },
    { label: "Check-in", icon: <FiSmile />, link: "/check-in" },
    { label: "Equipe", icon: <FiUsers />, link: "/team/leader" }
  ];

  
  return (
    <div className="flex h-screen bg-[#160F23] text-white overflow-hidden">
      {/* Botão menu visível só no mobile */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="lg:hidden fixed top-24 left-7 z-50 p-2 bg-[#2A1C3A] rounded-lg text-white"
      >
        <FiMenu size={20} />
      </button>

      {/* Sidebar */}
      <aside
        className={`fixed h-full z-40 w-64 bg-[#160F23] border-[#220731] border-r-4 p-4 transition-transform duration-300 transform ${isOpen ? 'translate-x-0' : '-translate-x-full lg:translate-x-0'
          }`}
      >
        {/* Navegação */}
        <nav className="space-y-2">
          {items.map(({ label, icon, active, link }) => (
            <Link
              key={label}
              to={link}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg transition-colors duration-200 ${location.pathname === link
                ? "bg-[#433157] text-white font-semibold"
                : "text-gray-300 hover:bg-[#2A1C3A] hover:text-white"
                }`}
              aria-current={active ? "page" : undefined}
            >
              <span className="text-lg">{icon}</span>
              <span>{label}</span>
            </Link>
          ))}
        </nav>
      </aside>
    </div>
  );
}
