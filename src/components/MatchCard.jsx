import Crossbone from '../assets/img/crossbone.jpg'
import Dogfootprints2 from '../assets/img/iconsvg-dogfootprints2.svg'
import Crossbones_transparent from '../assets/img/crossbones_transparent.png'
import doug from '../assets/img/doug.webp'
import tongue from '../assets/img/tongue.png'

export default function  MatchCard() {
    

  return (
  <div className="body-match">
    <img src={tongue} alt="" className='tongueimg' />
    <h1>LA CHASSE AUX TRUFFES EST OUVERTE</h1>
    <div className="matchapp">
        <div className="matchcard">
            <div className="card-info">
              <img src={doug} alt="" className="card-img"/>
              <h2>
                DOUG, 7 ans. 
              </h2>
              <p className="card-description">
                Amateur de balades en forêt et de siestes au soleil, Doug est un chien affectueux
                 qui cherche une famille aimante pour partager ses aventures quotidiennes. 
              </p>
              
            </div>
        </div>

        <div className="actions">
          <div className="container">
          <button className="matchbtn like">
            <img src={Crossbones_transparent} alt="Dislike" className="imgbtn"/>
          </button>
          </div>
          <div className="container">
          <button className="matchbtn dislike">
            <img src={Dogfootprints2} alt="Like" className="imgbtn " />
          </button>
         </div>
        </div>
    </div>





  </div>
  )
}