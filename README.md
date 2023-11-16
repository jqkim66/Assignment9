
# React-Node Login System

## Overview

This project is a simple login system built with React and Node.js. It demonstrates a basic user authentication flow, including a front-end login interface and back-end validation. The backend is built with Express.js and connects to a MongoDB database to store user credentials. The front end is created using React to build the user interface.

## Tech Stack

- **Front-end**: React
- **Back-end**: Node.js, Express.js
- **Database**: MongoDB
- **Others**: CORS

## Installation Guide

### Prerequisites

Make sure you have the following software installed:

- Node.js
- npm
- MongoDB


#### Start MongoDB

Ensure the MongoDB service is running.

#### Run the Backend Server

```bash
node server.js
```


#### Run the Frontend Application

```bash
npm start
```

The front-end application will be running at `http://localhost:3000`.

## Usage Instructions

1. Open a browser and navigate to `http://localhost:3000`.
2. Log in using the predefined username and password.


Certainly! Let's go through each file in the proposed structure for your React and Node.js login system project and explain their roles and responsibilities:

### Frontend (React)

#### `src/`
This directory contains all the source files for your React application.

1. **`components/`**
   - This folder holds the reusable components of your React application.

2. **`components/Card/Card.js`**
   - A reusable card component used across different pages for displaying information in a card format.

3. **'DynamicComponent'**
    - Use react map() to create dynamic component.

4. **`components/pages/`**
   - Contains the different page components of your application, like Home, About Us, etc.

5. **`components/pages/Home.js`, `AboutUs.js`, `Jobs.js`, `Contact.js`**
   - These files are individual React components representing different pages of your app.

6. **`App.js`**
   - The main React component that acts as the root of your UI. It usually contains the routing logic and layout structure.


8. **`index.js`**
   - The entry point for your React application. It renders the `App` component to the DOM.

### Backend (Node.js with Express)

#### `Assignment9/`
This directory contains all the backend code for your application.

1. **`model/`**
   - Contains data models of your application, interacting with the database.

2. **`model/user.js`**
   - Represents the user data model. In a real-world application, this would interact with a database, but in your case, it might just contain a static list of users.

3. **`service/`**
   - Holds the business logic of your application, abstracting it away from the controllers.

4. **`service/service.js`**
   - Contains the authentication logic, such as validating user credentials.

5. **`controller/`**
   - Controllers handle incoming HTTP requests and send back responses. They act as an intermediary between models and views.

6. **`controller/Controller.js`**
   - Manages authentication-related requests, like logging in.

7. **`router/`**
   - Defines the routes/endpoints of your application.

8. **`router/userRoutes.js`**
   - Routes related to authentication (e.g., login route).

9. **`server.js`**
   - The main file that sets up and starts your Express server. It connects all middleware and routes and starts listening for requests.

### General Workflow

- **Frontend**: The React app sends requests (like login requests) to the backend.
- **Backend**: The Express server receives these requests. The routes defined in `routes.js` direct these requests to the appropriate controllers. `controller.js` processes these requests, often interacting with the `service.js` to perform business logic, such as validating user credentials against the information in `model/User.js`.
- **Response**: The backend then sends a response back to the frontend, which updates the UI accordingly based on the received data.

