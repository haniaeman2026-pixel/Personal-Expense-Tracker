<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Playfair+Display&weight=700&size=42&duration=3000&pause=1000&color=2563EB&center=true&vCenter=true&width=850&height=80&lines=Personal+Expense+Tracker;Smart+%7C+Simple+%7C+Organized+Finances" alt="Personal Expense Tracker" />

<br>

<p>
  <img src="https://img.shields.io/badge/Finance-Expense%20Management-2563EB?style=for-the-badge" alt="Finance"/>
  <img src="https://img.shields.io/badge/Firebase-Firestore-FFCA28?style=for-the-badge&logo=firebase&logoColor=black" alt="Firebase"/>
  <img src="https://img.shields.io/badge/FastAPI-Backend-009688?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI"/>
  <img src="https://img.shields.io/badge/JavaScript-ES6%2B-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black" alt="JavaScript"/>
</p>

<br>

<img src="https://readme-typing-svg.demolab.com?font=DM+Sans&weight=600&size=20&duration=3500&pause=800&color=2563EB&center=true&vCenter=true&width=700&height=45&lines=Track+your+spending.;Understand+your+money.;Build+better+financial+habits." alt="Project Tagline"/>

<br><br>

<a href="https://personal-expense-tracker-d6b8a.web.app" target="_blank">
  <img src="https://img.shields.io/badge/🚀%20LIVE%20DEMO-Open%20Application-2563EB?style=for-the-badge" alt="Live Demo"/>
</a>

<br><br>

<b>Developed by Hania Eman</b>

</div>

---

# ✦ About The Project

**Personal Expense Tracker** is a modern and responsive web application designed to help users record, organize, search, and manage their daily expenses through a clean and intuitive dashboard.

The application combines a modern finance-focused interface with **Firebase Cloud Firestore** for real-time data storage and synchronization.

It also includes a lightweight **FastAPI backend** that provides application serving and backend API functionality.

### Project Focus

- Clean and intuitive user experience
- Real-time expense management
- Responsive dashboard
- Search and filtering
- Automatic financial calculations
- Firebase Firestore integration
- FastAPI backend structure
- Organized and maintainable code

---

# 🚀 Live Demo

Experience the deployed **Personal Expense Tracker** directly in your browser.

<div align="center">

<a href="https://personal-expense-tracker-d6b8a.web.app" target="_blank">

<img src="https://img.shields.io/badge/🚀%20OPEN%20LIVE%20APPLICATION-2563EB?style=for-the-badge" alt="Open Live Application"/>

</a>

</div>

---

# ✦ Core Features

## Expense Management

- Add new expenses
- Edit existing expenses
- Delete expenses
- Select expense categories
- Store expense dates
- Store expense amounts
- Real-time Firestore synchronization

## Dashboard Analytics

The dashboard automatically provides:

| Metric | Description |
|---|---|
| **Total Expenses** | Total number of recorded expenses |
| **Total Amount Spent** | Combined amount of all expenses |
| **Current Month** | Spending recorded during the current month |
| **Average Daily Spend** | Average spending based on recorded dates |

## Search & Filtering

- Search expenses by title
- Filter expenses by category
- Dynamic result count
- Instant interface updates
- Easy expense discovery

---

# ✦ Expense Categories

| Category | Examples |
|---|---|
| 🍽️ **Food** | Lunch, Dinner, Groceries |
| 🚗 **Travel** | Transport, Fuel, Ride |
| 🛍️ **Shopping** | Clothes, Accessories |
| 📄 **Bills** | Internet, Electricity |
| 📦 **Other** | Miscellaneous expenses |

---

# ✦ UI / UX Design

The application follows a modern **finance-dashboard aesthetic** designed to feel polished, simple, and easy to use.

### Design Principles

- Clean visual hierarchy
- Soft card-based interface
- Modern typography
- Rounded UI components
- Responsive layouts
- Mobile-friendly design
- Minimal visual clutter
- Smooth interactions
- Clear financial information

### Typography

- **DM Sans** — Interface and body text
- **Playfair Display** — Display headings

---

# ✦ Technology Stack

### Frontend

- HTML5
- CSS3
- JavaScript ES6+

### Backend

- Python
- FastAPI
- Uvicorn
- Pydantic

### Database

- Firebase Cloud Firestore

### Deployment

- Firebase Hosting

### Development Tools

- Visual Studio Code
- Git
- GitHub
- Firebase Console

---

# ✦ Application Architecture

`
                         USER
                           │
                           ▼
                  ┌──────────────────┐
                  │    index.html    │
                  │   Application UI │
                  └────────┬─────────┘
                           │
                           ▼
                  ┌──────────────────┐
                  │      app.js      │
                  │ UI + CRUD + Stats│
                  └────────┬─────────┘
                           │
                           ▼
                  ┌──────────────────┐
                  │ Firebase         │
                  │   Firestore      │
                  │ Real-Time Data   │
                  └──────────────────┘

                    FastAPI Backend
                           │
                           ▼
                  ┌──────────────────┐
                  │     main.py      │
                  │ API + Backend    │
                  └──────────────────┘
✦ Firebase Firestore

The application uses Firebase Cloud Firestore for cloud-based expense storage and real-time synchronization.

Collection
expenses
Expense Document
title
amount
category
date
createdAt
updatedAt
Example
{
  "title": "Lunch",
  "amount": 850,
  "category": "Food",
  "date": "2026-09-29",
  "createdAt": "serverTimestamp",
  "updatedAt": "serverTimestamp"
}

Firestore keeps the application interface synchronized with the stored expense data.

✦ FastAPI Backend

The project includes a lightweight FastAPI backend located at:

backend/main.py
Backend Responsibilities
Serve the application
Provide API information
Provide health monitoring
Provide a structured backend foundation
API Endpoints
Application
GET /
API Information
GET /api
Health Check
GET /api/health

Example response:

{
  "status": "healthy",
  "message": "Personal Expense Tracker API is running"
}
Interactive API Documentation

FastAPI provides automatic interactive documentation at:

/docs
✦ Project Structure
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
├── firebase.json
├── .gitignore
└── README.md
File Responsibilities
File	Purpose
index.html	Main application structure
style.css	UI and responsive styling
app.js	Firebase CRUD, statistics and interactions
firebase-config.js	Firebase Web App configuration
firestore.rules	Firestore security rules
backend/main.py	FastAPI application
backend/requirement.txt	Python dependencies
firebase.json	Firebase Hosting configuration
.gitignore	Prevents unwanted files from being committed
README.md	Project documentation
✦ Getting Started
1. Clone the Repository
git clone https://github.com/haniaeman2026-pixel/Personal-Expense-Tracker.git

Then:

cd Personal-Expense-Tracker
✦ Firebase Setup

Create a Firebase project and enable Cloud Firestore.

Setup Flow
Firebase Console
       ↓
Create Project
       ↓
Create Web App
       ↓
Create Firestore Database
       ↓
Configure Firestore Rules

Add your Firebase Web App configuration to:

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

Never commit private service-account credentials, passwords, or secret credentials to GitHub.

✦ Run Frontend Locally

Because the project uses JavaScript modules, run it through a local web server.

Using Python
python -m http.server 5500

Open:

http://localhost:5500
Using VS Code

You can also launch the frontend using the Live Server extension in Visual Studio Code.

✦ Run FastAPI Backend

Open PowerShell inside the backend directory:

cd backend

Install dependencies:

python -m pip install -r requirement.txt

Start the server:

python -m uvicorn main:app --reload

Backend:

http://127.0.0.1:8000

Interactive API documentation:

http://127.0.0.1:8000/docs

Health check:

http://127.0.0.1:8000/api/health
✦ Firebase Deployment

The frontend is deployed using Firebase Hosting.

To deploy the application:

firebase deploy

After successful deployment, Firebase provides a Hosting URL.

Live Application
https://personal-expense-tracker-d6b8a.web.app
✦ Security

The project uses .gitignore to prevent unnecessary or sensitive files from being committed.

Common excluded files include:

.env
backend/.env
__pycache__/
*.pyc

For a production-ready application, recommended improvements include:

Firebase Authentication
User-specific expense data
Authenticated Firestore rules
Proper access control
Secure environment configuration

Avoid unrestricted Firestore production rules such as allow read, write: if true;.

✦ Git Workflow

After making project changes:

git add .

Commit your changes:

git commit -m "Update project"

Push to GitHub:

git push origin main

Before pushing, always verify that sensitive files are excluded by .gitignore.

✦ Project Highlights
✓ Modern responsive dashboard
✓ Expense management system
✓ Firebase Firestore integration
✓ Real-time database synchronization
✓ Add / Edit / Delete functionality
✓ Search and category filtering
✓ Automatic expense calculations
✓ Monthly spending analysis
✓ Average daily spending
✓ Firebase connection status
✓ FastAPI backend
✓ API health endpoint
✓ Responsive mobile interface
✓ Firebase Hosting deployment
✓ Live Web Application
✦ Development Philosophy

The project focuses on combining a clean user experience with real application functionality.

Clean UI
   +
Real Database
   +
CRUD Operations
   +
Real-Time Updates
   +
Backend Structure
   +
Cloud Deployment
   =
Complete Web Application

Rather than functioning as a static interface, the application connects the frontend with a real cloud database and provides a structured backend foundation for further development.

✦ Author
<div align="center"> <img src="https://readme-typing-svg.demolab.com?font=DM+Sans&weight=600&size=22&duration=3000&pause=900&color=2563EB&center=true&vCenter=true&width=600&height=50&lines=Developed+by+Hania+Eman;AI+%26+Data+Science+Student;Python+%7C+AI+%7C+Data+Science" alt="Developed by Hania Eman"/> <br>
Hania Eman

AI & Data Science Student • Python Developer • AI Enthusiast

Exploring and building practical projects in
Artificial Intelligence, Data Science, Machine Learning and Software Development.

</div>
<div align="center">
Personal Expense Tracker

Track smarter. Spend consciously.

<br> <a href="https://personal-expense-tracker-d6b8a.web.app" target="_blank"> <img src="https://img.shields.io/badge/🚀%20TRY%20THE%20LIVE%20APP-2563EB?style=for-the-badge" alt="Try Live App"/> </a>

<br><br>

Developed by Hania Eman

</div> ```
