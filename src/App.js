
import React, { Component } from 'react';
import FilmDetails from './FilmDetails.js';
import FilmListing from './FilmListing.js';
import TMDB from './TMDB.js';
import './App.css';
require('dotenv').config();

const films = TMDB.films

class App extends Component {
	constructor(props) {
		super(props)
		this.state = {
			//the TMDB.films
			films: films,
			//array of faves
			faves: [],
			//current film being looked at 
			current: {}
		}
		this.handleFaveToggle = this.handleFaveToggle.bind(this)
		this.handleDetailsClick = this.handleDetailsClick.bind(this)
	}

	handleFaveToggle(film) {
		//this makes a copy of the array
		const faves = this.state.faves.slice()
		const filmIndex = faves.indexOf(film)
		if (filmIndex !== -1) {
			//the film is already a favorite.
			//start at filmIndex and grab one item
			faves.splice(filmIndex, 1)
			console.log('removing a favorite ' + film.title)
		} else {
			//the film must be added to faves
			faves.push(film)
			console.log('adding a favorite ' + film.title)
		}
		//sets the state of state.faves to faves
		this.setState({faves})
	}

	handleDetailsClick = (film) => {
		console.log('fetching details for ' + film.title )
		console.log(TMDB)
		var base = this
		const url = `https://api.themoviedb.org/3/movie/${film.id}?api_key=${TMDB.api_key}&append_to_response=videos,images&language=en`
		fetch(url).then(response => {
		  return response.json().then(data => {
		    console.log(data) // take a look at what you get back!
		    this.setState({
				current: data 
			})
		  })
		})
	}

  	render() {

    return (
      <div className="film-library">
        <FilmListing onDetailsClick={this.handleDetailsClick} onFaveToggle={this.handleFaveToggle} films={this.state.films} faves={this.state.faves} />
        <FilmDetails film={this.state.current} />
      </div>
    );
  }
}

export default App;
