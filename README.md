<h1 align="center">Firebase Login System with Next.js</h1>

<p align="center">
  <a href="https://skillicons.dev">
    <img src="https://skillicons.dev/icons?i=tailwind,react,next,nodejs,firebase" />
  </a>
</p>

This project is a template for setting up a login system using Firebase with Next.js. It allows users to sign up, log in, and log out using a Firebase account.

# Prerequisites
To run this project, you will need to have the following installed on your computer:

Node.js
npm, yarn or pnpm
A Firebase account and a Firebase project with authentication enabled

# Getting Started
Clone the repository to your local machine.

In the project directory, create a .env.local file and add your Firebase project configuration details in the following format:

```
NEXT_PUBLIC_FIREBASE_API_KEY=<your-api-key>
NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN=<your-auth-domain>
NEXT_PUBLIC_FIREBASE_PROJECT_ID=<your-project-id>
NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET=<your-storage-bucket>
NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID=<your-messaging-sender-id>
NEXT_PUBLIC_FIREBASE_APP_ID=<your-app-id>
NEXT_PUBLIC_FIREBASE_MEASUREMENT_ID=<your-measurement-id>
```

You can find these details in your Firebase project settings under the "General" tab.

Install the dependencies by running npm install or yarn install in the project directory.

Start the development server by running npm run dev or yarn dev.

Open your web browser and navigate to http://localhost:3000.

```
.
├── components/
│   ├── Login.js
│   ├── Logout.js
│   ├── Signup.js
│   └── ...
├── pages/
│   ├── index.js
│   └── ...
├── firebase.js
├── auth.js
└── ...
```

components/: Contains React components used in the project, such as Login, Signup, and Logout.
pages/: Contains Next.js pages used in the project, such as the home page (index.js).
firebase.js: Contains Firebase configuration details and initializes the Firebase app.
auth.js: Contains functions for user authentication, such as sign up, log in, and log out.

## Contributing
If you find any issues or have suggestions for improvement, please feel free to open an issue or submit a pull request.

## License
This project is licensed under the MIT License.
