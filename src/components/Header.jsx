import { Home, Heart, MessageCircle, Dog } from "lucide-react";

function Header({ activePage, setActivePage }) {
  const links = [
    { id: "home", icon: <Home size={24} />, label: "Accueil" },
    { id: "matches", icon: <Heart size={24} />, label: "Matchs" },
    { id: "messages", icon: <MessageCircle size={24} />, label: "Messages" },
    { id: "profile", icon: <Dog size={24} />, label: "Profil" },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-secondary  border-tertiary shadow-md flex justify-around py-2">
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => setActivePage(link.id)}
          className={`flex flex-col items-center text-sm ${
            activePage === link.id ? "text-white" : "text-tertiary"
          }`}
        >
          {link.icon}
          <span className="text-xs">{link.label}</span>
        </button>
      ))}
    </nav>
  );
}

export default Header;
