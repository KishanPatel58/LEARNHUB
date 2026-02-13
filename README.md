# 📚 LearnHub

LearnHub is a full-stack learning platform built using **Flask (Python)**, **MySQL**, and **HTML/CSS**.  
It allows students to register, log in, access courses, and track course engagement with smart database logic.

---

## 🚀 Features

- 🔐 User Registration & Login System
- 👤 User Profile Page
- 📊 Course Visit Tracking (Count increases only once per user)
- 🗑️ Deleted User Logging using MySQL Trigger
- 🌙 Dark Themed UI
- 🗄️ MySQL Database Integration
- 🔒 Session Management

---

## 🛠️ Tech Stack

**Frontend:**
- HTML
- CSS
- JavaScript

**Backend:**
- Python (Flask)

**Database:**
- MySQL (phpMyAdmin)

---

## 📂 Project Structure
### LEARNHUB/
### │
### ├── static/
### │ ├── css/
### │ └── images/
### │
### ├── templates/
### │ ├── login.html
### │ ├── signup.html
### │ ├── profile.html
### │ ├── frontend.html
### │
### ├── app.py
### ├── requirements.txt
### └── README.md


---

## 🧠 Database Structure

### Users Table
Stores registered student data.

### Courses Table
Stores course name and visit count.

### Course Visits Table
Prevents duplicate visit count per user.

```sql
CREATE TABLE course_visits (
    user_id INT,
    course_name VARCHAR(100),
    PRIMARY KEY (user_id, course_name)
);
```
Deleted Users Log Table
Stores deleted user data using trigger.
```sql
CREATE TABLE deleted_users_log (
    id INT,
    username VARCHAR(100),
    email VARCHAR(254),
    contactno VARCHAR(10),
    course VARCHAR(100),
    deleted_at TIMESTAMP DEFAULT CURRENT_TIMESTAMP
);
```
Delete Trigger
```sql
CREATE TRIGGER after_user_delete
AFTER DELETE ON users
FOR EACH ROW
INSERT INTO deleted_users_log
(id, username, email, contactno, course)
VALUES
(OLD.id, OLD.username, OLD.email, OLD.contactno, OLD.course);
```
⚙️ Installation Guide

Clone the repository:
```sql
1. git clone https://github.com/KishanPatel58/LEARNHUB.git
2. cd LEARNHUB
```