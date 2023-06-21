Feature: specify number of events

Scenario: When user hasn't specified a number, 32 is the default number
Given that the events are prepared for display on the page
When the user doesn't specify the desired number of events to view
Then the app will automatically load 32 events

Scenario: User can change the number of events they want to see
Given that the user initiates a search for local events
When the user initiates the event loading process
Then the user will have the opportunity to specify the quantity of events they wish to have displayed
