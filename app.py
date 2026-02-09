import mysql.connector
from flask import Flask, render_template, request, redirect, url_for, session
from werkzeug.security import generate_password_hash, check_password_hash

app = Flask(__name__)
app.secret_key = "super_secret_key"

# MySQL Connection
db = mysql.connector.connect(
    host="localhost",
    user="root",
    password="",
    database="LHB"
)
# Home Route
@app.route("/")
def home():
    if "user" in session:
        return render_template("index.html", user=session["user"])
    return redirect(url_for("login"))

# Register Route
@app.route("/signup", methods=["GET", "POST"])
def register():
    if request.method == "POST":
        username = request.form["username"]
        email = request.form["email"]
        password = request.form["password"]
        hashed_password = generate_password_hash(password)
        cursor = db.cursor()
        cursor.execute(
            "INSERT INTO users (username, email, password) VALUES (%s, %s, %s)",
            (username, email, hashed_password)
        )
        db.commit()
        cursor.close()
        session["user"] = username
        return redirect(url_for("home"))
        print(username,email,password)
    return render_template("signup.html")

# Login Route
@app.route("/login", methods=["GET", "POST"])
def login():
    if request.method == "POST":
        email = request.form["email"]
        password = request.form["password"]

        cursor = db.cursor(dictionary=True)
        cursor.execute(
            "SELECT * FROM users WHERE email=%s",
            (email,)
        )
        user = cursor.fetchone()
        cursor.close()
        if user and check_password_hash(user["password"], password):
            session["user"] = user["username"]
            return redirect(url_for("home"))
        else:
            return "Invalid Email or Password"
    return render_template("signin.html")

# Logout Route
@app.route("/logout")
def logout():
    session.pop("user", None)
    return redirect(url_for("signin"))
if __name__ == "__main__":
    app.run(debug=True)