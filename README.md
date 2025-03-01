🚗 Vehicle Listing App

📌 Overview

This is a modern, high-performance, and scalable Vehicle Listing application built using React, TypeScript, Vite, and Chakra UI. The app provides a smooth user experience with features such as vehicle listing, detailed view, pagination, filtering, searching, and sorting. It also follows best practices for state management, API handling, and separation of concerns to ensure maintainability and scalability.

🛠️ Technologies Used

React: Component-based UI development

Vite: Fast development and build tool for optimized performance

TypeScript: Type-safe development with better maintainability

Chakra UI: Modern and responsive UI framework

React Query: Efficient data fetching, caching, and synchronization

React Router: Navigation and routing management

Context API: Global state management for sorting and filtering

Lodash: Utility functions for sorting and data manipulation

🎯 Features

🚀 Fast & Optimized: Uses Vite for instant hot-reloading and optimized builds.

📱 Fully Responsive: Works seamlessly across mobile, tablet, and desktop screens.

📑 Vehicle Listing: Displays vehicles with image, model, price, location, and condition.

🔍 Search & Filtering: Users can search vehicles and filter by brand, condition, price, year, location, model, and color.

🔄 Sorting: Supports sorting in ascending & descending order for multiple fields.

🔗 Detail View: Click on a vehicle to view more detailed information.

📄 Pagination: Users can navigate between pages for better UX.

🏗️ Custom Hooks: Business logic is encapsulated in reusable hooks.

🎯 Separation of Concerns: Clean and maintainable code structure.

🚀 Why React Query?

We use React Query for data fetching and caching because:

🚄 Improves Performance: Only fetches data when necessary instead of making redundant API calls.

💾 Automatic Caching: Stores fetched data in a cache, reducing API load and enhancing user experience.

🔄 Background Synchronization: Keeps the data fresh without manual re-fetching.

🎯 Handles Async State Automatically: Reduces the need for useState and useEffect to manage API state.

🛠️ Error Handling & Retry Logic: Built-in features for handling failures and retries.

🏛️ Project Architecture

📂 src
├── 📂 components # Reusable UI components
├── 📂 pages # Page-level components
├── 📂 hooks # Custom hooks for business logic
├── 📂 contexts # Context API for global state
├── 📂 services # API calls and external services
├── 📂 utils # Helper functions
├── 📂 constants # Constants and static data
├── 📂 theme # customized theme
├── App.tsx # Main app component
├── main.tsx # React entry point

🏗️ Installation & Setup

Clone the repository

git clone https://github.com/ybakhshi/Vahicle-listing-app
cd vehicle-listing-app

RUNNING THE APP USING DOCKER:

docker build -t vehicle-listing-app .
docker run -p 5173:5173 vehicle-listing-app

The app should be accessible in following urls:
➜ Local: http://localhost:5173/
➜ Network: http://172.17.0.2:5173/

Install dependencies

npm install

Run the development server

npm run dev

Build for production

npm run build

🔗 Routing

The app uses React Router for navigation:

/ → Home (Vehicle List)

/vehicle/:id → Vehicle Detail View

🛠️ State Management

Context API for managing sorting & filtering globally.

React Query for handling API data and caching.

📱 Responsive Design

Chakra UI makes styling intuitive and ensures full responsiveness.

Uses CSS grid and flexbox for optimal layout.

🎯 Conclusion

This React app is built with scalability, maintainability, and performance in mind. By leveraging React Query for data fetching, Context API for state management, and Chakra UI for styling, the app ensures an optimal user experience. 🚀
