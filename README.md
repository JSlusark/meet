# MEET APP

## Features, User Stories and BDD Scenarios.

### FEATURE 1: FILTER EVENTS BY CITY
As a user I should be able to "filter events by city", so that I can see the list of events that take place in that city.

 Scenario 1: When user hasn't searched for a city, show upcoming events from all cities. 

-   Given user hasn't searched for any city

-   When the user opens the app

-   Then the user should see a list of all upcoming events

Scenario 2: User should see a list of suggestions when they search for a city.

-   Given the main page is open

-   When user starts typing in the city textbox

-   Then the user should see a list of cities (suggestions) that match what they've typed
Scenario 3: User can select a city from the suggested list.

-   Given the user was typing "Berlin" in the city textbox And the list of suggested cities is showing When the user selects a city (e.g., "Berlin, Germany") from the list
    Then their city should be changed to that city (i.e., "Berlin, Germany")
    And the user should receive a list of upcoming events in that city

### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
As a user, I should be able to see see/hide event details so that I can better navigate throughout the various event and get information on the ones I want to know more about.

Scenario 1: Events are displayed in a condensed format by default

-   Given that the user initiates a search for events occurring in their local area

-   When the resulting events are displayed

-   Then these events are presented in a collapsed format by default

Scenario 2: The user can unfold an event to view its full details

-   Given the event search results for a specific area 

-   When the user selects "show details" for a specific event

-   Then the selected event's details will be fully displayed, spanning the entirety of the page

Scenario 3: The user can fold an event to conceal its details

-   Given that the user is viewing the expanded details of a specific event

-   When the user selects the "hide details" button

-   Then the expanded event details will be collapsed, returning the display to the original, condensed event format

### FEATURE 3: SPECIFY NUMBER OF EVENTS
As a user, I should be able to specify the number of events loaded on the page so to facilitate smoother navigation within the app.

-   Scenario 1: When user hasn't specified a number, 32 is the default number
    - Given that the events are prepared for display on the page
    - When the user doesn't specify the desired number of events to view
    - Then the app will automatically load 32 events

-   Scenario 2: User can change the number of events they want to see
    - Given that the user initiates a search for local event
    - When the user initiates the event loading process
    - Then the user will have the opportunity to specify the quantity of events they wish to have displayed

### FEATURE 4: USE THE APP WHEN OFFLINE
As a user, I should be able to use the app even while offline, ensuring I stay informed about the events I was viewing while I was online.

-   Scenario 1: Show cached data when there's no internet connection.
    - Given the situation where an internet connection is not present
    - Then the user is navigating the app
    - Then the app will display the cached data

-   Scenario 2: Show error when user changes the settings (city, time range)
    - Given the situation where an internet connection is not available
    - When the user attempts to modify their search parameters (based on city or event date/time)
    - Then the app will display an error message, notifying the user that this action is not possible due to the lack of an internet connection

### FEATURE 5: DATA VISUALIZATION
As a user, I should be able to visualize data from the app so that I can understand the amount of upcoming events occurring in a particular city and be able to filter by event type.

-   Scenario 1: Show a chart with the number of upcoming events in each city
    - Given that the app is loaded
    - When the user views the event listings
    - Then the app will display a chart that indicates the quantity of upcoming events in each city, categorized by topic.

## Frontend:
Written with JavaScript/React; hosted on Github Pages

## Backend:
Written with Node/Express and Lambda finctions (FaaS); hosted on AWS

## Backend (DataBase):
Google Calendar API

## How this app uses serverless functions:
In the Meet app, serverless functions written in Node.js and Express will handle the backend logic. Hosted on AWS Lambda, these functions will communicate with the Google Calendar API to fetch event data based on user requests. This approach ensures scalability, cost optimization, and streamlined development for a smooth user experience.

### FEATURE 1: FILTER EVENTS BY CITY
Serverless functions will help users filter events by city. When users open the app, the serverless function will display a list of all upcoming events. As users type in the city textbox, the serverless function will show suggestions that match their input. When users select a city from the suggestion list, the serverless function will update the city and show a list of upcoming events in that selected city.

### FEATURE 2: SHOW/HIDE AN EVENT'S DETAILS
Serverless functions will handle displaying and hiding event details. By default, events will be shown in a condensed format. When users choose to view event details, the serverless function will expand and display the full information. If users want to hide the details, the serverless function will collapse the event to its condensed format.

### FEATURE 3: SPECIFY NUMBER OF EVENTS
Serverless functions will allow users to specify the number of events to be loaded on the page. The default number of events displayed will be 32. When users initiate the event loading process, the serverless function will provide an option for users to specify the desired quantity of events they want to see.

### FEATURE 4: USE THE APP WHEN OFFLINE
Serverless functions will enable offline app usage. When there is no internet connection, the serverless function will display cached data, allowing users to navigate and view the previously accessed information. If users attempt to modify search parameters without an internet connection, the serverless function will show an error message indicating that this action is not possible without an internet connection.

### FEATURE 5: DATA VISUALIZATION
Serverless functions will support data visualization in the Meet app. The app will display a chart that shows the number of upcoming events in each city, categorized by topic. This visual representation helps users understand and explore event quantities in different cities.
