import React from "react";
import Movie from './movie.js';
import MovieForm from './movieForm.js';

export default class MovieList extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = 
                    {movies:[]}
    }

    componentDidMount() {
        this.getMovies();
    }

    getMovies = async() => {
        try{
            const data = await fetch("https://crudcrud.com/api/20ccfb50a63c4a2bacd5418b444f8569/movies")
            const response = await data.json();
            this.setState({movies:[...response]});
            console.log(response);

        }catch(error){
            console.log("ERROR GET MOVIES", error);
        }
    }

    async submitMovies(newMovie, e) {
        try{
            console.log(newMovie);
            await fetch("https://crudcrud.com/api/20ccfb50a63c4a2bacd5418b444f8569/movies", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json"
                },
                body: JSON.stringify(newMovie)
            });
            await this.getMovies();
            e.preventDefault();
        }catch(error){
            console.log("ERROR SUBMIT MOVIES", error);
        }
            
        
    }

    render() {
        return (
            <div className="container"> 
                <h1>MOVIE LIST</h1>
                {this.state.movies.map(movie => {
                    return <Movie  getMovies={this.getMovies}
                                   movieName={movie.movieName}
                                   director={movie.director}
                                   releaseYear={movie.releaseYear}
                                   key={movie._id}
                                   movieID={movie._id}
                                />
                })} 

                <MovieForm submitMovies={this.submitMovies}/>

            </div>
        )
    }
}