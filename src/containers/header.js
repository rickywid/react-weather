import React, { Component } from 'react';
import { connect } from 'react-redux';
import { bindActionCreators } from 'redux'
import { GetWeatherAction } from '../actions/index';

class Header extends Component {
	
	constructor(props){
		super(props);

		this.state = { term: ''};
		this.state = { country: 'ca' };

		this.onHandleChange = this.onHandleChange.bind(this);
		this.onHandleSubmit = this.onHandleSubmit.bind(this);
		this.onHandleSelect = this.onHandleSelect.bind(this);
	}

	onHandleChange(e){
		this.setState({ term: e.target.value })
		//console.log(this.state.term);
	}

	onHandleSubmit(e){
		e.preventDefault();

		//perform action
		this.props.getWeather(this.state.term, this.state.country);
		this.setState({ term: '' });
	}

	onHandleSelect(e){
		this.setState({ country: e.target.value });
	}
	render(){
		return(
			<div className="col-md-12 form">
				<form onSubmit = { this.onHandleSubmit }>
					<div className="col-md-8">
						<input  type = "text" 
								className = "form-control" 
								value = { this.state.term }
								onChange = { this.onHandleChange }
								placeholder = "Enter city..."
								required
						/>
					</div>
					<div className="col-md-4">
						<select id="country" className="form-control select-options" onChange={this.onHandleSelect}>
							<option value="ca">Canada</option>
							<option value="us">USA</option>
							<option value="au">Australia</option>
							<option value="kh">Cambodia</option>
							<option value="th">Thailand</option>
							<option value="mm">Myanmar</option>
							<option value="la">Laos</option>
							<option value="kr">South Korea</option>
							<option value="jp">Japan</option>
						</select>
						<button type="submit" className="btn btn-primary">Search</button>
					</div>
				</form>
			</div>

		)
	}
}

function mapDispatchToProps(dispatch){
	return bindActionCreators({ getWeather: GetWeatherAction }, dispatch);
}

export default connect(null, mapDispatchToProps)(Header);