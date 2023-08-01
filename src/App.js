// src/App.js

import React, { Component } from "react";
import "./App.css";
import EventList from "./EventList";
import CitySearch from "./CitySearch";
import EventNumber from "./EventNumber";
import CityEventsChart from "./CityEventsChart";
import EventGenresChart from "./EventGenresChart";
import { OfflineAlert } from "./Alert";
import { getEvents, extractLocations } from "./api";
import "./nprogress.css";

class App extends Component {
	state = {
		events: [],
		locations: [],
		selectedLocation: "all",
		eventCount: 32,
		offlineAlert: "",
	};

	componentDidMount() {
		this.mounted = true;
		getEvents().then((events) => {
			if (this.mounted) {
				this.setState({
					events: events.slice(0, this.state.eventCount),
					locations: extractLocations(events),
				});
			}
		});
	}

	componentWillUnmount() {
		this.mounted = false;
	}

	updateNumberOfEvents(number) {
		this.setState({
			eventCount: number,
		});
	}

	updateEvents = (location, eventCount) => {
		const { numberOfEvents, selectedLocation } = this.state;
		if (location) {
			getEvents().then((events) => {
				const locationEvents =
					location === "all"
						? events
						: events.filter((event) => event.location === location);
				const eventsToShow = locationEvents.slice(0, numberOfEvents);
				this.setState({
					events: eventsToShow,
					selectedLocation: location,
				});
			});
		} else {
			getEvents().then((events) => {
				const locationEvents =
					selectedLocation === "all"
						? events
						: events.filter((event) => event.location === selectedLocation);
				const eventsToShow = locationEvents.slice(0, eventCount);
				this.setState({
					events: eventsToShow,
					numberOfEvents: eventCount,
				});
			});
		}
		if (!navigator.onLine) {
			this.setState({
				offlineAlert:
					"🔌 You are currently Offline. The list of events may not be up to date!",
			});
		} else {
			this.setState({
				offlineAlert: "",
			});
		}
	};

	render() {
		return (
			<div className="App">
				<h1>Meet App</h1>
				<div className="offlineAlert">
					<OfflineAlert text={this.state.offlineAlert} />
				</div>
				<div className="chartsContainer">
					<div className="chartItem">
						<h3>Total events per city</h3>
						<CityEventsChart
							allLocations={this.state.locations}
							events={this.state.events}
						/>
					</div>
					<div className="chartItem">
						<h3>Total events per genre</h3>
						<EventGenresChart events={this.state.events} />
					</div>
				</div>
				<h2>Search your event:</h2>
				<div className="SearchBar">
					<CitySearch
						locations={this.state.locations}
						updateEvents={this.updateEvents}
					/>

					<EventNumber
						EventNumber={this.state.eventCount}
						updateEvents={this.updateEvents}
					/>
				</div>
				<EventList events={this.state.events} />
			</div>
		);
	}
}

export default App;
