import { useParams } from "react-router-dom";
import animals from "../../../data/animals.json";
import MessagePreview from "./MessagePreview";

export default function Message() {
  const { userId } = useParams();

  // Récupérer l'utilisateur à partir de l'ID
  const currentUser = animals.find((animal) => animal.id === parseInt(userId));

  // Pour les tests, utiliser le premier utilisateur si pas d'ID valide
  const user = currentUser || animals[0];

  console.log("User ID from URL:", userId);
  console.log("Current user:", user);

  return (
    <div className="py-10">
      <div className="flex flex-col max-w-10/12 mx-auto">
        <h1 className="text-3xl font-bold text-tertiary mt-5">Messages</h1>

        <h2 className="text-xl font-bold my-5 text-secondary">
          Messages reçus de vos matchs
        </h2>
        <div className="flex flex-col gap-3">
          {user.messages && user.messages.length > 0 ? (
            user.messages.map((message) => {
              // Trouver l'utilisateur expéditeur pour récupérer sa photo
              const sender = animals.find(
                (animal) => animal.id === message.senderId
              );
              return <MessagePreview message={message} sender={sender} />;
            })
          ) : (
            <div className="bg-white rounded-lg p-4">
              <p className="text-gray-500 text-center">
                Aucun message reçu pour le moment
              </p>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}
