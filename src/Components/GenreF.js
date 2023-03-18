const GenreF=()=>{
    const genres =[
        "Drama", "Crime", "Action", "Fantasy", "Western", "Science Fiction", "Thriller", "War", "Animation"]
    const displayGenreSelection =(genre)=>{
        console.log(`Filtering by ${genre}`);
    }
    return(

        <div>
            <center><h1>Top 15 Movies of All Time</h1></center>
            <div className="Genre-Box">
                <h2 className="Heading"> Filter by Genre</h2>
                <div>{
                    genres.map(genre =>(
                        <button className="Genre-BTN" onClick={()=>displayGenreSelection(genre)}>{genre}</button>
                    ))
                }
                </div>
            </div>
        </div>
    )
}
export default GenreF;