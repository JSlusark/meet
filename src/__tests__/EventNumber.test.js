import React from "react";
import { shallow } from "enzyme";
import EventNumber from "../EventNumber";

describe("<EventNumber /> component", () => {
	let EventNumberWrapper;
	beforeAll(() => {
		EventNumberWrapper = shallow(<EventNumber updateEvents={() => {}} />);
	});

	test("render number of events", () => {
		expect(EventNumberWrapper.find(".number-of-events")).toHaveLength(1);
	});

	test("render number of events input", () => {
		expect(EventNumberWrapper.find(".number-of-events-input")).toHaveLength(1);
	});

	test("render number of events label", () => {
		expect(EventNumberWrapper.find(".number-of-events-label")).toHaveLength(1);
	});

	test("render number of events input correctly", () => {
		const numberOfEvents = EventNumberWrapper.state("query");
		expect(
			EventNumberWrapper.find(".number-of-events-input").prop("value")
		).toBe(numberOfEvents);
	});

	test("change state when number of events input changes", () => {
		expect(EventNumberWrapper.state("query")).toBe(32);
		EventNumberWrapper.find(".number-of-events-input").simulate("change", {
			target: { value: 10 },
		});
		expect(EventNumberWrapper.state("query")).toBe(10);
	});
});
