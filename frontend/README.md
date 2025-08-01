# 🌟 Fundraising Intern Portal - Full Stack Project

A modern, professional intern dashboard for tracking fundraising progress, rewards, and leaderboards.

## 🚀 Project Overview

This is a **Full Stack Intern Portal** built for the internship application task. The platform allows interns to track their fundraising progress, view rewards, and compete on leaderboards.

## ✨ Features

### 📱 Frontend
- **Dummy Login System** - Clean authentication interface
- **Interactive Dashboard** - Professional intern portal
- **Rewards System** - Points, levels, and achievements
- **Leaderboard** - Competitive ranking system
- **Responsive Design** - Mobile-friendly interface

### 🔧 Backend
- **REST API** - Express.js server with JSON endpoints
- **Data Management** - Static JSON files for intern and leaderboard data
- **CORS Support** - Cross-origin resource sharing enabled
- **Error Handling** - Proper HTTP status codes and error responses

## 🛠️ Tech Stack

**Frontend:**
- React.js
- React Router DOM
- Axios (API calls)
- Tailwind CSS
- React Icons

**Backend:**
- Node.js
- Express.js
- JSON data storage
- CORS middleware

## 📁 Project Structure

```
webDevIntership/
├── frontend/
│   ├── src/
│   │   ├── components/
│   │   │   ├── Navbar.jsx
│   │   │   ├── Topbar.jsx
│   │   │   ├── Sidebar.jsx
│   │   │   ├── Rewards.jsx
│   │   │   └── Leaderboard.jsx
│   │   ├── pages/
│   │   │   ├── LoginForm.jsx
│   │   │   └── Dashboard.jsx
│   │   └── App.jsx
│   └── package.json
├── backend/
│   ├── server.js
│   ├── intern.json
│   ├── leaderboard.json
│   └── package.json
└── README.md
```

## 🔧 Installation & Setup

### Prerequisites
- Node.js (v14 or higher)
- npm or yarn

### Backend Setup
```bash
cd backend
npm install
npm start
```
Server runs on `http://localhost:5000`

### Frontend Setup
```bash
cd frontend
npm install
npm run dev
```
Frontend runs on `http://localhost:5173`

## 📊 API Endpoints

```
GET /api/internData    - Fetch intern profile data
GET /api/leadboard     - Fetch leaderboard rankings
```

## 🎯 Key Features Implemented

✅ **Login/Signup Page** - Dummy authentication with routing  
✅ **Intern Dashboard** - Shows name, referral code, donations  
✅ **Rewards Section** - Points, levels, and achievements  
✅ **Leaderboard** - Competitive ranking system  
✅ **REST API** - Backend endpoints with JSON data  
✅ **Professional UI** - Clean, modern design  
✅ **Responsive Layout** - Works on all devices  

## 🏆 Project Highlights

- **⚡ Built in 4 hours** - Efficient development process
- **🎨 Professional Design** - Clean, modern UI/UX
- **📱 Responsive** - Mobile-first approach
- **🔗 Full Integration** - Frontend-backend communication
- **📊 Data Visualization** - Interactive charts and stats
- **🏅 Gamification** - Rewards and leaderboard system

## 🚀 Future Enhancements

- Real database integration (MongoDB/PostgreSQL)
- User authentication with JWT
- Real-time notifications
- Payment gateway integration
- Advanced analytics dashboard
- Mobile app development

## 👨‍💻 Developer

**Chetan Avusala**  
Email: avusalachetan@gmail.com <br>
portfolio:https://chetan-portfolio-web.netlify.app/

## 📄 License
This project is created for the Full Stack Developer Internship – Round 1 Task.

---

**⭐ If you like this project, please give it a star!**