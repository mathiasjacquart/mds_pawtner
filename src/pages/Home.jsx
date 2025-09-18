import animals from "../../data/animals.json";
import HomeCard from "../components/HomeCard";
import { PawPrint } from "lucide-react";
import { useNavigate } from "react-router-dom";

export default function Home() {
  const navigate = useNavigate();

  // ID de l'utilisateur par défaut pour la session
  const defaultUserId = 1;
  return (
    <div className="flex flex-col items-center justify-center gap-4 w-full mx-auto ">
      <div className="w-10/12">
        <div>
          <h1 className="text-4xl mt-4 mb-4 font-bold text-center text-tertiary flex flex-row items-center justify-center">
            <span>
              <PawPrint
                size={30}
                strokeWidth={2}
                className="text-tertiary  mr-4 font-bold transform scale-x-[-1]"
              ></PawPrint>
            </span>
            Pawtners
            <span>
              <PawPrint
                size={30}
                strokeWidth={2}
                className="text-tertiary  ml-4 font-bold"
              ></PawPrint>
            </span>
          </h1>

          <div className="rounded-lg flex justify-center flex-col gradiant-primary py-8 px-5">
            <p className="text-tertiary font-medium text-lg">
              Bienvenue dans la communauté
            </p>
            <p className="text-tertiary font-medium text-sm mt-3">
              Découvrez des chiens près de chez vous et organisez des rencontres
              amusantes.
            </p>
            <button
              className="btn-primary w-50 text-sm font-bold shadow-md mt-4"
              onClick={() => navigate(`/match/${defaultUserId}`)}
            >
              Commencer à matcher
            </button>
          </div>
          <h3 className="text-left font-medium text-tertiary mt-4 text-xl">
            Les toutous les plus populaires
          </h3>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 w-full">
          {animals
            .sort((a, b) => b.success - a.success)
            .slice(0, 6)
            .map((animal) => (
              <HomeCard key={animal.id} animal={animal} />
            ))}
        </div>
      </div>
    </div>
  );
}
