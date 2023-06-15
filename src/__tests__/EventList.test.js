// src/__tests__/EventList.test.js

import React from "react";
import { shallow } from "enzyme";
import EventList from "../EventList"; // You may need to adjust the path based on your file structure
import Event from "../Event";
import { mockData } from "../mock-data";

describe("<EventList /> component", () => {
	test("render correct number of events per city", () => {
		const EventListWrapper = shallow(<EventList events={mockData} />);
		expect(EventListWrapper.find(Event)).toHaveLength(mockData.length);
	});
});
