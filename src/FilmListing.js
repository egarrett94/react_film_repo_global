import React, {Component} from 'react';
import FilmRow from './FilmRow';

class FilmListing extends Component {

	constructor(props) {
		super(props) 
		this.state = {
			filter: 'all'
		}
	}

	handleFilterClick = (filter) => {
		this.setState({
			filter: filter 
		})
		console.log('setting filter to ' + filter) 
	}

	render() {

		const {faves, films} = this.props

		let allFilms = []
		if (this.state.filter === 'all') {
			allFilms = this.props.films.map( (film, index) => {
				return <FilmRow 
				onFaveToggle={ () => this.props.onFaveToggle(film)}
				onDetailsClick={ () => this.props.onDetailsClick(film)}
				key={film.id}
				film={film}
				isFave={faves.includes(film)}
				url={film.poster_path}

				/>
			})
		} else {
			allFilms = this.props.faves.map( (film, index) => {
				return <FilmRow 
				onFaveToggle={ () => this.props.onFaveToggle(film)}
				onDetailsClick={ () => this.props.onDetailsClick(film)}
				key={film.id}
				film={film}
				isFave={faves.includes(film)}
				url={film.poster_path}

				/>
			})
		}//conditional end tag

		const allFilter = this.state.filter === 'all' ? 'is-active' : ' '
		const favesFilter = this.state.filter === 'faves' ? 'is-active' : ' '
		var favCount = this.props.faves.length
		return(
			<div className="film-list">
			    <h1 className="section-title">FILMS</h1>
			    <div className="film-list-filters">
			        <div className={"film-list-filter " + allFilter} onClick={() => this.handleFilterClick('all')}>
			            <span>ALL</span>
			            <span className="section-count">{this.props.films.length}</span>
			        </div>
			        <div className={"film-list-filter " + favesFilter} onClick={() => this.handleFilterClick('faves')}>
			            <span>FAVES</span>
			            <span className="section-count">{favCount}</span>
			        </div>
			    </div>

			    {allFilms}
			</div>
		)
	}
}

export default FilmListing;