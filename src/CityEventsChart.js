// src/components/CityEventsChart.js
import { useState, useEffect } from "react";
import {
	ScatterChart,
	Scatter,
	XAxis,
	YAxis,
	CartesianGrid,
	Tooltip,
	ResponsiveContainer,
} from "recharts";

// Custom tooltip component for the chart
const CustomTooltip = ({ active, payload }) => {
	if (active && payload && payload.length) {
		return (
			<div
				className="custom-tooltip"
				style={{
					backgroundColor: "#FA92FB",
					color: "black",
					border: "solid 1px black",
					padding: "10px",
					borderRadius: "5px",
					boxShadow: "2px 2px 5px black",
				}}
			>
				<p className="label">{`City : ${payload[0].payload.city}`}</p>
				<p className="intro">{`Number of events : ${payload[0].payload.count}`}</p>
			</div>
		);
	}

	return null;
};

const CityEventsChart = ({ allLocations, events }) => {
	const [data, setData] = useState([]);

	useEffect(() => {
		const getData = () => {
			const data = allLocations.map((location) => {
				const count = events.filter(
					(event) => event.location === location
				).length;
				const city = location.split(/, | - /)[0];
				return { city, count };
			});
			return data;
		};
		setData(getData());
	}, [allLocations, events]);

	return (
		<ResponsiveContainer
			width="99%"
			height={400}
		>
			<ScatterChart
				margin={{
					top: 20,
					right: 20,
					bottom: 60,
					left: -20,
				}}
			>
				<CartesianGrid stroke="#000000" />
				<XAxis
					type="category"
					dataKey="city"
					name="City"
					angle={45}
					interval={0}
					tick={{ dx: 20, dy: 40, fontSize: 16 }}
					stroke="#000000"
				/>
				<YAxis
					type="number"
					dataKey="count"
					name="Number of events"
					allowDecimals={false}
					stroke="#000000"
					fontWeight="bold"
				/>
				<Tooltip
					cursor={{ strokeDasharray: "3 3" }}
					content={<CustomTooltip />}
				/>
				<Scatter
					data={data}
					fill="#A653F5"
				/>
			</ScatterChart>
		</ResponsiveContainer>
	);
};

export default CityEventsChart;
