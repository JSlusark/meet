import React, { Component } from "react";

class Alert extends Component {
	constructor(props) {
		super(props);
		this.color = null;
	}

	getStyle = () => {
		return {
			color: this.color,
		};
	};

	render() {
		return (
			<div className="Alert">
				<p style={this.getStyle()}>{this.props.text}</p>
			</div>
		);
	}
}

class CityAlert extends Alert {
	constructor(props) {
		super(props);
		this.color = "blue";
	}
}

class EventNumeberAlert extends Alert {
	constructor(props) {
		super(props);
		this.color = "red";
	}
}

class OfflineAlert extends Alert {
	constructor(props) {
		super(props);
		this.color = "orange";
	}
}

export { CityAlert, EventNumeberAlert, OfflineAlert };
