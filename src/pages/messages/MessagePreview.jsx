export default function MessagePreview({ message, sender }) {
  console.log("Message:", message);
  console.log("Sender:", sender);
  return (
    <div className="bg-white rounded-lg p-4 shadow-md  ">
      <div className="flex flex-row w-full">
        <img
          src={sender.image.replace("public/", "/")}
          alt={sender.nom}
          className="w-12 h-12 rounded-full object-cover"
        />
        <div className="flex flex-col ml-3 flex-1">
          <div className="flex justify-between items-center">
            <p className="text-lg font-medium text-tertiary">
              {sender.nom}
              <span className="text-xs text-secondary">
                {" • "}
                {sender.proprietaire}
              </span>
            </p>
            <span className="text-xs text-secondary">
              {new Date(
                message.conversation[message.conversation.length - 1].timestamp
              ).toLocaleDateString("fr-FR", {
                day: "2-digit",
                month: "2-digit",
                hour: "2-digit",
                minute: "2-digit",
              })}
            </span>
          </div>
          <div className="flex flex-row justify-between items-center">
          <p className="text-sm text-gray-800">
            {message.conversation[message.conversation.length - 1].message
              .length > 50
              ? `${message.conversation[
                  message.conversation.length - 1
                ].message.substring(0, 30)}...`
              : message.conversation[message.conversation.length - 1].message}
          </p>
          {message.isOnline ? (
            <span className="text-xs text-green-500"> ●</span>
          ) : (
            <span className="text-xs text-red-500"> ●</span>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}
