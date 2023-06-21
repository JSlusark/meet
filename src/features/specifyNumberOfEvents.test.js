import { loadFeature, defineFeature } from "jest-cucumber";
import React from "react";
import { mount } from "enzyme";
import App from "../App";
import { mockData } from "../mock-data";

const feature = loadFeature("./src/features/specifyNumberOfEvents.feature.md");
defineFeature(feature, (test) => {
	test("When user hasn't specified a number, 32 is the default number", ({
		given,
		when,
		then,
	}) => {
		let AppWrapper;
		given("that the events are prepared for display on the page", () => {
			AppWrapper = mount(<App />);
		});

		when(
			"the user doesn't specify the desired number of events to view",
			() => {}
		);

		then("the app will automatically load 32 events", () => {
			AppWrapper.update();
			expect(AppWrapper.find(".event")).toHaveLength(
				mockData.slice(0, 250).length
			);
		});
	});

	test("User can change the number of events they want to see", ({
		given,
		when,
		then,
	}) => {
		let AppWrapper;
		given("that the user initiates a search for local events", async () => {
			AppWrapper = await mount(<App />);
			AppWrapper.update();
			expect(AppWrapper.find(".event")).toHaveLength(mockData.length);
		});

		when("the user initiates the event loading process", () => {
			AppWrapper.find(".EventList").simulate("change", {
				target: { value: 1 },
			});
		});

		then(
			"the user will have the opportunity to specify the quantity of events they wish to have displayed",
			() => {
				AppWrapper.update();
				let EventNumberWrapper = AppWrapper.find("EventNumber");
				const eventObject = { target: { value: 2 } };
				EventNumberWrapper.find(".number-of-events-input").simulate(
					"change",
					eventObject
				);
			}
		);
	});
});
