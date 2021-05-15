import React from "react";

export default class MovieForm extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            movieName: '',
            director: '',
            releaseYear: ''
        }
    }

    handleChange=(e) => {
        this.setState({[e.target.id]: e.target.value});
    }
    
    render() {
        return(
        <div className="container movieForm">
        <h2 id="formTitle">Enter New Movie:</h2>
        <form onSubmit={(e) => this.props.submitMovies(this.state, e)} className="row">
          <div className="col-md-12 mb-3">
            <label htmlFor="movieName" className="form-label">Movie Title:</label>
            <input onChange={this.handleChange} value={this.state.movieName} type="text" className="form-control" id="movieName" placeholder="Braveheart"/>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="director" className="form-label">Director:</label>
            <input onChange={this.handleChange} value={this.state.director} type="text" className="form-control" id="director" placeholder="Mel Gibson"/>
          </div>
          <div className="col-md-8 mb-3">
            <label htmlFor="releaseYear" className="form-label">Release Year:</label>
            <input onChange={this.handleChange} value={this.state.releaseYear} type="text" className="form-control" id="releaseYear" placeholder="1995"/>
          </div>
          <div className="col-12" id="submitArea">
            <button type="submit" className="changeSubmit btn btn-primary" id="submitButton">Submit</button>
          </div>
        </form>
        </div>
        )
    }
}