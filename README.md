# 📝 Project WT – Article Comment Manager

A full-stack web application built with **Node.js**, **Express**, **MongoDB**, **React**, and **Bootstrap**. This app allows users to view a list of articles and perform full CRUD operations on comments associated with each article.

---

## ✅ Implemented Features

* Fetch all articles
* Fetch a single article by ID
* Add comments to a specific article
* Edit a comment on an article
* Delete a comment from an article
* Proper error handling for invalid IDs
* MongoDB integration via Mongoose
* Responsive frontend built with React & Bootstrap

---

## 🛠️ Tech Stack

* **Frontend**: React, Bootstrap, Axios
* **Backend**: Node.js, Express.js
* **Database**: MongoDB (Mongoose)
* **Utilities**: body-parser, CORS

---

## 📦 Installation & Setup

### Prerequisites

* Node.js and npm
* MongoDB (local or remote)

### Steps

```bash
# Clone the repository
git clone https://github.com/KalpViradia/Project-WT.git
cd Project-WT
```

#### Backend Setup

```bash
cd backend
npm install
node index.js
```

#### Frontend Setup

```bash
cd frontend
npm install
npm start
```

The backend runs at: `http://localhost:5000/`
The frontend runs at: `http://localhost:3000/`

---

## ⚙️ How It Works

1. The backend provides a REST API to serve articles and handle comment operations (create, update, delete).
2. The frontend displays articles in a clean layout using Bootstrap for styling and Axios for API calls.
3. Users can view all articles, open an article to see its comments, and perform CRUD operations on those comments.
4. All changes are synced with the MongoDB database.
5. Error handling is in place for invalid requests and IDs.

---
