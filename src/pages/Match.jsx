import { useParams } from "react-router-dom";
import animals from "../../data/animals.json";

export default function Match() {
  const { userId } = useParams();

  // Récupérer l'utilisateur à partir de l'ID
  const currentUser = animals.find((animal) => animal.id === parseInt(userId));

  // Pour les tests, utiliser le premier utilisateur si pas d'ID valide
  const user = currentUser || animals[0];

  console.log("User ID from URL:", userId);
  console.log("Current user:", user);

  return (
    <div className="flex flex-col max-w-10/12 mx-auto mt-5">
      <h1 className="text-2xl font-bold text-tertiary">Match</h1>
    </div>
  );
}
