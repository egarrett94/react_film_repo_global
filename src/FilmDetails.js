import React, {Component} from 'react';

class FilmDetails extends Component {
	render() {
		return (
			<div className="film-details">
          		<h1 className="section-title">DETAILS</h1>
          		<li>{this.props.overview}</li>
        	</div>
		)
	}
}

export default FilmDetails; 