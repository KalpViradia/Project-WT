# 📝 Project WT – Article Comment Manager

A backend application built with **Node.js**, **Express**, and **MongoDB** that allows CRUD operations on comments associated with pre-existing articles. Each article can have multiple comments, and users can create, update, or delete those comments.

---

## ✅ Implemented Features

* Fetch all articles
* Fetch a single article by ID
* Add comments to a specific article
* Edit a comment on an article
* Delete a comment from an article
* Proper error handling for invalid IDs
* MongoDB integration via Mongoose

---

## 🛠️ Tech Stack

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

# Install dependencies
npm install

# Start the server
node index.js
```

The server runs at: `http://localhost:5000/`

---

## ⚙️ How It Works

1. The backend serves a list of predefined articles stored in MongoDB.
2. Users can add comments to these articles by sending a POST request to the appropriate endpoint.
3. Comments can be updated or deleted using their respective IDs.
4. All data changes are persisted in the MongoDB database.
5. Errors such as invalid IDs or missing resources are handled with appropriate messages.

---
