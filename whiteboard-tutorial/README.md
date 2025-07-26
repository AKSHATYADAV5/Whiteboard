# Whiteboard Tutorial Frontend

This directory contains the React client for the collaborative whiteboard project.

## Running the project

1. **Start the backend**
   ```bash
   cd ../backend
   npm install
   npm start
   ```
   The API server starts on `http://localhost:5000`.

2. **Start the frontend** (in a new terminal)
   ```bash
   cd whiteboard-tutorial
   npm install
   npm start
   ```
   The app will be available at `http://localhost:3000` and will reload on changes.

By default the frontend is configured to use the hosted API at `https://api-whiteboard-az.onrender.com`. To use your local backend, update the URLs in `src/utils/api.js` and `src/utils/socket.js`.

## Available scripts

- `npm start` – launch the development server.
- `npm run build` – build the app for production.
- `npm run eject` – remove Create React App configuration.
- `npm test` – **tests are not yet implemented**.
