# Development Journey & Notes

## Project Overview

This project is a full-stack Feedback Management Dashboard built for the Acowale machine test. The goal was to create a modern dashboard that allows administrators to manage user feedback efficiently while providing analytics and a clean user experience.

## Tech Stack

* Frontend: React.js, React Router, Recharts, CSS
* Backend: Node.js, Express.js
* Database: MongoDB
* Authentication: JWT Authentication
* Deployment: Vercel (Frontend) and Render (Backend)

## Features Implemented

* Public feedback submission form
* Admin authentication and protected routes
* Dashboard with analytics and statistics
* Feedback search and category filtering
* Feedback status management (Open → In Progress → Resolved)
* Delete feedback functionality
* Category distribution pie chart
* Feedback trend chart
* Notification dropdown
* Responsive dashboard design
* Dark and Light mode support

## Development Journey

### Phase 1 – Project Setup

I started by setting up the React frontend and Express backend separately. The initial focus was creating a clean folder structure and establishing API communication between frontend and backend.

### Phase 2 – Feedback System

Implemented:

* Feedback submission form
* Form validation
* MongoDB schema and API endpoints
* Feedback listing and retrieval APIs

### Phase 3 – Authentication

Implemented:

* Admin login functionality
* JWT token generation
* Protected dashboard routes
* Local storage token persistence

### Phase 4 – Dashboard Development

Built:

* Statistics cards
* Analytics charts using Recharts
* Recent feedback table
* Status update functionality
* Delete functionality

### Phase 5 – UI Improvements

Added:

* Responsive sidebar layout
* Notification system
* Search and filtering
* Dark mode support
* Improved styling and animations

## Challenges Faced

1. Managing dashboard state between multiple components.
2. Handling API integration and asynchronous data loading.
3. Implementing responsive layouts for different screen sizes.
4. Fixing dark mode styling issues across all components.
5. Managing search and filtering efficiently.

## What I Learned

* Building scalable React component structures.
* State management with hooks.
* API integration and error handling.
* Creating reusable UI components.
* Implementing analytics dashboards and charts.
* Designing responsive and modern user interfaces.

## Future Improvements

* Export feedback data to CSV/PDF.
* Real-time notifications using Socket.IO.
* Advanced filtering and sorting.
* Role-based access control.
* Unit and integration testing.
* Dashboard performance optimization.

## Conclusion

This project helped strengthen my understanding of full-stack development, API integration, authentication, dashboard design, and responsive UI development. It was an excellent opportunity to build a production-style feedback management system from scratch.
