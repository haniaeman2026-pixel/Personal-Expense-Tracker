# Personal Expense Tracker

A simple CRUD-style web application for recording and managing daily expenses using **HTML, CSS, JavaScript and Firebase Cloud Firestore**.

## Features

- Add an expense
- View all saved expenses
- Edit/update an expense
- Delete an expense
- Search expenses
- Calculate total number of expenses
- Calculate total amount spent
- Calculate current-month spending
- Responsive UI
- Firebase Firestore real-time updates
- Vercel deployment ready

## Tech Stack

- HTML5
- CSS3
- JavaScript ES Modules
- Firebase Cloud Firestore
- Vercel

## Folder Structure

```text
personal-expense-tracker/
├── index.html
├── style.css
├── app.js
├── firebase-config.js
├── firestore.rules
├── vercel.json
├── .gitignore
└── README.md
```

## Firebase Setup

1. Create a Firebase project.
2. Register a Web App.
3. Create a Cloud Firestore database.
4. Copy the Firebase Web App configuration.
5. Paste it into `firebase-config.js`.
6. Add the Firestore rules from `firestore.rules`.

## Run Locally

Because the app uses JavaScript modules, serve it from a local web server instead of opening `index.html` directly.

For example, with VS Code Live Server, open `index.html` using Live Server.

Or with Python:

```powershell
python -m http.server 5500
```

Then open:

```text
http://localhost:5500
```

## Deploy with Vercel

Install Vercel CLI:

```powershell
npm install -g vercel
```

Login:

```powershell
vercel login
```

From the project folder:

```powershell
vercel
```

Follow the prompts, then deploy to production:

```powershell
vercel --prod
```

## Firestore Collection

The application uses:

```text
expenses
```

Each document contains:

```text
title
amount
category
date
createdAt
updatedAt
```

## Security Note

The included Firestore rules are intentionally open so the assignment demo works without authentication.

For a real public application, do not use:

```text
allow read, write: if true;
```

Instead, add Firebase Authentication and restrict access to authenticated users.

## Assignment Submission

Submit:

1. GitHub repository link
2. Vercel live URL
3. Screenshot of the working application
