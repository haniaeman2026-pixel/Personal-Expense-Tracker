


::: {align="center"}

✦ Personal Expense Tracker
Smart • Simple • Organized Finances
<p>
<img src="https://img.shields.io/badge/Finance-Expense%20Management-5A4032?style=for-the-badge" alt="Finance"/>{=html}
<img src="https://img.shields.io/badge/Firebase-Firestore-C8A27A?style=for-the-badge&logo=firebase&logoColor=white" alt="Firebase"/>{=html}
<img src="https://img.shields.io/badge/FastAPI-Backend-7A5C45?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI"/>{=html}
<img src="https://img.shields.io/badge/JavaScript-ES6+-6B4F3A?style=for-the-badge&logo=javascript&logoColor=white" alt="JavaScript"/>{=html}

</p>
<br>{=html}

<p>
<a href="YOUR_LIVE_DEMO_URL" target="_blank">{=html}
<img src="https://img.shields.io/badge/🚀%20LIVE%20DEMO-Open%20Application-5A4032?style=for-the-badge" alt="Live Demo"/>{=html}
</a>{=html}

</p>
<br>{=html}

A modern, responsive expense management dashboard built with HTML,
CSS, JavaScript, Firebase Firestore, and FastAPI.

<br>{=html}

Developed by Hania Eman
:::

✦ Overview
Personal Expense Tracker is a modern web application for recording,
organizing, searching, and managing everyday expenses from one clean
dashboard.

The application combines a polished finance-focused interface with
Firebase Cloud Firestore for real-time data storage and a
lightweight FastAPI backend for application serving and API
functionality.

The goal is simple: provide a practical application that is easy to use,
visually refined, and structured like a real-world web project.

🚀 Live Demo
Experience the deployed application directly in your browser.

::: {align="center"}
<a href="YOUR_LIVE_DEMO_URL" target="_blank">{=html}
<img src="https://img.shields.io/badge/OPEN%20LIVE%20APPLICATION-5A4032?style=for-the-badge&logo=vercel&logoColor=white" alt="Open Live Application"/>{=html}
</a>{=html}

<br>{=html}<br>{=html}

The Live Demo opens the complete deployed application --- not just a
documentation page.
:::

Try These Features
➕ Add an expense

✏️ Edit an expense

🗑️ Delete an expense

🔎 Search expenses

🏷️ Filter by category

📊 View total expenses

💰 View total amount spent

📅 View current-month spending

📈 View average daily spending

🔥 Monitor Firebase connection status

Note: Replace YOUR_LIVE_DEMO_URL with the final deployed
application URL before publishing the README.

✨ Key Features
Feature Description

Expense Management Add, edit, and delete expense
records

Cloud Storage Store records in Firebase Cloud
Firestore

Real-Time Updates Synchronize the dashboard with
Firestore

Search Find expenses by title

Category Filter Filter records by expense category

Dashboard Analytics Automatically calculate key
spending metrics

Responsive UI Works across desktop, tablet, and
mobile layouts

Firebase Status Shows the current database
connection state

📊 Dashboard Analytics
The dashboard automatically calculates important spending information.

Metric Purpose

Total Expenses Number of recorded expense entries
Total Amount Spent Combined value of all recorded expenses
Current Month Spending recorded during the current month
Average Daily Spend Average spending based on recorded dates

These values update automatically as expense records are added, edited,
or deleted.

🏷️ Expense Categories
The application currently supports five categories:

Category Typical Examples

🍽️ Food Meals, groceries, snacks
🚗 Travel Transport, fuel, rides
🛍️ Shopping Clothes, accessories, personal purchases
📄 Bills Internet, electricity, subscriptions
📦 Other Miscellaneous expenses

🎨 UI / UX
The interface follows a premium finance-dashboard aesthetic rather
than a generic template.

Design Direction
Warm cream and ivory surfaces

Deep cocoa / dark-brown navigation

Mocha accent elements

Clean card-based layout

Subtle borders and shadows

Modern typography

Clear visual hierarchy

Responsive spacing

Smooth interactions

Mobile-friendly structure

Design Philosophy
Premium Finance UI
        +
Modern SaaS Dashboard
        +
Clean Editorial Styling
        ↓
Professional Expense Tracker
The interface is designed to keep the most important information ---
spending totals, recent expenses, and actions --- easy to find without
overwhelming the user.

🧰 Technology Stack
Frontend
HTML5 --- application structure

CSS3 --- responsive styling and UI system

JavaScript ES Modules --- application logic and interactions

Backend
Python

FastAPI

Uvicorn

Pydantic

Database
Firebase Cloud Firestore

Deployment & Development
Vercel

Git

GitHub

Firebase Console

Visual Studio Code

🏗️ Application Architecture
                         USER
                           │
                           ▼
                  ┌─────────────────┐
                  │    index.html   │
                  │   Dashboard UI  │
                  └────────┬────────┘
                           │
                           ▼
                  ┌─────────────────┐
                  │      app.js     │
                  │ UI + CRUD +     │
                  │ Search + Stats  │
                  └────────┬────────┘
                           │
                           ▼
                ┌─────────────────────┐
                │ Firebase Firestore  │
                │   Real-Time Data    │
                └─────────────────────┘


                  FastAPI Backend
                           │
                           ▼
                  ┌─────────────────┐
                  │    main.py      │
                  │ App + API Layer │
                  └─────────────────┘
Data Flow
User Action
    ↓
Frontend UI
    ↓
JavaScript Logic
    ↓
Firebase Firestore
    ↓
Real-Time Listener
    ↓
Updated Dashboard
🔥 Firebase Firestore
Expense records are stored in a Firestore collection named:

expenses
Each expense document contains fields such as:

title
amount
category
date
createdAt
updatedAt
Example Document
{
  "title": "Lunch",
  "amount": 850,
  "category": "Food",
  "date": "2026-09-29",
  "createdAt": "serverTimestamp",
  "updatedAt": "serverTimestamp"
}
Firestore provides real-time synchronization so the interface can
immediately reflect database changes.

⚡ FastAPI Backend
The backend is located at:

backend/main.py
It provides a lightweight API layer and serves as the backend foundation
for the project.

Available Endpoints
Endpoint Purpose

GET / Serves the application
GET /api Returns API information
GET /api/health Checks backend health
GET /docs Opens FastAPI interactive documentation

Health Response
{
  "status": "healthy",
  "message": "Personal Expense Tracker API is running"
}
FastAPI automatically generates interactive API documentation through:

/docs
📁 Project Structure
personal-expense-tracker/
│
├── backend/
│   ├── main.py
│   └── requirement.txt
│
├── index.html
├── style.css
├── app.js
├── firebase-config.js
├── firestore.rules
├── firebase.json.example
├── vercel.json
├── .gitignore
└── README.md
File Guide
File Responsibility

index.html Main application structure and
dashboard markup

style.css Complete visual design and
responsive layout

app.js Firebase CRUD, search, filters,
statistics, and UI interactions

firebase-config.js Firebase Web App configuration

firestore.rules Firestore access rules

backend/main.py FastAPI application and API routes

backend/requirement.txt Python backend dependencies

vercel.json Deployment configuration

.gitignore Excludes unwanted and sensitive
files

README.md Project documentation
🛠️ Getting Started
1. Clone the Repository
git clone https://github.com/haniaeman2026-pixel/Personal-Expense-Tracker.git
cd Personal-Expense-Tracker
2. Configure Firebase
Create a Firebase project and enable Cloud Firestore.

Then create a Firebase Web App and place its configuration inside:

firebase-config.js
Example:

export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
Keep private service-account credentials, passwords, and secret API
keys out of the repository.

3. Run the Frontend
From the project root:

python -m http.server 5500
Then open:

http://localhost:5500
You can also use the Live Server extension in Visual Studio Code.

4. Run the FastAPI Backend
Move into the backend directory:

cd backend
Install dependencies:

python -m pip install -r requirement.txt
Start FastAPI:

python -m uvicorn main:app --reload
Backend:

http://127.0.0.1:8000
API documentation:

http://127.0.0.1:8000/docs
Health check:

http://127.0.0.1:8000/api/health
☁️ Deployment
The application is deployment-ready for Vercel.

Install Vercel CLI
npm install -g vercel
Login
vercel login
Deploy
vercel
Production Deployment
vercel --prod
After deployment, use the generated application URL as the project's
Live Demo URL in this README.

🔐 Security Considerations
The repository is configured to avoid committing sensitive local files.

Examples excluded through .gitignore include:

.env
backend/.env
__pycache__/
*.pyc
Firebase Rules
The included Firestore rules are suitable for an assignment/demo
environment.

For a production application, the recommended architecture would
include:

Firebase Authentication

User-specific expense records

Authenticated Firestore rules

Least-privilege access control

Secure environment configuration

Validation on both client and server

Never commit real passwords, service-account JSON files, private keys,
or secret API credentials to GitHub.

🔄 Git Workflow
After modifying the project:

git add .
Create a commit:

git commit -m "Update project"
Push changes:

git push origin main
For a complete project update, git add . stages all changed files in
the repository.

🌱 Future Enhancements
The current architecture provides a foundation for additional
functionality such as:

🔐 Firebase Authentication

👤 User-specific expense accounts

📊 Interactive spending charts

📅 Advanced date-range filtering

📈 Monthly and yearly reports

💰 Budget planning

🔔 Spending alerts

📥 CSV / Excel export

🌙 Enhanced dark mode

📱 Progressive Web App support

🤖 AI-assisted spending insights

🧾 Receipt upload and expense extraction

💡 Development Approach
The project was designed around a simple principle:

Clean Interface
      +
Real Database
      +
CRUD Operations
      +
Real-Time Synchronization
      +
Backend Foundation
      +
Deployment
      ↓
Complete Web Application
Instead of being only a static frontend, the application demonstrates
how a user-facing dashboard can connect to a cloud database, manage
persistent records, calculate meaningful statistics, and provide a
structured backend foundation.

👩‍💻 Author
::: {align="center"}

Hania Eman
AI & Data Science Student · ML Developer · Python Enthusiast

Currently building practical projects across:

Artificial Intelligence · Data Science · Machine Learning · Python ·
Web Development

<br>{=html}

<a href="https://github.com/haniaeman2026-pixel" target="_blank">{=html}
<img src="https://img.shields.io/badge/GitHub-haniaeman2026--pixel-5A4032?style=for-the-badge&logo=github&logoColor=white" alt="GitHub"/>{=html}
</a>{=html}
:::

::: {align="center"}
<br>{=html}

✦ Personal Expense Tracker ✦
Track smarter. Spend consciously. Stay organized.

<br>{=html}

<a href="YOUR_LIVE_DEMO_URL" target="_blank">{=html}
<img src="https://img.shields.io/badge/🚀%20TRY%20THE%20LIVE%20APP-5A4032?style=for-the-badge" alt="Try Live App"/>{=html}
</a>{=html}

<br>{=html}<br>{=html}

Developed by Hania Eman
