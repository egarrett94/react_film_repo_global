import React, {Component} from 'react';

class Fave extends Component {

	// constructor(props) {
	// 	super() 
	// 	this.handleClick = this.handleClick.bind(this)
	// }

	handleClick = (e) => {
		//event is not going to be bubbled up to ancestors 
		//or containing elements
		e.stopPropagation()
		console.log('handling fave click')
		//calls a property method that was passed in
		this.props.onFaveToggle()
	}

	render() {
		const isFave = (this.props.isFave) ? 'remove_from_queue' : 'add_to_queue'
		return(
			<div className={'film-row-fave ' + isFave}>
			  <p className="material-icons" onClick={this.handleClick}>{isFave}</p>
			</div>
		)
	}
}

export default Fave;