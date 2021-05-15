import React from "react";

export default class UpdateForm extends React.Component {
    
    constructor(props) {
        super(props)
        this.state = {
            movieName: this.props.movieName,
            director: this.props.director,
            releaseYear: this.props.releaseYear
        }
    }

    handleChange=(e) => {
        this.setState({[e.target.name]: e.target.value});
    }
    
    render() {
        return(
        <div className="container movieForm">
        <h2 id="formTitle">Enter Updated Movie Info:</h2>
        <form onSubmit={e => {e.preventDefault()}} className="row">
          <div className="col-md-12 mb-3">
            <label htmlFor="movieNameUpdate" className="form-label">Movie Title:</label>
            <input onChange={this.handleChange} name="movieName" value={this.state.movieName} type="text" className="form-control" id="movieNameUpdate" placeholder="Braveheart"/>
          </div>
          <div className="col-md-4 mb-3">
            <label htmlFor="directorUpdate" className="form-label">Director:</label>
            <input onChange={this.handleChange} name="director" value={this.state.director} type="text" className="form-control" id="directorUpdate" placeholder="Mel Gibson"/>
          </div>
          <div className="col-md-8 mb-3">
            <label htmlFor="releaseYearUpdate" className="form-label">Release Year:</label>
            <input onChange={this.handleChange} name="releaseYear" value={this.state.releaseYear} type="text" className="form-control" id="releaseYearUpdate" placeholder="1995"/>
          </div>
          <div className="col-12">
            <button onClick={(e) => {this.props.updateMovie(this.state)}} type="submit" className="changeSubmit btn btn-primary" id="submitUpdateButton">Submit</button>
          </div>
        </form>
        <br/>
        </div>
        )
    }
}