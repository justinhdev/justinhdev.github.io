import "./index.scss";

function Project(props) {
  return (
    <div className="projects-card">    
        <div className="card">
            <img src={props.img} className="card-image" />
            <p className="card-description"> {props.description} </p>
        </div>
    </div>
  );
}

export default Project;
