//src/EventNumber.js

import React, { Component } from "react";
import { EventNumeberAlert } from "./Alert";

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
				errorText: "⚠️Enter a value between 1 and 32",
			});
		}
	};

	render() {
		return (
			<div className="number-of-events">
				<EventNumeberAlert text={this.state.errorText} />
				<label className="number-of-events-label">Number of Events: </label>
				<input
					type="number"
					className="number-of-events-input"
					min={1}
					max={32}
					value={this.state.query}
					onChange={this.handleInputChanged}
				/>
			</div>
		);
	}
}

export default EventNumber;
