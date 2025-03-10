﻿# jktech-assignment

# JKTech Blogging System

This project is a full-stack web application implementing Google and Facebook authentication using **React.js** for the frontend and **Node.js (Express + Passport.js)** for the backend.

---

## Project Overview

## 🚀 Features

✅ Google Login Integration
✅ Facebook Login Integration
✅ User Authentication with JWT
✅ React Context API for State Management
✅ Secure OAuth Implementation
✅ Fully Responsive UI with TailwindCSS

---

## 🛠️ Tech Stack

- **Frontend**: React.js, React Router, Context API, TailwindCSS
- **Backend**: Node.js, Express.js, Passport.js
- **Database**: MongoDB (Mongoose)
- **Authentication**: Google OAuth 2.0, Facebook OAuth 2.0

---

## 📂 Project Structure

```
📦 project-root
├── 📂 api
│   ├── 📂 config
│   │   ├── facebookAuth.js
│   │   ├── googleAuth.js
│   ├── 📂 routes
│   │   ├── auth.js
│   ├── 📂 schema
│   │   ├── user.js
│   ├── server.js
│
├── 📂 client
│   ├── 📂 src
│   │   ├── 📂 components
│   │   │   ├── FacebookLogin.jsx
│   │   │   ├── GoogleLogin.jsx
│   │   │   ├── Signup.jsx
│   │   ├── 📂 context
│   │   │   ├── userContext.js
│   │   ├── App.js
│   │   ├── index.js
│
├── .env
├── README.md
```

---

## 🔧 Installation

1. **Clone the repository**

```bash
git clone https://github.com/yashrajverma/jktech-assignment.git
cd jktech-assignment
```

2. **Install dependencies**

```bash
cd api && npm install
cd client/my-blog-app && npm install
```

3. **Environment Variables**
   Create a `.env` file in both **api** and **client** folders with the following details:

**Backend `.env`**

```
PORT=5001
MONGODB_URI=<Your MongoDB URI>
GOOGLE_CLIENT_ID=<Your Google Client ID>
GOOGLE_CLIENT_SECRET=<Your Google Client Secret>
FACEBOOK_APP_ID=<Your Facebook App ID>
FACEBOOK_APP_SECRET=<Your Facebook App Secret>
REACT_APP_API_URL=http://localhost:5173
```

**Frontend `.env`**
```

REACT_APP_API_BASE_URL=http://localhost:5001/api
REACT_APP_GOOGLE_CLIENT_ID=your-google-client-id
REACT_APP_FACEBOOK_APP_ID=your-facebook-app-id

````

4. **Run the Backend**

```bash
cd api
npm start
````

5. **Run the Frontend**

```bash
cd client/my-blog-app
npm run dev
```

---

## 🚨 OAuth Setup

### **Google OAuth**

1. Go to [Google Cloud Console](https://console.cloud.google.com/)
2. Create a new project.
3. Enable the **Google+ API**.
4. In **OAuth Consent Screen**, set the **Authorized Redirect URI** to:

```
http://localhost:5001/api/auth/google/callback
```

### **Facebook OAuth**

1. Go to [Facebook Developers](https://developers.facebook.com/)
2. Create a new app with the **Consumer** type.
3. In **Facebook Login → Settings**, add the following URI:

```
http://localhost:5001/api/auth/facebook/callback
```

---

## 📋 Usage

### **Google Login Flow**

1. Click on the **Sign in with Google** button.
2. Select your Google account to authenticate.
3. On success, you'll be redirected to the **Dashboard**.

### **Facebook Login Flow**

1. Click on the **Sign in with Facebook** button.
2. Log in with your Facebook account.
3. On success, you'll be redirected to the **Dashboard**.

---

## ⚙️ API Endpoints

## API Routes

### Authentication Routes

| Method   | Route                     | Description             |
| -------- | ------------------------- | ----------------------- |
| **POST** | `/api/auth/register`      | Register new user       |
| **POST** | `/api/auth/login`         | Login user with email   |
| **GET**  | `/auth/google`            | Google OAuth Login      |
| **GET**  | `/auth/google/callback`   | Google OAuth Callback   |
| **GET**  | `/auth/facebook`          | Facebook OAuth Login    |
| **GET**  | `/auth/facebook/callback` | Facebook OAuth Callback |

### Blog Routes

| Method     | Route            | Description       |
| ---------- | ---------------- | ----------------- |
| **GET**    | `/api/blogs`     | Fetch all blogs   |
| **GET**    | `/api/blogs/:id` | Fetch blog by ID  |
| **POST**   | `/api/blogs`     | Create a new blog |
| **PUT**    | `/api/blogs/:id` | Update blog by ID |
| **DELETE** | `/api/blogs/:id` | Delete blog by ID |

### User Routes

| Method     | Route            | Description       |
| ---------- | ---------------- | ----------------- |
| **GET**    | `/api/users`     | Fetch all users   |
| **GET**    | `/api/users/:id` | Fetch user by ID  |
| **PUT**    | `/api/users/:id` | Update user by ID |
| **DELETE** | `/api/users/:id` | Delete user by ID |

---

## ✅ Best Practices Implemented

✔️ Secure OAuth Implementation  
✔️ Efficient Error Handling  
✔️ Centralized User Context with React's Context API  
✔️ Clear Code Structure with Modular Components  
✔️ Full-Stack Security with Environment Variables

---

## 🤝 Contributing

Feel free to contribute to improve the project by submitting issues or pull requests.

---

## 📄 License

This project is licensed under the MIT License.

---

## 👨‍💻 Author

**Yashraj Verma**

If you found this project helpful, don't forget to give it a ⭐️!
