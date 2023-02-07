
import pin from "../assets/pin-icon.png"
export default function Content(props) {

    return (
      <div className="card-main">
          <div className="card-content">
          <img src={props.imageUrl} /> 
            <div className="card-container">
              <div className="card-header">
                  <img src={pin} /> 
              <h3> {props.location}</h3> 
                <a href={props.googleMapsUrl}>View map</a>
              </div>
              <div className="card-title">
                <h2> {props.title} </h2>
              </div>
              <div className="card-description">
                <h4>{props.startDate} {props.endDate}</h4>
                <p> {props.description}</p>
              </div>
            </div>
          </div>    
      </div>

    )
  }
  
  