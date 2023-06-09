import Movie from "./Movie"
import movieData from "./data_movies.json"
import NewMovieForm from "./NewMovieForm"
import { useState } from "react"
import MovieDetails from "./MovieDetails"

export default function MovieList({searchValue}){
    const [movies, setMovies] = useState(movieData)
    // const data = movieData
    const [sortOrderRating, setSortOrderRating] = useState(true)
    const [sortOrderTitle, setSortOrderTitle] = useState(true)
    const [isDetailsDisplayed, setIsDetailsDisplayed] = useState(false)

    const [isDisplayed, setIsDisplayed] = useState(false)

    const [movieToDisplay, setMovieToDisplay] = useState({})

    const [movieIdToDisplayAfterNew, setMovieIdToDisplayAfterNew ] = useState(-1)


    function showAddMovieForm(){
        setIsDisplayed(prev => !prev)
        setIsDetailsDisplayed(false)
    }

    
    function sortByRating(){
        const newMovies = [...movies] 

        newMovies.sort((a,b) => b.avgRating - a.avgRating)
        
        if(!sortOrderRating) newMovies.reverse()
            
        setSortOrderRating(prev => !prev)
        setMovies(newMovies)    
    }

    function sortByTitle(){
        const newMovies = [...movies] 

        newMovies.sort((a,b) => (a.title.toLowerCase() > b.title.toLowerCase()) ? 1 : ((b.title.toLowerCase() > a.title.toLowerCase()) ? -1 : 0))

        if(!sortOrderTitle) newMovies.reverse()
 
        setSortOrderTitle(prev => !prev)
        setMovies(newMovies)
    }

    function onDeleteCallback(id){
        setMovies(prev => prev.filter(movie => movie.id !== id))
        setIsDetailsDisplayed(false)
    }
    function onEditCallback(id, newValue){
        const newMovies = [...movies]
        const movieObject = newMovies.find(movie => movie.id === id)

        console.log(movieObject)

        console.log(newValue)
        if (movieObject){
            movieObject.avgRating = newValue
            console.log(movieObject)
            setMovies(newMovies)
        }
        

    }

    function addNewMovie(movie) {
        let id = Math.max(...movies.map( m => m.id)) + 1
        let year = movie.year.length !== 4 ? "" : movie.year
        let avgRating = movie.rating
        let title = movie.title
        let description = movie.desc
        let director = movie.director

        let randomImageSrc = Math.floor(Math.random() * (21 - 1 + 1) + 1)

        setMovies(prev => [...prev, {
            id,
            title,
            avgRating,
            year,
            description,
            director,
            "image": randomImageSrc + ".jpg"
        }])
        
        // let newMovie = movies.find(m => m.id === id)
        // console.log(newMovie)
        // setMovieToDisplay(newMovie)
        // setIsDisplayed(false)
        // setIsDetailsDisplayed(true)
        setMovieIdToDisplayAfterNew(id)
    }
    // console.log(movieIdToDisplayAfterNew)
    // console.log(movies)
    
    function onShowDetails(movie){
        setMovieToDisplay(movie)

        setIsDetailsDisplayed(true)
        setIsDisplayed(false)
        
    }

    function onHideDetails(){
        setIsDetailsDisplayed(false)
    }

    if (movieIdToDisplayAfterNew !== -1){
        const movie = movies.find(m => m.id === movieIdToDisplayAfterNew)
        setMovieIdToDisplayAfterNew(-1)
        setMovieToDisplay(movie)
        setIsDetailsDisplayed(true)
        setIsDisplayed(false)
    }

    let movieList = movies.map(movie => (
        (movie.title).toLowerCase().replace(' ','').includes(searchValue) &&
        <Movie
            key={movie.id}
            id={movie.id}
            title={movie.title}
            desc={movie.description}
            img={movie.image}
            director={movie.director}
            year={movie.year}
            rating={movie.avgRating}
            deleteHandler={onDeleteCallback}
            editHandler={onEditCallback}
            showDetails={onShowDetails}
            movieObject={movie}
        />
    ))


    return (
        <div className="container">
            <div className="movielist--container">
                <div className="movielist--buttons-div">
                    <button onClick={sortByRating}>Rating</button>
                    <button onClick={sortByTitle}>A-Z</button>
                    <button className="add-movie-button" onClick={showAddMovieForm}>Add</button>

                </div>
                <div className="movielist--list-container">
                    {movieList}
                </div>
                
            </div>

            { isDisplayed && <div>
                <NewMovieForm callback={addNewMovie}/>
            </div>}

            {isDetailsDisplayed && <div>
                <MovieDetails movie={movieToDisplay} 
                closeCallback={onHideDetails} deleteCallback={onDeleteCallback} editCallback={onEditCallback}/>
            </div>}

        </div>
    )
}