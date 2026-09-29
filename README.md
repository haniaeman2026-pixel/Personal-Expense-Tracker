<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=Playfair+Display&weight=700&size=42&duration=3000&pause=1000&color=5A4032&center=true&vCenter=true&width=850&height=80&lines=Personal+Expense+Tracker;Smart+%7C+Simple+%7C+Organized+Finances" alt="Personal Expense Tracker" />

<p>
  <img src="https://img.shields.io/badge/Finance-Expense%20Management-5A4032?style=for-the-badge" alt="Finance"/>
  <img src="https://img.shields.io/badge/Firebase-Firestore-C8A27A?style=for-the-badge&logo=firebase&logoColor=white" alt="Firebase"/>
  <img src="https://img.shields.io/badge/FastAPI-Backend-7A5C45?style=for-the-badge&logo=fastapi&logoColor=white" alt="FastAPI"/>
  <img src="https://img.shields.io/badge/JavaScript-ES6+-6B4F3A?style=for-the-badge&logo=javascript&logoColor=white" alt="JavaScript"/>
</p>

<br>

<img src="https://readme-typing-svg.demolab.com?font=DM+Sans&weight=600&size=20&duration=3500&pause=800&color=7A5C45&center=true&vCenter=true&width=700&height=45&lines=Track+your+spending.;Understand+your+money.;Build+better+financial+habits." alt="Project tagline"/>

<br><br>

<p>
  <a href="https://personal-expense-tracker-d6b8a.web.app" target="_blank">
    <img src="https://img.shields.io/badge/🚀%20LIVE%20DEMO-Open%20Application-5A4032?style=for-the-badge" alt="Live Demo"/>
  </a>
</p>

<br>

<img src="https://readme-typing-svg.demolab.com?font=DM+Sans&weight=600&size=21&duration=3000&pause=900&color=7A5C45&center=true&vCenter=true&width=520&height=45&lines=Developed+by+Hania+Eman" alt="Developed by Hania Eman"/>

</div>

---

## ✦ About The Project

**Personal Expense Tracker** is a modern, responsive web application designed to help users record, organize, search, and manage their daily expenses through a clean and intuitive dashboard.

The application combines a **premium finance-inspired UI/UX** with **Firebase Cloud Firestore** for real-time data storage and synchronization.

It also includes a lightweight **FastAPI backend** for application serving and backend API functionality.

The project focuses on:

- Clean and intuitive user experience
- Real-time expense management
- Responsive dashboard design
- Search and filtering
- Automatic financial calculations
- Firebase Firestore integration
- FastAPI backend structure
- Professional and maintainable code organization
- Deployment readiness

---

# ✦ Live Demo

Experience the complete **Personal Expense Tracker** directly in your browser.

<p align="center">

<a href="https://personal-expense-tracker-d6b8a.web.app" target="_blank">
  <img src="https://img.shields.io/badge/🚀%20OPEN%20LIVE%20APPLICATION-5A4032?style=for-the-badge&logo=vercel&logoColor=white" alt="Open Live Application"/>
</a>

</p>

### What You Can Try

The deployed application allows you to interact with the actual working UI:

- ➕ Add a new expense
- ✏️ Edit an existing expense
- 🗑️ Delete an expense
- 🔎 Search expenses
- 🏷️ Filter expenses by category
- 📊 View total number of expenses
- 💰 View total amount spent
- 📅 View current-month spending
- 📈 View average daily spending
- 🔥 View real-time Firebase connection status

> **Live Demo:** The button above opens the deployed application itself, allowing you to interact with and test the working expense tracker.

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

The dashboard automatically calculates:

| Metric | Description |
|---|---|
| Total Expenses | Total number of recorded expenses |
| Total Amount Spent | Combined amount of all expenses |
| Current Month | Spending recorded during the current month |
| Average Daily Spend | Average spending based on recorded dates |

## Search & Filtering

- Search expenses by title
- Filter by category
- Dynamic result count
- Instant UI updates
- Easy expense discovery

---

# ✦ Expense Categories

The application supports the following categories:

| Category | Example |
|---|---|
| 🍽️ **Food** | Lunch, Dinner, Groceries |
| 🚗 **Travel** | Transport, Fuel, Ride |
| 🛍️ **Shopping** | Clothes, Accessories |
| 📄 **Bills** | Internet, Electricity |
| 📦 **Other** | Miscellaneous expenses |

---

# ✦ UI / UX Design

The application follows a **premium finance-dashboard aesthetic** rather than a generic template.

### Design Language

- Warm cream / ivory background
- Deep cocoa and dark-brown navigation
- Mocha accent elements
- Soft card surfaces
- Rounded modern components
- Clean typography
- Responsive layouts
- Smooth interactions
- Minimal visual clutter
- Mobile-friendly interface

### Visual Direction

```text
Premium Finance Dashboard
          +
Modern SaaS Interface
          +
Warm Editorial Design
          =
Personal Expense Tracker
```

### Typography

The interface uses:

- **DM Sans** — interface and body text
- **Playfair Display** — elegant display headings

---

# ✦ Technology Stack

### Frontend

- HTML5
- CSS3
- JavaScript ES Modules

### Backend

- Python
- FastAPI
- Uvicorn
- Pydantic

### Database

- Firebase Cloud Firestore

### Deployment

- Vercel
- FastAPI-compatible hosting

### Development

- Visual Studio Code
- Git
- GitHub
- Firebase Console

---

# ✦ Application Architecture

``
                         USER
                          │
                          ▼
                ┌───────────────────┐
                │    index.html     │
                │   Application UI  │
                └─────────┬─────────┘
                          │
                          ▼
                ┌───────────────────┐
                │      app.js       │
                │ UI + CRUD + Stats │
                └─────────┬─────────┘
                          │
                          ▼
                ┌───────────────────┐
                │ Firebase Firestore│
                │   Real-Time Data  │
                └───────────────────┘

                  FastAPI Backend
                         │
                         ▼
                ┌───────────────────┐
                │     main.py       │
                │ API + App Serving │
                └───────────────────┘
`

---

# ✦ Firebase Firestore

The application uses **Firebase Cloud Firestore** as its database.

### Collection

```text
expenses
```

### Expense Document Structure

``
title
amount
category
date
createdAt
updatedAt


Example:

```json
{
  "title": "Lunch",
  "amount": 850,
  "category": "Food",
  "date": "2026-09-29",
  "createdAt": "serverTimestamp",
  "updatedAt": "serverTimestamp"
}
```

Firestore provides real-time synchronization between the database and application interface.

---

# ✦ FastAPI Backend

The project includes a lightweight FastAPI backend located inside:

```text
backend/main.py
```

### Backend Responsibilities

- Serve the application
- Provide API information
- Provide health monitoring
- Provide a foundation for future backend functionality

### API Endpoints

#### Application

```http
GET /
```

#### API Information

```http
GET /api
```

#### Health Check

```http
GET /api/health
```

Example response:

```json
{
  "status": "healthy",
  "message": "Personal Expense Tracker API is running"
}
```

### Interactive API Documentation

FastAPI automatically provides:

```text
/docs
```

for interactive API documentation.

---

# ✦ Project Structure

```text
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
```

### File Responsibilities

| File | Purpose |
|---|---|
| `index.html` | Main application structure |
| `style.css` | Complete UI/UX styling |
| `app.js` | Firebase CRUD, statistics and interactions |
| `firebase-config.js` | Firebase Web App configuration |
| `firestore.rules` | Firestore database rules |
| `backend/main.py` | FastAPI application |
| `backend/requirement.txt` | Python dependencies |
| `vercel.json` | Deployment configuration |
| `.gitignore` | Prevents unwanted/sensitive files |
| `README.md` | Project documentation |

---

# ✦ Getting Started

## 1. Clone the Repository

```bash
git clone https://github.com/haniaeman2026-pixel/Personal-Expense-Tracker.git
```

Then:

```bash
cd Personal-Expense-Tracker
```

---

# ✦ Firebase Setup

Create a Firebase project and enable Firestore.

### Setup Flow

```text
Firebase Console
       ↓
Create Project
       ↓
Create Web App
       ↓
Create Firestore Database
       ↓
Configure Firestore Rules
```

Add your Firebase Web App configuration to:

```text
firebase-config.js
```

Example:

```javascript
export const firebaseConfig = {
  apiKey: "YOUR_API_KEY",
  authDomain: "YOUR_PROJECT.firebaseapp.com",
  projectId: "YOUR_PROJECT_ID",
  storageBucket: "YOUR_STORAGE_BUCKET",
  messagingSenderId: "YOUR_MESSAGING_SENDER_ID",
  appId: "YOUR_APP_ID"
};
```

> Never commit private service-account credentials, `.env` files, passwords, or secret credentials to GitHub.

---

# ✦ Run Frontend Locally

Because the project uses JavaScript ES Modules, run it through a local web server.

### Using Python

```powershell
python -m http.server 5500
```

Open:

```text
http://localhost:5500
```

### Using VS Code

The application can also be launched through the **Live Server** extension in Visual Studio Code.

---

# ✦ Run FastAPI Backend

Open PowerShell inside the backend directory:

```powershell
cd backend
```

Install dependencies:

```powershell
python -m pip install -r requirement.txt
```

Start the server:

```powershell
python -m uvicorn main:app --reload
```

Backend:

```text
http://127.0.0.1:8000
```

Interactive API documentation:

```text
http://127.0.0.1:8000/docs
```

Health check:

```text
http://127.0.0.1:8000/api/health
```

---

# ✦ Deployment

## Frontend Deployment

The frontend can be deployed using Vercel.

Install Vercel CLI:

```powershell
npm install -g vercel
```

Login:

```powershell
vercel login
```

Deploy:

```powershell
vercel
```

Production deployment:

```powershell
vercel --prod
```

After deployment, use the generated URL as the project's **Live Demo URL**.

---

# ✦ Security

Security is an important part of the project.

The repository intentionally excludes sensitive files such as:

```text
.env
backend/.env
__pycache__/
*.pyc
```

through `.gitignore`.

### Firebase Security

The included Firestore configuration is designed for an assignment/demo environment.

For a production application, implement:

- Firebase Authentication
- User-specific expense documents
- Authenticated Firestore rules
- Proper access control
- Secure environment configuration

Avoid unrestricted production rules such as:

```text
allow read, write: if true;
```

---

# ✦ Git Workflow

After making project changes:

```powershell
git add .
```

Commit:

```powershell
git commit -m "Update project"
```

Push:

```powershell
git push origin main
```

Before pushing, always make sure sensitive files are excluded.

---

# ✦ Project Highlights

```text
✓ Modern responsive dashboard
✓ Premium finance-inspired UI
✓ Firebase Firestore integration
✓ Real-time database synchronization
✓ Add / Edit / Delete functionality
✓ Search functionality
✓ Category filtering
✓ Automatic expense calculations
✓ Monthly spending analysis
✓ Average daily spending
✓ Firebase connection indicator
✓ FastAPI backend
✓ API health endpoint
✓ Responsive mobile design
✓ GitHub repository
✓ Deployment ready
✓ Live Demo
```

---

# ✦ Future Enhancements

Potential future improvements include:

- 🔐 Firebase Authentication
- 👤 User-specific expense accounts
- 📊 Interactive spending charts
- 📅 Advanced date-range filtering
- 📈 Monthly and yearly reports
- 💰 Budget management
- 🔔 Spending alerts
- 📥 CSV / Excel export
- 🌙 Enhanced dark mode
- 📱 Progressive Web App support
- 🤖 AI-powered spending insights
- 🧾 Receipt upload and expense extraction

---

# ✦ Development Philosophy

The project was built around the idea of combining a clean user experience with real application functionality.

```text
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
Deployment
   =
Complete Web Application
```

Rather than functioning as a static interface, the application connects the frontend with a real cloud database and provides a structured backend foundation for future development.

---

# ✦ Author

<div align="center">

<img src="https://readme-typing-svg.demolab.com?font=DM+Sans&weight=600&size=22&duration=3000&pause=900&color=7A5C45&center=true&vCenter=true&width=600&height=50&lines=Developed+by+Hania+Eman;AI+%26+Data+Science+Student;Python+%7C+Machine+Learning+%7C+AI" alt="Developed by Hania Eman"/>

<br>

**Hania Eman**

AI & Data Science Student • ML Developer • Python Enthusiast

Exploring and building practical projects in  
**Artificial Intelligence, Data Science, Machine Learning and Software Development.**

</div>

---

<div align="center">

## Personal Expense Tracker

**Track smarter. Spend consciously. Build better habits.**

<a href="https://personal-expense-tracker-d6b8a.web.app" target="_blank">
  <img src="https://img.shields.io/badge/🚀%20TRY%20THE%20LIVE%20APP-5A4032?style=for-the-badge" alt="Try Live App"/>
</a>

<br><br>

Made with ♡ by **Hania Eman**

</div>
