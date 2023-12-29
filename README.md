# web-ui

This is a JavaScript project built with Solid.js. The project structure is organized into several directories, each serving a specific purpose.

## Project Structure

- `src/`: Contains the source code of the application.
  - `assets/`: Contains static files like images.
  - `components/`: Contains reusable UI components like Footer, Grid, Header, etc.
  - `data/`: Contains data files like menuItems.jsx and translations.
  - `helper/`: Contains helper functions.
  - `hooks/`: Contains custom hooks like useTranslation.jsx.
  - `icons/`: Contains icon components.
  - `layout/`: Contains layout components.
  - `pages/`: Contains page components.
- `style.scss` and `_fonts.scss`: Contains global and font styles respectively.

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode. Open [http://localhost:3000](http://localhost:3000) to view it in the browser. The page will reload if you make edits.

### `npm run build`

Builds the app for production to the `dist` folder. It correctly bundles Solid in production mode and optimizes the build for the best performance. The build is minified and the filenames include the hashes. Your app is ready to be deployed!

## Deployment

You can deploy the `dist` folder to any static host provider (netlify, surge, now, etc.).

### Firebase Deployment

You can deploy to Firebase Hosting by running `firebase deploy` after you have installed the Firebase CLI and created a .firebaserc file with your project details, e.g.:

```json
{
  "projects": {
    "default": "your-firebase-project-id"
  }
}