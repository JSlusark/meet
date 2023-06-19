// src/__tests__/App.test.js

import React from "react";
import { shallow, mount } from "enzyme";
import App from "../App";
import EventList from "../EventList"; // You may need to adjust the path based on your file structure
import CitySearch from "../CitySearch";
import EventNumber from "../EventNumber";
import { mockData } from "../mock-data";
import { extractLocations, getEvents } from "../api";

//unit testing
describe("<App /> component", () => {
	let AppWrapper;
	beforeAll(() => {
		AppWrapper = shallow(<App />);
	});

	test("render list of events", () => {
		expect(AppWrapper.find(EventList)).toHaveLength(1);
	});

	test("render CitySearch", () => {
		expect(AppWrapper.find(CitySearch)).toHaveLength(1);
	});

	//integration testing
	describe("<App /> integration", () => {
		test('App passes "events" state as a prop to EventList', () => {
			const AppWrapper = mount(<App />);
			const AppEventsState = AppWrapper.state("events");
			expect(AppEventsState).not.toEqual(undefined);
			expect(AppWrapper.find(EventList).props().events).toEqual(AppEventsState);
			AppWrapper.unmount();
		});
	});

	test('App passes "locations" state as a prop to CitySearch', () => {
		const AppWrapper = mount(<App />);
		const AppLocationsState = AppWrapper.state("locations");
		expect(AppLocationsState).not.toEqual(undefined);
		expect(AppWrapper.find(CitySearch).props().locations).toEqual(
			AppLocationsState
		);
		AppWrapper.unmount();
	});

	test("get list of events matching the city selected by the user", async () => {
		const AppWrapper = mount(<App />);
		const CitySearchWrapper = AppWrapper.find(CitySearch);
		const locations = extractLocations(mockData);
		CitySearchWrapper.setState({ suggestions: locations });
		const suggestions = CitySearchWrapper.state("suggestions");
		const selectedIndex = Math.floor(Math.random() * suggestions.length);
		const selectedCity = suggestions[selectedIndex];
		await CitySearchWrapper.instance().handleItemClicked(selectedCity);
		const allEvents = await getEvents();

		const eventsToShow = allEvents.filter(
			(event) => event.location === selectedCity
		);
		expect(AppWrapper.state("events")).toEqual(eventsToShow);

		AppWrapper.unmount();
	});

	test('get list of all events when user selects "See all cities"', async () => {
		const AppWrapper = mount(<App />);
		const suggestionItems = AppWrapper.find(CitySearch).find(".suggestions li");
		await suggestionItems.at(suggestionItems.length - 1).simulate("click");
		const allEvents = await getEvents();
		expect(AppWrapper.state("events")).toEqual(allEvents);
		AppWrapper.unmount();
	});

	//Integration tests for EventNumber

	test('App passes "EventNumber" state as a prop to EventNumber', () => {
		const AppWrapper = mount(<App />);
		const AppEventCountState = AppWrapper.state("eventNumber");
		expect(AppEventCountState).not.toEqual(undefined);
		AppWrapper.setState({ EventNumber: 10 });
		expect(AppWrapper.find(EventNumber).props().EventNumber).toBe(
			AppWrapper.state("EventNumber")
		);
		AppWrapper.unmount();
	});

	test("Filtered list of events matches mock data", async () => {
		const AppWrapper = mount(<App />);
		const EventNumberWrapper = AppWrapper.find(EventNumber);
		EventNumberWrapper.find(".number-of-events-input").simulate("change", {
			target: { value: 20 },
		});
		await getEvents();
		expect(AppWrapper.state("events")).toEqual(mockData.slice(0, 20));
		AppWrapper.unmount();
	});
});
