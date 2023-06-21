Feature: Show/Hide and Event's Details

Scenario: Events are displayed in a condensed format by default
Given that the user initiates a search for events occurring in their local area
When the resulting events are displayed
Then these events are presented in a collapsed format by default

Scenario: The user can unfold an event to view its full details
Given the event search results for a specific area
When the user selects show details for a specific event
Then the selected event's details will be fully displayed, spanning the entirety of the page

Scenario: The user can fold an event to conceal its details
Given that the user is viewing the expanded details of a specific event
When the user selects the hide details button
Then the expanded event details will be collapsed, returning the display to the original, condensed event format
