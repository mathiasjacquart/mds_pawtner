
import React from "react";
import { useParams } from "react-router-dom";
import animals from "../../data/animals.json";

const ProfilChien = ({ chien }) => {
  return (
    <div>
      <h1>PROFIL</h1>
    <div className="profile-container max-w-md mx-auto bg-white shadow-lg rounded-2xl overflow-hidden p-6 relative flex justify-between items-start mb-4">
      <div className="name-img">

    
      <h2 className="text-2xl font-bold mb-2 w-20">{chien.nom}</h2>
      <img
        src={chien.photo}
        alt={chien.nom}
        className="w-24 h-24 object-cover rounded-full absolut top-4 right-4 border-4 border-white shadow-md"
        />
        </div>

      {/* Nom */}

      {/* Infos de base */}
      <div className="mb-4 space-y-1">
        <p><span className="font-semibold">Âge :</span> {chien.age}</p>
        <p><span className="font-semibold">Race :</span> {chien.race}</p>
        <p><span className="font-semibold">Taille :</span> {chien.taille}</p>
      </div>

      {/* Caractère */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-1">Caractère</h3>
        <p>{chien.caractere}</p>
      </div>

      {/* Santé */}
      <div className="mb-4">
        <h3 className="font-semibold text-lg mb-1">Santé</h3>
        <ul className="list-disc list-inside">
          <li>Stérilisé : {chien.sterilise ? "Oui" : "Non"}</li>
          <li>Vaccins à jour : {chien.vaccins ? "Oui" : "Non"}</li>
          {chien.santeSupplementaire && <li>{chien.santeSupplementaire}</li>}
        </ul>
      </div>

      {/* Activités */}
      <div>
        <h3 className="font-semibold text-lg mb-1">Activités préférées</h3>
        <ul className="flex flex-wrap gap-2">
          {chien.activites.map((act, i) => (
            <span
            key={i}
            className="bg-blue-100 text-blue-800 text-sm px-2 py-1 rounded-full"
            >
              {act}
            </span>
          ))}
        </ul>
      </div>
    </div>
          </div>
  );
};

const exempleChien = {
  nom: "DoggyStayle",
  photo: "https://placedog.net/300/300?id=5",
  age: "3 ans",
  race: "Labrador",
  taille: "Moyenne",
  caractere: "Joueur, curieux et très câlin",
  sterilise: true,
  vaccins: true,
  santeSupplementaire: "Aucune allergie",
  activites: ["Ballon", "Baignade", "Longues balades", "Siestes"],
};

export default function Profile() {
  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <ProfilChien chien={exempleChien} />
    </div>
}
