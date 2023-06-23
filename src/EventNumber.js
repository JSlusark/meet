//src/EventNumber.js

import React, { Component } from "react";
import { ErrorAlert } from "./Alert";

class EventNumber extends Component {
	constructor() {
		super();
		this.state = {
			query: 32,
			errorText: "",
		};
	}

	handleInputChanged = (event) => {
		const value = event.target.value;
		if (value >= 1 || value <= 32) {
			this.setState({
				query: value,
				errorText: "",
			});
			this.props.updateEvents(this.props.selectedCity, value);
		}
		if (value < 1 || value > 32) {
			this.setState({
				query: value,
				errorText: "Please enter a valid number",
			});
		}
	};

	render() {
		return (
			<div className="number-of-events">
				<label className="number-of-events-label">Number of Events: </label>
				<input
					type="number"
					className="number-of-events-input"
					min={1}
					max={32}
					value={this.state.query}
					onChange={this.handleInputChanged}
				/>
				<ErrorAlert
					className="errorMessage"
					text={this.state.errorText}
				/>
			</div>
		);
	}
}

export default EventNumber;
