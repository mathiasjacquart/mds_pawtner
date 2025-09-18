import { useParams } from "react-router-dom";
import animals from "../../data/animals.json";

export default function Message() {
  const { userId } = useParams();

  // Récupérer l'utilisateur à partir de l'ID
  const currentUser = animals.find((animal) => animal.id === parseInt(userId));

  // Pour les tests, utiliser le premier utilisateur si pas d'ID valide
  const user = currentUser || animals[0];

  console.log("User ID from URL:", userId);
  console.log("Current user:", user);

  return (
    <div>
      <div className="flex flex-col max-w-10/12 mx-auto">
        <h1 className="text-2xl font-bold text-tertiary mt-5">Messages</h1>

        <h2 className="text-lg font-bold text-white">
          Messages reçus de vos matchs
        </h2>
        <div className="flex flex-col gap-3">
          {user.messages && user.messages.length > 0 ? (
            user.messages.map((message) => {
              // Trouver l'utilisateur expéditeur pour récupérer sa photo
              const sender = animals.find(
                (animal) => animal.id === message.senderId
              );
              console.log("Sender:", sender.image);
              return (
                <div key={message.id} className="bg-white rounded-lg p-4">
                  <div className="flex flex-row w-full">
                    <img
                      src={sender.image}
                      alt={message.senderName}
                      className="w-12 h-12 rounded-full object-cover"
                    />
                    <div className="flex flex-col ml-3 flex-1">
                      <div className="flex justify-between items-center">
                        <p className="text-lg font-bold text-tertiary">
                          {message.senderName}
                          <span className="text-xs text-gray-400">
                            {" "}
                            {message.senderOwner}
                          </span>
                        </p>
                        <span className="text-xs text-gray-400">
                          {new Date(message.timestamp).toLocaleDateString(
                            "fr-FR",
                            {
                              day: "2-digit",
                              month: "2-digit",
                              hour: "2-digit",
                              minute: "2-digit",
                            }
                          )}
                        </span>
                      </div>
                      <p className="text-sm text-gray-800">{message.message}</p>
                    </div>
                  </div>
                </div>
              );
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
