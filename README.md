# **Meet App - Documentation**
The Meet App is a single-page, responsive web application that allows users to search for a city and get a list of events for Full-Stack Developers hosted in that city. The application is designed to provide users with an easy way to discover upcoming events and stay informed about events they are interested in attending. You can access the app here.

## **Technologies Used**
The Meet App is made with the following technologies:

- **Frontend:** JavaScript, React, Create-React-App (CRA), CSS, JestCucumber, Puppeter, Atatus, Lighthouse, Recharts
- **Backend:** Node.js, Express, AWS Lambda functions (FaaS)
- **Database:** Google Calendar API

## **Features, User Stories, and BDD Scenarios**
**Feature 1: Filter Events by City** <br>
*As a user, I should be able to filter events by city, so that I can see the list of events that take place in that city.* <br>

Scenario 1:<br> When the user hasn't searched for a city, show upcoming events from all cities.<br>
> Given user hasn't searched for any city <br>
When the user opens the app <br>
Then the user should see a list of all upcoming events <br>

Scenario 2:<br> User should see a list of suggestions when they search for a city.<br>
>Given the main page is open <br>
When the user starts typing in the city textbox<br>
Then the user should see a list of cities (suggestions) that match what they've typed<br>

Scenario 3:<br> User can select a city from the suggested list.<br>

>Given the user was typing "Berlin" in the city textbox<br>
And the list of suggested cities is showing<br>
When the user selects a city (e.g., "Berlin, Germany") from the list<br>
Then their city should be changed to that city (i.e., "Berlin, Germany")<br>
And the user should receive a list of upcoming events in that city<br>

Feature 2:<br> Show/Hide an Event's Details<br>
As a user, I should be able to see/hide event details so that I can better navigate throughout the various events and get information on the ones I want to know more about.

Scenario 1:<br> Events are displayed in a condensed format by default<br>

>Given that the user initiates a search for events occurring in their local area<br>
When the resulting events are displayed<br>
Then these events are presented in a collapsed format by default<br>

Scenario 2:<br> The user can unfold an event to view its full details<br>

>Given the event search results for a specific area<br>
When the user selects "show details" for a specific event<br>
Then the selected event's details will be fully displayed, spanning the entirety of the page<br>

Scenario 3:<br> The user can fold an event to conceal its details

>Given that the user is viewing the expanded details of a specific event<br>
When the user selects the "hide details" button<br>
Then the expanded event details will be collapsed, returning the display to the original, condensed event format<br>

Feature 3: Specify Number of Events<br>
As a user, I should be able to specify the number of events loaded on the page to facilitate smoother navigation within the app.<br>

Scenario 1:<br> When the user hasn't specified a number, 32 is the default number<br>

>Given that the events are prepared for display on the page<br>
When the user doesn't specify the desired number of events to view<br>
Then the app will automatically load 32 events<br>

Scenario 2:<br> User can change the number of events they want to see<br>

>Given that the user initiates a search for local events<br>
When the user initiates the event loading process<br>
Then the user will have the opportunity to specify the quantity of events they wish to have displayed<br>

Feature 4:<br> Use the App When Offline<br>
As a user, I should be able to use the app even while offline, ensuring I stay informed about the events I was viewing while I was online.<br>

Scenario 1:<br> Show cached data when there's no internet connection.<br>

>Given the situation where an internet connection is not present<br>
Then the user is navigating the app<br>
Then the app will display the cached data<br>

Scenario 2:<br> Show an error when the user changes the settings (city, time range)<br>

>Given the situation where an internet connection is not available<br>
When the user attempts to modify their search parameters (based on city or event date/time)<br>
Then the app will display an error message, notifying the user that this action is not possible due to the lack of an internet connection<br>

Feature 5: Data Visualization<br>
As a user, I should be able to visualize data from the app so that I can understand the amount of upcoming events occurring in a particular city and be able to filter by event type.<br>

Scenario 1:<br> Show a chart with the number of upcoming events in each city<br>

>Given that the app is loaded<br>
When the user views the event listings<br>
Then the app will display a chart that indicates the quantity of upcoming events in each city, categorized by topic.<br>

## **Backend - Serverless Functions**
The Meet App utilizes serverless functions written in Node.js and Express. These serverless functions are hosted on AWS Lambda and are responsible for handling the backend logic. They communicate with the Google Calendar API to fetch event data based on user requests. The use of serverless functions ensures scalability, cost optimization, and streamlined development for a smooth user experience.

## **Frontend and Backend (DataBase)**
The frontend of the Meet App is written with JavaScript and React, using the Create-React-App (CRA) framework. The frontend is responsible for displaying the user interface and interacting with the user.<br>

The backend of the Meet App is written with **Node.js** and **Express**, hosting **serverless functions** on **AWS Lambda**. The backend communicates with the **Google Calendar API** to fetch event data.

## **Conclusion**
The Meet App provides users with a seamless experience in discovering upcoming events for Full-Stack Developers in various cities. With features like city-based event filtering, event details display, specifying the number of events, offline app usage, and data visualization, the Meet App offers a comprehensive solution for staying informed about exciting tech events.
