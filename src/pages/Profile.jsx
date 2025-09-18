import React, { useState, useEffect } from "react";

const ProfilChien = ({ chien, onEdit }) => {
  console.log(chien);

  return (
    <div className="max-w-2xl w-full mx-auto bg-white shadow-lg rounded-2xl p-6 mb-6">
      {/* Header avec image et infos principales */}
      <div className="flex flex-col sm:flex-row gap-6 mb-6">
        {/* Image du chien */}
        <img
          src={chien.image}
          alt={chien.nom}
          className="w-40 h-40 object-cover rounded-full border-4 border-white shadow-md flex-shrink-0 mx-auto sm:mx-0"
        />

        {/* Infos principales */}
        <div className="flex-1 flex flex-col justify-center">
          <h2 className="text-3xl font-bold text-tertiary mb-2">{chien.nom}</h2>
          <p className="text-lg text-gray-600 mb-1">
            <span className="font-semibold">Propriétaire :</span>{" "}
            {chien.proprietaire}
          </p>
          <p className="text-lg text-gray-600 mb-1">
            <span className="font-semibold">Âge :</span> {chien.age} ans
          </p>
          <p className="text-lg text-gray-600">
            <span className="font-semibold">Localisation :</span>{" "}
            {chien.localisation}
          </p>
        </div>
      </div>

      {/* Description */}
      <div className="mb-6">
        <h3 className="font-semibold text-xl mb-2 text-tertiary">
          Description
        </h3>
        <p className="text-gray-700 leading-relaxed">{chien.description}</p>
      </div>

      {/* Intérêts */}
      <div className="mb-6">
        <h3 className="font-semibold text-xl mb-3 text-tertiary">Intérêts</h3>
        <div className="flex flex-wrap gap-2">
          {chien.interets && chien.interets.length > 0 ? (
            chien.interets.map((interet, i) => (
              <span
                key={i}
                className="bg-primary text-tertiary uppercase text-sm px-3 py-1 rounded-full font-medium"
              >
                {interet}
              </span>
            ))
          ) : (
            <p className="text-gray-500 italic">Aucun intérêt défini</p>
          )}
        </div>
      </div>

      {/* Objectif */}
      <div className="mb-6">
        <h3 className="font-semibold text-xl mb-3 text-tertiary">Objectif</h3>
        {chien.goal ? (
          <div className="flex items-center gap-4 bg-gray-50 p-4 rounded-lg">
            <img
              src={chien.goal.image}
              alt={chien.goal.name}
              className="w-12 h-12 object-cover rounded-lg"
            />
            <div>
              <h4 className="font-semibold text-lg">{chien.goal.name}</h4>
              <p className="text-gray-600">{chien.goal.description}</p>
            </div>
          </div>
        ) : (
          <p className="text-gray-500 italic">Aucun objectif défini</p>
        )}
      </div>

      <button
        onClick={onEdit}
        className="btn-primary font-medium py-3 px-6 rounded-lg w-full text-lg"
      >
        Modifier le profil
      </button>
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

  // Gestion spécifique des intérêts, séparés par des virgules
  const handleInteretsChange = (e) => {
    const val = e.target.value.slice(0, 200); // Limite globale pour les intérêts
    setFormData({
      ...formData,
      interets: val
        .split(",")
        .map((i) => i.trim())
        .filter((i) => i.length > 0),
    });
  };

  // Gestion de l'objectif
  const handleGoalChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      goal: {
        ...formData.goal,
        [name]: value,
      },
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
      className="max-w-2xl w-full mx-auto bg-white shadow-lg rounded-2xl p-6 space-y-6"
    >
      <h2 className="text-2xl font-bold text-tertiary mb-4">
        Modifier le profil
      </h2>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
        <input
          type="text"
          name="nom"
          placeholder="Nom du chien (max 30 caractères)"
          value={formData.nom}
          maxLength={30}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <input
          type="text"
          name="proprietaire"
          placeholder="Nom du propriétaire (max 50 caractères)"
          value={formData.proprietaire}
          maxLength={50}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <input
          type="number"
          name="age"
          placeholder="Âge (en années)"
          value={formData.age}
          min="0"
          max="20"
          onChange={handleChange}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent"
        />
        <input
          type="text"
          name="localisation"
          placeholder="Ville (max 30 caractères)"
          value={formData.localisation}
          maxLength={30}
          onChange={handleChange}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* Image */}
      <input
        type="text"
        name="image"
        placeholder="URL de l'image du chien"
        value={formData.image}
        onChange={handleChange}
        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent"
      />

      {/* Description */}
      <textarea
        name="description"
        placeholder="Description du chien (max 300 caractères)"
        value={formData.description}
        maxLength={300}
        onChange={handleChange}
        rows="4"
        className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent"
      />

      {/* Intérêts */}
      <div>
        <label className="block text-sm font-medium text-gray-700 mb-2">
          Intérêts
        </label>
        <input
          type="text"
          name="interets"
          placeholder="Ex: rencontrer de nouveaux amis, explorer le parc, nager"
          value={formData.interets ? formData.interets.join(", ") : ""}
          maxLength={200}
          onChange={handleInteretsChange}
          className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent"
        />
      </div>

      {/* Objectif */}
      <div className="rounded-lg p-4 bg-gray-50">
        <h3 className="font-semibold text-lg mb-3 text-tertiary">Objectif</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <input
            type="text"
            name="name"
            placeholder="Nom de l'objectif (ex: Steack)"
            value={formData.goal?.name || ""}
            maxLength={30}
            onChange={handleGoalChange}
            className="w-full border rounded-lg p-3 focus:ring-2 focus:ring-primary focus:border-transparent"
          />
        </div>
      </div>

      <button
        type="submit"
        className="btn-primary font-medium py-3 px-6 rounded-lg w-full text-lg"
      >
        Sauvegarder les modifications
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
        id: 1,
        nom: "Milo",
        proprietaire: "Sophie Martin",
        image: "/assets/img/dog1.jpg",
        age: 5,
        localisation: "Toulouse",
        description:
          "Milo est un chien énergique et sociable qui adore les aventures en plein air. Toujours prêt pour une nouvelle rencontre, il est le compagnon idéal pour des sorties au parc ou des balades en ville.",
        interets: ["rencontrer de nouveaux amis", "explorer le parc", "nager"],
        success: 9,
        isMatched: true,
        goal: {
          name: "Steack",
          image: "/assets/img/steack.png",
          description: "Une envie de steack pour un soir",
        },
        messages: [],
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
    <div className="min-h-screen p-10">
      <h1 className="text-3xl mt-4 font-bold text-tertiary mb-6">Profil </h1>
      {isEditing ? (
        <FormProfil chien={chien} onSave={handleSave} />
      ) : (
        <ProfilChien chien={chien} onEdit={() => setIsEditing(true)} />
      )}
    </div>
  );
}
