import { useParams } from "react-router-dom";
import animals from "../../data/animals.json";

export default function Profile() {
  const { userId } = useParams();

  // Récupérer l'utilisateur à partir de l'ID
  const currentUser = animals.find((animal) => animal.id === parseInt(userId));

  // Pour les tests, utiliser le premier utilisateur si pas d'ID valide
  const user = currentUser || animals[0];

  console.log("User ID from URL:", userId);
  console.log("Current user:", user);

  return (
    <div className="flex flex-col max-w-10/12 mx-auto mt-5">
      <h1 className="text-2xl font-bold text-tertiary">Profil</h1>
      <div className="bg-white rounded-lg p-4 mt-4">
        <div className="flex flex-col items-center">
          <img
            src={user.image}
            alt={user.nom}
            className="w-32 h-32 rounded-full mb-4"
          />
          <h2 className="text-xl font-bold text-tertiary">{user.nom}</h2>
          <p className="text-gray-600">Propriétaire: {user.proprietaire}</p>
          <p className="text-gray-600">Âge: {user.age} ans</p>
          <p className="text-gray-600">Localisation: {user.localisation}</p>
          <p className="text-gray-600 mt-2 text-center">{user.description}</p>

          <div className="mt-4">
            <h3 className="font-bold text-tertiary">Intérêts:</h3>
            <div className="flex flex-wrap gap-2 mt-2">
              {user.interets.map((interet, index) => (
                <span
                  key={index}
                  className="bg-gray-200 px-2 py-1 rounded-lg text-sm"
                >
                  {interet}
                </span>
              ))}
            </div>
          </div>

          <div className="mt-4">
            <h3 className="font-bold text-tertiary">Objectif:</h3>
            <div className="flex items-center gap-2 mt-2">
              <img
                src={user.goal.image}
                alt={user.goal.name}
                className="w-8 h-8"
              />
              <div>
                <p className="font-medium">{user.goal.name}</p>
                <p className="text-sm text-gray-600">{user.goal.description}</p>
              </div>
            </div>
          </div>

          <p className="mt-4 text-sm text-gray-600">
            Score de popularité: {user.success}/10
          </p>
        </div>
      </div>
    </div>
  );
}
