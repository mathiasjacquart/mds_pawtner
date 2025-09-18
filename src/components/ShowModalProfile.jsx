import { X, User, Calendar, MapPin } from "lucide-react";

export default function ShowModalProfile({ isOpen, onClose, dog }) {
  if (!isOpen || !dog) return null;

  const handleOverlayClick = (e) => {
    if (e.target === e.currentTarget) {
      onClose();
    }
  };

  return (
    <div className="modal-overlay" onClick={handleOverlayClick}>
      <div className="modal-content">
        <button
          className="modal-close-btn "
          onClick={onClose}
          aria-label="Fermer la modale"
        >
          <X size={24} />
        </button>

        <div className="modal-header">
          <img src={dog.image} alt={dog.nom} className="modal-dog-image" />
          <div className="modal-dog-info">
            <h2 className="modal-dog-name">{dog.nom}</h2>
            <div className="modal-dog-details">
              <div className="modal-detail-item">
                <User size={16} className="modal-detail-icon" />
                <span>{dog.proprietaire}</span>
              </div>
              <div className="modal-detail-item">
                <Calendar size={16} className="modal-detail-icon" />
                <span>{dog.age} ans</span>
              </div>
              <div className="modal-detail-item">
                <MapPin size={16} className="modal-detail-icon" />
                <span>{dog.localisation}</span>
              </div>
            </div>
          </div>
        </div>

        <div className="modal-body">
          <div className="modal-section">
            <h3 className="font-primary font-medium">Description</h3>
            <p>{dog.description}</p>
          </div>

          <div className="modal-section">
            <h3 className="font-primary font-medium">Intérêts</h3>
            <div className="modal-interests uppercase font-primary font-medium">
              {dog.interets.map((interet, index) => (
                <span key={index} className="modal-interest-tag">
                  {interet}
                </span>
              ))}
            </div>
          </div>

          <div className="modal-section">
            <h3 className="font-primary font-medium">Objectif</h3>
            <div className="modal-goal">
              <img
                src={dog.goal.image}
                alt={dog.goal.name}
                className="modal-goal-image"
              />
              <div>
                <h4>{dog.goal.name}</h4>
                <p>{dog.goal.description}</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
