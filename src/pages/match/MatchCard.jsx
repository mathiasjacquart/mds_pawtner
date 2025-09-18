import { useState, useEffect } from "react";
import Dogfootprints2 from "../../../public/assets/img/iconsvg-dogfootprints2.svg";
import Crossbones_transparent from "../../../public/assets/img/crossbones_transparent.png";
import ShowModalProfile from "../../components/ShowModalProfile.jsx";
import animals from "../../../data/animals.json";
import tongue from "../../../public/assets/img/tongue.png";

export default function MatchCard() {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [currentDog, setCurrentDog] = useState(null);
  const [availableDogs, setAvailableDogs] = useState([]);
  const [currentIndex, setCurrentIndex] = useState(0);

  // Filtrer les chiens (exclure l'utilisateur 1 et les chiens déjà matchés)
  useEffect(() => {
    const filteredDogs = animals.filter(
      (dog) => dog.id !== 1 && !dog.isMatched
    );
    setAvailableDogs(filteredDogs);
    if (filteredDogs.length > 0) {
      setCurrentDog(filteredDogs[0]);
    }
  }, []);

  const handleCardClick = (dog) => {
    setCurrentDog(dog);
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  const handleLike = () => {
    console.log("Like pour:", currentDog?.nom);
    nextCard();
  };

  const handleDislike = () => {
    console.log("Dislike pour:", currentDog?.nom);
    nextCard();
  };

  const nextCard = () => {
    if (currentIndex < availableDogs.length - 1) {
      const nextIndex = currentIndex + 1;
      setCurrentIndex(nextIndex);
      setCurrentDog(availableDogs[nextIndex]);
    } else {
      // Plus de cartes disponibles
      setCurrentDog(null);
    }
  };

  if (!currentDog) {
    return (
      <div className="body-match">
        <div className="match-title">
          <img src={tongue} alt="" className="title-icon" />
          <h1>LA CHASSE AUX TRUFFES EST OUVERTE</h1>
          <img src={tongue} alt="" className="title-icon" />
        </div>
        <div className="matchapp">
          <div className="no-more-cards">
            <h2>Plus de profils disponibles !</h2>
            <p>
              Revenez plus tard pour découvrir de nouveaux amis à quatre pattes
              🐕
            </p>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="body-match">
      <div className="match-title">
        <h1 className="text-center flex flex-col ">
          LA CHASSE AUX TRUFFES EST{" "}
          <div className="flex flex-row items-center justify-center">
            <span className="mr-2">
              <img src={tongue} alt="" className="title-icon" />
            </span>
            OUVERTE{" "}
            <span className="ml-2">
              <img src={tongue} alt="" className="title-icon" />
            </span>
          </div>
        </h1>
      </div>
      <div className="matchapp">
        <div className="cards-stack">
          {/* Carte actuelle */}
          <div
            className="matchcard current-card shadow-md"
            onClick={() => handleCardClick(currentDog)}
            style={{ cursor: "pointer" }}
          >
            <img
              src={currentDog.image}
              alt={currentDog.nom}
              className="card-img"
            />
            <div className="card-info">
              <div className="card-info-row">
                <h2 className="card-name">{currentDog.nom}</h2>
                <span className="card-age">{currentDog.age} ans</span>
                <div className="card-goal">
                  <img
                    src={currentDog.goal.image}
                    alt={currentDog.goal.name}
                    className="goal-icon"
                  />
                </div>
              </div>
            </div>
          </div>

          {/* Carte suivante (en arrière-plan) */}
          {currentIndex + 1 < availableDogs.length && (
            <div className="matchcard next-card shadow-md">
              <img
                src={availableDogs[currentIndex + 1].image}
                alt={availableDogs[currentIndex + 1].nom}
                className="card-img"
              />
              <div className="card-info">
                <div className="card-info-row">
                  <h2 className="card-name">
                    {availableDogs[currentIndex + 1].nom}
                  </h2>
                  <span className="card-age">
                    {availableDogs[currentIndex + 1].age} ans
                  </span>
                  <div className="card-goal">
                    <img
                      src={availableDogs[currentIndex + 1].goal.image}
                      alt={availableDogs[currentIndex + 1].goal.name}
                      className="goal-icon"
                    />
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>

        <div className="actions">
          <div className="container">
            <button className="matchbtn dislike" onClick={handleDislike}>
              <img
                src={Crossbones_transparent}
                alt="Dislike"
                className="imgbtn"
              />
            </button>
          </div>
          <div className="container">
            <button className="matchbtn like" onClick={handleLike}>
              <img src={Dogfootprints2} alt="Like" className="imgbtn " />
            </button>
          </div>
        </div>
      </div>

      <ShowModalProfile
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        dog={currentDog}
      />
    </div>
  );
}
