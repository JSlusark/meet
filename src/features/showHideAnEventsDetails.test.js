import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";
const feature = loadFeature(
	"./src/features/showHideAnEventsDetails.feature.md"
);
defineFeature(feature, (test) => {
	test("Events are displayed in a condensed format by default", ({
		given,
		when,
		then,
	}) => {
		let AppWrapper;
		given(
			"that the user initiates a search for events occurring in their local area",
			async () => {
				AppWrapper = await mount(<App />);
				AppWrapper.update();
				expect(AppWrapper.find(".event")).toHaveLength(mockData.length);
			}
		);

		when("the resulting events are displayed", () => {
			expect(AppWrapper.find(".event").at(0)).toHaveLength(1);
		});

		then("these events are presented in a collapsed format by default", () => {
			expect(AppWrapper.find(".event__Details").at(0)).toHaveLength(0);
		});
	});

	test("The user can unfold an event to view its full details", ({
		given,
		when,
		then,
	}) => {
		let AppWrapper;

		given("the event search results for a specific area", async () => {
			AppWrapper = await mount(<App />);
			AppWrapper.update();
			expect(AppWrapper.find(".event").at(0)).toHaveLength(1);
			expect(AppWrapper.find(".event__Details").at(0)).toHaveLength(0);
		});

		when("the user selects show details for a specific event", () => {
			AppWrapper.find(".event button").at(0).simulate("click");
		});

		then(
			"the selected event's details will be fully displayed, spanning the entirety of the page",
			() => {
				expect(AppWrapper.find(".event-details").at(0)).toHaveLength(1);
			}
		);
	});

	test("The user can fold an event to conceal its details", ({
		given,
		when,
		then,
	}) => {
		let AppWrapper;

		given(
			"that the user is viewing the expanded details of a specific event",
			async () => {
				AppWrapper = await mount(<App />);
				AppWrapper.update();
				AppWrapper.find(".event button").at(0).simulate("click");
				expect(AppWrapper.find(".event-details").at(0)).toHaveLength(1);
			}
		);

		when("the user selects the hide details button", () => {
			AppWrapper.find(".event button").at(0).simulate("click");
		});

		then(
			"the expanded event details will be collapsed, returning the display to the original, condensed event format",
			() => {
				expect(AppWrapper.find(".event-details").at(0)).toHaveLength(0);
			}
		);
	});
});
