import { useState } from "react";
import { Calendar, MapPin, MoveRight } from "lucide-react";
import ShowModalProfile from "./ShowModalProfile";

export default function HomeCard({ animal }) {
  const [isModalOpen, setIsModalOpen] = useState(false);

  const handleViewProfile = () => {
    setIsModalOpen(true);
  };

  const handleCloseModal = () => {
    setIsModalOpen(false);
  };

  return (
    <>
      <div className="bg-white rounded-lg my-4 w-full">
        <div className="flex  flex-col   shadow-md rounded-lg ">
          <img
            src={animal.image}
            alt="animal"
            className="w-full  object-cover rounded-t-lg h-50"
          />
          <div className="flex flex-col px-7 py-4">
            <h4 className="text-xl font-bold text-secondary">{animal.nom}</h4>
            <div className="flex flex-row items-center gap-4">
              <p className="flex flex-row items-center my-2">
                <span className="font-bold mr-3">
                  <Calendar size={20} className="text-tertiary" />
                </span>
                <span className=""> {animal.age} ans</span>
              </p>
              <p className="flex flex-row items-center  my-2">
                <span className="mr-2">
                  <MapPin size={20} className="text-tertiary" />
                </span>
                <span className=""> {animal.localisation}</span>
              </p>
            </div>
            <p>
              {animal.description ? animal.description.split(".")[0] + "." : ""}
            </p>
            <button
              className=" my-2 btn-primary w-40 font-medium flex flex-row items-center justify-start hover:bg-opacity-90 transition-all duration-200"
              onClick={handleViewProfile}
            >
              Voir le profil
              <span className="ml-2">
                {" "}
                <MoveRight size={20}></MoveRight>
              </span>
            </button>
          </div>
        </div>
      </div>

      <ShowModalProfile
        isOpen={isModalOpen}
        onClose={handleCloseModal}
        dog={animal}
      />
    </>
  );
}
