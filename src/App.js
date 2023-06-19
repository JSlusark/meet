// src/App.js

import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import EventNumber from "./EventNumber";
import { getEvents, extractLocations } from "./api";
import "./nprogress.css";

class App extends Component {
	state = {
		events: [],
		locations: [],
		selectedLocation: "all",
		eventNumber: 32,
	};

	componentDidMount() {
		this.mounted = true;
		getEvents().then((events) => {
			if (this.mounted) {
				this.setState({ events, locations: extractLocations(events) });
			}
		});
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	updateNumberOfEvents(number) {
		this.setState({
			eventNumber: number,
		});
	}

	updateEvents = (location, eventCount) => {
		if (!eventCount) {
			getEvents().then((events) => {
				const locationEvents =
					location === "all"
						? events
						: events.filter((event) => event.location === location);
				const shownEvents = locationEvents.slice(0, this.state.eventCount);
				this.setState({
					events: shownEvents,
					selectedCity: location,
				});
			});
		} else if (eventCount && !location) {
			getEvents().then((events) => {
				const locationEvents = events.filter((event) =>
					this.state.locations.includes(event.location)
				);
				const shownEvents = locationEvents.slice(0, eventCount);
				this.setState({
					events: shownEvents,
					eventCount: eventCount,
				});
			});
		} else if (this.state.selectedCity === "all") {
			getEvents().then((events) => {
				const locationEvents = events;
				const shownEvents = locationEvents.slice(0, eventCount);
				this.setState({
					events: shownEvents,
					eventCount: eventCount,
				});
			});
		} else {
			getEvents().then((events) => {
				const locationEvents =
					this.state.locations === "all"
						? events
						: events.filter(
								(event) => this.state.selectedCity === event.location
						  );
				const shownEvents = locationEvents.slice(0, eventCount);
				this.setState({
					events: shownEvents,
					eventCount: eventCount,
				});
			});
		}
	};

	render() {
		return (
			<div className="App">
				<div className="SearchBar">
					<CitySearch
						locations={this.state.locations}
						updateEvents={this.updateEvents}
					/>
					<EventNumber
						EventNumber={this.state.EventNumber}
						updateEvents={this.updateEvents}
					/>
				</div>
				<EventList events={this.state.events} />
			</div>
		);
	}
}

export default App;
