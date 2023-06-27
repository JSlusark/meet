// src/CitySearch.js
import React, { Component, component } from "react";
import { CityAlert } from "./Alert";
class CitySearch extends Component {
	state = {
		query: "",
		suggestions: [],
		showSuggestions: undefined,
	};

	handleInputChanged = (event) => {
		const value = event.target.value;
		this.setState({ showSuggestions: true });
		const suggestions = this.props.locations.filter((location) => {
			return location.toUpperCase().indexOf(value.toUpperCase()) > -1;
		});
		if (suggestions.length === 0) {
			console.log("not city " + suggestions + " " + value);
			this.setState({
				query: value,
				suggestions: [],
				showSuggestions: false,
				infoText: " ⚠️Type a valid city name",
			});
		} else {
			console.log("yes city " + suggestions + " " + value);
			return this.setState({
				query: value,
				suggestions,
				infoText: "",
			});
		}
	};

	handleItemClicked = (suggestion) => {
		this.setState({
			query: suggestion,
			showSuggestions: false,
		});

		this.props.updateEvents(suggestion);
	};

	render() {
		return (
			<div className="CitySearch">
				<div>
					<CityAlert text={this.state.infoText} />
					<label className="city-label">City: </label>
					<input
						type="text"
						className="city"
						value={this.state.query}
						onChange={this.handleInputChanged}
						onFocus={() => {
							this.setState({ showSuggestions: true });
						}}
					/>
				</div>

				<ul
					className="suggestions"
					style={this.state.showSuggestions ? {} : { display: "none" }}
				>
					{this.state.suggestions.map((suggestion) => (
						<li
							className="suggestion"
							key={suggestion}
							onClick={() => this.handleItemClicked(suggestion)}
						>
							{suggestion}
						</li>
					))}
					<li
						key="all"
						onClick={() => this.handleItemClicked("all")}
					>
						<b>See all cities</b>
					</li>
				</ul>
			</div>
		);
	}
}

export default CitySearch;
