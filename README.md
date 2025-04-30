# Train Scheduler App

## Overview

The **Train Scheduler App** is a React-based application designed to manage and schedule trains on multiple platforms. It allows users to upload a CSV file containing train details, including arrival and departure times, priorities, and train numbers. The app dynamically schedules trains on available platforms and displays real-time information about train arrivals and departures.

### Key Features:
- **Dynamic Train Scheduling:** Trains are assigned to platforms based on priority.
- **Platform Management:** Users can specify the number of platforms (between 2 and 20).
- **CSV File Upload:** Users can upload a CSV file containing train details, which will be parsed and used to schedule trains.
- **Train Log:** A log of scheduled and actual arrival and departure times is maintained.
- **Responsive Layout:** The UI is responsive and adjusts the platform layout based on the screen size.

## Tech Stack

- **React:** Used for building the UI components and managing the state.
- **PapaParse:** A library for parsing CSV files and converting them into JavaScript objects.
- **CSS (Inline Styles):** Styled using a inline CSS for better organization and maintainability.



Train Scheduling: Upon file upload, the app processes the CSV and schedules trains on platforms, prioritizing based on the train's priority. If there are more trains than platforms, the excess trains are listed as waiting.

Train Departures: Trains depart from platforms in real-time, and the app automatically logs their scheduled and actual departure times, as well as their actual arrival times (which is calculated with a 5-minute delay).

Platform Layout: Platforms are displayed dynamically, and trains are assigned to available platforms. The platform layout is responsive and adjusts based on the number of platforms and the screen size.

Let me know if you'd like any additional sections or modifications!








