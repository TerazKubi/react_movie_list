import { useState } from "react"

export default function MovieDetails({ movie, closeCallback, deleteCallback, editCallback }) {
    const [isEdit, setIsEdit] = useState(false)
    const [rating, setRating] = useState(movie.avgRating)
    console.log(movie)

    function deleteMovie(){
        deleteCallback(movie.id)
    }

    function showEdit(){
        setIsEdit(true)
        // editCallback()
    }

    function save(){
        editCallback(movie.id, rating)
        setIsEdit(false)
    }

    function onChangeHandler(e){
        // console.log(e.target.value)
        setRating(e.target.value)
    }

    return (
        <div className="movie-details--container">
            <img src={"assets/" + movie.image} alt="movie-big-poster"/>
            <div className="movie-details--close-div" onClick={closeCallback}>
            <div className="x"></div>
            </div>
            <div className="movie-details--info-container">
                <h1>{movie.title}</h1>

                {isEdit ? <div className="movie-details--edit-inputs">
                            <input type="number" onChange={onChangeHandler} step={0.01} min={0} max={5} defaultValue={movie.avgRating}/>
                            <button onClick={save}>Save</button>
                        </div>
                    : <p>{movie.avgRating}</p>
                }
                
                <small>{movie.year} {movie.director}</small>
                <p>{movie.description}</p>
            </div>

            <div className="movie-details--buttons-div">
                {!isEdit && <button onClick={showEdit}>Edit</button>}
                <button onClick={deleteMovie}>Delete</button>
            </div>
        </div>
    )
}