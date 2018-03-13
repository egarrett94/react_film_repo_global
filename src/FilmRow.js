import React, { Component } from 'react';
import FilmPoster from './FilmPoster.js';
import Fave from './Fave.js';

class FilmRow extends Component {

	render() {
		var fullYear = new Date();
		return(
			<div className="film-row" onClick={this.props.onDetailsClick}>
			 <FilmPoster film={this.props.film}/>
			  <div className="film-summary">
			    <h1>{this.props.film.title}</h1>
			    <p>{fullYear.getFullYear(this.props.film.release_date)}</p>
			  </div>
			  <Fave onFaveToggle={this.props.onFaveToggle} isFave={this.props.isFave} />
			</div>
		)
	}
}

export default FilmRow;