## Technologies used
- React: For building the user interface.
- TypeScript: For static typing.
- Firebase Firestore: For storing and retrieving data.
- Firebase Authentication: For user authentication.
- Firebase Hosting: For deploying the app.
- TailwindCSS: For styling (if applicable).

# React TypeScript App with Firestore
A web application built with React, TypeScript, and Firebase Firestore that features user authentication, product pages, and review functionality.

## Live Demo
Check out the live version of the app here: [Live Demo](https://react-typescript-firebas-2b5f2.web.app)

## Features
- **React and TypeScript**: Modern frontend framework with strict typing.
- **Firebase Firestore**: Cloud database for storing data like reviews and checkout lists.
- **Authentication**: Users can log in or sign up to access specific features (e.g., leaving a review).
- **Pages**:
  - **Home**: A welcome page describing the app.
  - **Products**: View products fetched from an external API and add them to the checkout.
  - **Product**: View a single producet fetched from an external API.
  - **Checkout**: Review selected products for purchase.
  - **UserReviews**: Learn about the app and leave reviews after logging in.
  - **Contact**: Submit a contact form to send me a message and receive feedback.
- **Live Deployment**: The app is hosted and accessible online.

## How to Run Locally, getting Started
### Prerequisites
- **Node.js**: Ensure you have Node.js installed. Download it [here](https://nodejs.org/).
- **npm**: Comes with Node.js, but ensure you have the latest version.
- **Firebase Account**: Set up a Firebase project and configure Firestore.
  ### Installation
   1. Clone the repository: git clone https://github.com/elaheesk/react-typescript-firebase-project.git
   2. cd https://github.com/elaheesk/react-typescript-firebase-project.git
   3. npm install
   4. Add your Firebase configuration:
    Create a .env file in the root directory and add your Firebase configuration:
    REACT_APP_FIREBASE_API_KEY=your-api-key
    REACT_APP_FIREBASE_AUTH_DOMAIN=your-auth-domain
    REACT_APP_FIREBASE_PROJECT_ID=your-project-id
    REACT_APP_FIREBASE_STORAGE_BUCKET=your-storage-bucket
    REACT_APP_FIREBASE_MESSAGING_SENDER_ID=your-sender-id
    REACT_APP_FIREBASE_APP_ID=your-app-id

Running the App
Start the development server: npm start
Open your browser and navigate to: http://localhost:3000

 ## Deployment
The app is hosted on Firebase Hosting. To deploy your version:
1. Install the Firebase CLI: npm install -g firebase-tools
2. Login to Firebase: firebase login
3. Initialize Firebase in your project: firebase init
4. Deploy: firebase deploy

## Future Improvements 
 Add more pages and features, like product search.
- Improve styling and responsiveness for smaller screens.
- Implement user profiles for better review management.
- Add alert messages for feedback.









