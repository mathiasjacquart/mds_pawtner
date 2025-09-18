import React, { useState, useEffect } from "react";

const ProfilChien = ({ chien, onEdit }) => {
  return (
    <div className="max-w-md w-full mx-auto bg-white shadow-lg rounded-2xl p-6 mb-6 flex flex-col sm:flex-row gap-4">
      {/* Image du chien */}
      <img
        src={chien.photo}
        alt={chien.nom}
        className="w-32 h-32 object-cover rounded-full border-4 border-white shadow-md flex-shrink-0 mx-auto sm:mx-0"
      />

      {/* Conteneur des informations */}
      <div className="flex-1 flex flex-col gap-3">
        {/* Nom du chien */}
        <h2 className="text-2xl font-bold break-words">{chien.nom}</h2>

        {/* Infos de base */}
        <div className="space-y-1 text-sm sm:text-base break-words">
          <p>
            <span className="font-semibold">Âge :</span> {chien.age}
          </p>
          <p>
            <span className="font-semibold">Race :</span> {chien.race}
          </p>
          <p>
            <span className="font-semibold">Taille :</span> {chien.taille}
          </p>
        </div>

        {/* Caractère */}
        <div>
          <h3 className="font-semibold text-lg mb-1">Caractère</h3>
          {/* whitespace-pre-wrap : conserve les retours à la ligne de l'utilisateur */}
          <p className="whitespace-pre-wrap break-words text-sm sm:text-base">
            {chien.caractere}
          </p>
        </div>

        {/* Santé */}
        <div>
          <h3 className="font-semibold text-lg mb-1">Santé</h3>
          <ul className="list-disc list-inside text-sm sm:text-base break-words">
            <li>Stérilisé : {chien.sterilise ? "Oui" : "Non"}</li>
            <li>Vaccins à jour : {chien.vaccins ? "Oui" : "Non"}</li>
            {chien.santeSupplementaire && <li>{chien.santeSupplementaire}</li>}
          </ul>
        </div>

        {/* Activités */}
        <div>
          <h3 className="font-semibold text-lg mb-1">Activités préférées</h3>
          <div className="flex flex-wrap gap-2">
            {chien.activites.map((act, i) => (
              <span
                key={i}
                className="bg-blue-100 text-blue-800 text-xs sm:text-sm px-2 py-1 rounded-full break-words"
              >
                {act}
              </span>
            ))}
          </div>
        </div>

        {/* Bouton pour passer en mode édition */}
        <button
          onClick={onEdit}
          className="mt-3 bg-yellow-400 hover:bg-yellow-500 text-white font-bold py-2 px-4 rounded-lg w-full"
        >
          Modifier le profil
        </button>
      </div>
    </div>
  );
};

// --- Formulaire pour modifier le profil ---
const FormProfil = ({ chien, onSave }) => {
  const [formData, setFormData] = useState(chien);

  // Fonction appelée à chaque changement d'un input
  const handleChange = (e) => {
    const { name, value, type, checked, maxLength } = e.target;
    // On limite le nombre de caractères pour éviter que ça dépasse
    const val = maxLength ? value.slice(0, maxLength) : value;

    // Pour les checkboxes, on prend la valeur "checked" (true/false)
    setFormData({
      ...formData,
      [name]: type === "checkbox" ? checked : val,
    });
  };

  // Gestion spécifique des activités, séparées par des virgules
  const handleActivitesChange = (e) => {
    const val = e.target.value.slice(0, 100); // Limite globale pour les activités
    setFormData({
      ...formData,
      activites: val.split(",").map((a) => a.trim()),
    });
  };

  // Au submit du formulaire
  const handleSubmit = (e) => {
    e.preventDefault(); // Empêche le rechargement de la page
    onSave(formData);
  };

  return (
    <form
      onSubmit={handleSubmit}
      className="max-w-md w-full mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-4"
    >
      {/* Chaque input a un placeholder pour guider l'utilisateur */}
      <input
        type="text"
        name="nom"
        placeholder="Nom du chien (max 30 caractères)"
        value={formData.nom}
        maxLength={30}
        onChange={handleChange}
        className="w-full border rounded p-2 break-words"
      />
      <input
        type="text"
        name="photo"
        placeholder="URL de la photo"
        value={formData.photo}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="age"
        placeholder="Âge du chien (ex : 3 ans)"
        value={formData.age}
        maxLength={10}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="race"
        placeholder="Race du chien"
        value={formData.race}
        maxLength={30}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <input
        type="text"
        name="taille"
        placeholder="Taille du chien (ex : Petite, Moyenne)"
        value={formData.taille}
        maxLength={20}
        onChange={handleChange}
        className="w-full border rounded p-2"
      />
      <textarea
        name="caractere"
        placeholder="Caractère du chien (max 150 caractères)"
        value={formData.caractere}
        maxLength={150}
        onChange={handleChange}
        className="w-full border rounded p-2 break-words"
      />
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="sterilise"
          checked={formData.sterilise}
          onChange={handleChange}
        />
        Stérilisé
      </label>
      <label className="flex items-center gap-2">
        <input
          type="checkbox"
          name="vaccins"
          checked={formData.vaccins}
          onChange={handleChange}
        />
        Vaccins à jour
      </label>
      <input
        type="text"
        name="santeSupplementaire"
        placeholder="Autres infos santé (max 150 caractères)"
        value={formData.santeSupplementaire}
        maxLength={150}
        onChange={handleChange}
        className="w-full border rounded p-2 break-words"
      />
      <input
        type="text"
        name="activites"
        placeholder="Activités (séparées par des virgules, max 100 caractères)"
        value={formData.activites.join(", ")}
        maxLength={100}
        onChange={handleActivitesChange}
        className="w-full border rounded p-2 break-words"
      />
      <button
        type="submit"
        className="bg-green-500 hover:bg-green-600 text-white font-bold py-2 px-4 rounded-lg w-full"
      >
        Sauvegarder
      </button>
    </form>
  );
};

export default function Profile() {
  const [chien, setChien] = useState(null);
  const [isEditing, setIsEditing] = useState(false);

  useEffect(() => {
    const saved = localStorage.getItem("profilChien");
    if (saved) {
      setChien(JSON.parse(saved)); // On récupère le profil sauvegardé
    } else {
      // Valeur par défaut si aucun profil dans le localStorage
      setChien({
        nom: "DoggyStyle",
        photo: "https://placedog.net/300/300?id=5",
        age: "3 ans",
        race: "Labrador",
        taille: "Moyenne",
        caractere: "Joueur, curieux et très câlin",
        sterilise: true,
        vaccins: true,
        santeSupplementaire: "",
        activites: ["Ballon", "Baignade", "Balades"],
      });
    }
  }, []);

  // Fonction pour sauvegarder le profil
  const handleSave = (data) => {
    setChien(data);
    localStorage.setItem("profilChien", JSON.stringify(data));
    setIsEditing(false); // On repasse en mode affichage
  };

  if (!chien) return <p>Chargement...</p>;

  return (
    <div className="min-h-screen bg-gray-100 p-6">
      <h1 className="text-3xl font-bold text-center mb-6">Profil 🐶</h1>
      {isEditing ? (
        <FormProfil chien={chien} onSave={handleSave} />
      ) : (
        <ProfilChien chien={chien} onEdit={() => setIsEditing(true)} />
      )}
    </div>
  );
}
