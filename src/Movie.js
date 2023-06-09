
export default function Movie(props) {

    // console.log(props)
   

    


    return (
        <div className="movie--container" onClick={() => props.showDetails(props.movieObject)}>
            <div className="movie--img-container">
                <img src={"./assets/"+props.img} alt={props.img}/>
                <div className="movie--rating-div">
                    <span>{props.rating}</span>
                </div>
            </div>
            <div className="movie--title-container">
                <span className="movie--title-text">{props.title}</span><br/>
                <small className="movie--small-text">{props.year} {props.director}</small>
            </div>


            {/* <h1>{props.title} {props.year && "(" + props.year + ")" }</h1>
            {props.desc && <p>{props.desc}</p>}
            <div>
            
                <div>Average rating: {isEdit ? <div><input onChange={onChangeHandler} type="number" step={0.01} min={0} max={5} defaultValue={props.rating}/>
                <button onClick={save}>Save</button></div> : props.rating }</div>

                {props.director && <p>Director: {props.director}</p>}
            </div>
            <button onClick={deleteMovie}>Delete</button>
            {!isEdit && <button onClick={edit}>Edit</button>} */}
        </div>
    )
}