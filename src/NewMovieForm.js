export default function NewMovieForm({ callback }) {
    

    function handleSubmit(event) {
        event.preventDefault()

        let title = event.target.title.value
        let desc = event.target.desc.value
        let year = event.target.year.value
        let rating = event.target.rating.value
        let director = event.target.director.value

        // showAddMovieForm()
        console.log({title, desc, year, rating, director})
        const movie = {title, desc, year, rating, director}
        callback(movie)
        
    }


    let form = (
        <form onSubmit={handleSubmit}>
            <table>
                <tr>
                    <td>Title:</td><td><input className="form-input" type="text" name="title" required/></td>
                </tr>
                <tr>
                    <td>Description:</td><td><input className="form-input" type="text" name="desc"/></td>
                </tr>    
                <tr>

                    <td>Year:</td><td><input className="form-input" type="text" name="year"/></td>
                </tr>
                <tr>
                    <td>AVG rating:</td><td><input className="form-input" type="number" name="rating" step={0.01} min={0} max={5} required/></td>

                </tr>
                <tr>

                    <td>Director:</td><td><input className="form-input" type="text" name="director"/></td>
                </tr>
                <tr>
                    <td></td><td><input type="submit" value="Add movie" className="form-submit" /></td>
                </tr>
                
            </table>
             
            
        </form>
            
    )

    return (
        <div className="new-movie-form--container">
            { form }
        </div>
    )
}