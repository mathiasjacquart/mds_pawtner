import { Home, Heart, MessageCircle, Dog } from "lucide-react";
import { useNavigate } from "react-router-dom";

function Header({ activePage }) {
  const navigate = useNavigate();

  // ID de l'utilisateur par défaut pour la session (user 1)
  const defaultUserId = 1;

  const links = [
    { id: "/", icon: <Home size={24} />, label: "Accueil" },
    {
      id: `/match/${defaultUserId}`,
      icon: <Heart size={24} />,
      label: "Matchs",
    },
    {
      id: `/messages/${defaultUserId}`,
      icon: <MessageCircle size={24} />,
      label: "Messages",
    },
    {
      id: `/profile/${defaultUserId}`,
      icon: <Dog size={24} />,
      label: "Profil",
    },
  ];

  return (
    <nav className="fixed bottom-0 left-0 w-full bg-secondary  border-tertiary shadow-md flex justify-around py-2">
      {links.map((link) => (
        <button
          key={link.id}
          onClick={() => navigate(link.id)}
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
