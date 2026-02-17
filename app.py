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
        contactno = request.form["contactno"]
        email = request.form["email"]
        password = request.form["password"]
        session["username"] = username
        hashed_password = generate_password_hash(password)
        cursor = db.cursor()
        cursor.execute(
            "INSERT INTO users (username, email, password, contactno) VALUES (%s, %s, %s, %s)",
            (username, email, hashed_password, contactno)
        )
        db.commit()
        cursor.close()
        session["user"] = username
        return redirect(url_for("home"))
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
            session["email"] = user["email"]
            session["contactno"] = user["contactno"]
            session["id"] = user["id"]

            return redirect(url_for("home"))
        else:
            return render_template("signin.html",errormessage="Invalid Email of Password..")
    return render_template("signin.html")
# course page
@app.route("/frontend.html")
def frontend():
    session["oldprice"] = "4999"
    session["newprice"] = "1999"
    session["discount"] = "60"
    session["coursename"] = "Frontend Domination"

    username = session.get("username")
    user_id = session.get("id")
    course_name = "Frontend Domination"
    print("USER ID:", user_id)
    print("USERNAME:", username)
    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="LHB"
    )
    cursor = db.cursor()

    # -----------------------------
    # 1️⃣ Get existing courses
    # -----------------------------
    cursor.execute(
        "SELECT course FROM users WHERE username = %s",
        (username,)
    )
    result = cursor.fetchone()

    if result and result[0]:
        existing_courses = result[0].split(",")

        # If course not already added
        if course_name not in existing_courses:
            updated_courses = result[0] + "," + course_name

            cursor.execute(
                "UPDATE users SET course = %s WHERE username = %s",
                (updated_courses, username)
            )
    else:
        # First course
        cursor.execute(
            "UPDATE users SET course = %s WHERE username = %s",
            (course_name, username)
        )

    db.commit()

    # -----------------------------
    # 2️⃣ Check visit table
    # -----------------------------
    cursor.execute(
        "SELECT * FROM course_visits WHERE user_id=%s AND course_name=%s",
        (user_id, course_name)
    )
    visit = cursor.fetchone()

    if not visit:
        cursor.execute(
            "INSERT INTO course_visits (user_id, course_name) VALUES (%s, %s)",
            (user_id, course_name)
        )

        cursor.execute(
            "UPDATE course SET studentenrolled = studentenrolled + 1 WHERE coursename=%s",
            (course_name,)
        )

        db.commit()

    cursor.close()
    db.close()

    return render_template("frontend.html", username=username)

# course page
@app.route("/threejs.html")
def threejs():
    session["oldprice"] = "5999"
    session["newprice"] = "2499"
    session["discount"] = "58"
    session["coursename"] = "Three.js Domination"

    username = session.get("username")
    user_id = session.get("id")
    course_name = "Three.js Domination"

    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="LHB"
    )
    cursor = db.cursor()

    # -----------------------------
    # 1️⃣ Get existing courses
    # -----------------------------
    cursor.execute(
        "SELECT course FROM users WHERE username = %s",
        (username,)
    )
    result = cursor.fetchone()

    if result and result[0]:
        existing_courses = result[0].split(",")

        # If course not already added
        if course_name not in existing_courses:
            updated_courses = result[0] + "," + course_name

            cursor.execute(
                "UPDATE users SET course = %s WHERE username = %s",
                (updated_courses, username)
            )
    else:
        # First course
        cursor.execute(
            "UPDATE users SET course = %s WHERE username = %s",
            (course_name, username)
        )

    db.commit()

    # -----------------------------
    # 2️⃣ Check visit table
    # -----------------------------
    cursor.execute(
        "SELECT * FROM course_visits WHERE user_id=%s AND course_name=%s",
        (user_id, course_name)
    )
    visit = cursor.fetchone()

    if not visit:
        cursor.execute(
            "INSERT INTO course_visits (user_id, course_name) VALUES (%s, %s)",
            (user_id, course_name)
        )

        cursor.execute(
            "UPDATE course SET studentenrolled = studentenrolled + 1 WHERE coursename=%s",
            (course_name,)
        )

        db.commit()

    cursor.close()
    db.close()

    return render_template("threejs.html", username=username)

# course page
@app.route("/fullstack.html")
def fullstack():
    session["oldprice"] = "7999"
    session["newprice"] = "3499"
    session["discount"] = "56"
    session["coursename"] = "Fullstack Development"

    username = session.get("username")
    user_id = session.get("id")
    course_name = "Fullstack Development"

    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="LHB"
    )
    cursor = db.cursor()

    # -----------------------------
    # 1️⃣ Get existing courses
    # -----------------------------
    cursor.execute(
        "SELECT course FROM users WHERE username = %s",
        (username,)
    )
    result = cursor.fetchone()

    if result and result[0]:
        existing_courses = result[0].split(",")

        # If course not already added
        if course_name not in existing_courses:
            updated_courses = result[0] + "," + course_name

            cursor.execute(
                "UPDATE users SET course = %s WHERE username = %s",
                (updated_courses, username)
            )
    else:
        # First course
        cursor.execute(
            "UPDATE users SET course = %s WHERE username = %s",
            (course_name, username)
        )

    db.commit()

    # -----------------------------
    # 2️⃣ Check visit table
    # -----------------------------
    cursor.execute(
        "SELECT * FROM course_visits WHERE user_id=%s AND course_name=%s",
        (user_id, course_name)
    )
    visit = cursor.fetchone()

    if not visit:
        cursor.execute(
            "INSERT INTO course_visits (user_id, course_name) VALUES (%s, %s)",
            (user_id, course_name)
        )

        cursor.execute(
            "UPDATE course SET studentenrolled = studentenrolled + 1 WHERE coursename=%s",
            (course_name,)
        )

        db.commit()

    cursor.close()
    db.close()

    return render_template("fullstack.html", username=username)

# course page
@app.route("/dsa.html")
def dsa():
    session["oldprice"] = "3999"
    session["newprice"] = "1499"
    session["discount"] = "62"
    session["coursename"] = "DSA with JS"

    username = session.get("username")
    user_id = session.get("id")
    course_name = "DSA with JS"

    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="LHB"
    )
    cursor = db.cursor()

    # -----------------------------
    # 1️⃣ Get existing courses
    # -----------------------------
    cursor.execute(
        "SELECT course FROM users WHERE username = %s",
        (username,)
    )
    result = cursor.fetchone()

    if result and result[0]:
        existing_courses = result[0].split(",")

        # If course not already added
        if course_name not in existing_courses:
            updated_courses = result[0] + "," + course_name

            cursor.execute(
                "UPDATE users SET course = %s WHERE username = %s",
                (updated_courses, username)
            )
    else:
        # First course
        cursor.execute(
            "UPDATE users SET course = %s WHERE username = %s",
            (course_name, username)
        )

    db.commit()

    # -----------------------------
    # 2️⃣ Check visit table
    # -----------------------------
    cursor.execute(
        "SELECT * FROM course_visits WHERE user_id=%s AND course_name=%s",
        (user_id, course_name)
    )
    visit = cursor.fetchone()

    if not visit:
        cursor.execute(
            "INSERT INTO course_visits (user_id, course_name) VALUES (%s, %s)",
            (user_id, course_name)
        )

        cursor.execute(
            "UPDATE course SET studentenrolled = studentenrolled + 1 WHERE coursename=%s",
            (course_name,)
        )

        db.commit()

    cursor.close()
    db.close()

    return render_template("dsa.html", username=username)

# course page
@app.route("/backend.html")
def backend():
    session["oldprice"] = "6999"
    session["newprice"] = "2999"
    session["discount"] = "57"
    session["coursename"] = "Backend Development"

    username = session.get("username")
    user_id = session.get("id")
    course_name = "Backend Development"
    print("Logged in user ID:", user_id)
    print("Course:", course_name)

    db = mysql.connector.connect(
        host="localhost",
        user="root",
        password="",
        database="LHB"
    )
    cursor = db.cursor()

    # -----------------------------
    # 1️⃣ Get existing courses
    # -----------------------------
    cursor.execute(
        "SELECT course FROM users WHERE username = %s",
        (username,)
    )
    result = cursor.fetchone()

    if result and result[0]:
        existing_courses = result[0].split(",")

        # If course not already added
        if course_name not in existing_courses:
            updated_courses = result[0] + "," + course_name

            cursor.execute(
                "UPDATE users SET course = %s WHERE username = %s",
                (updated_courses, username)
            )
    else:
        # First course
        cursor.execute(
            "UPDATE users SET course = %s WHERE username = %s",
            (course_name, username)
        )

    db.commit()

    # -----------------------------
    # 2️⃣ Check visit table
    # -----------------------------
    cursor.execute(
        "SELECT * FROM course_visits WHERE user_id=%s AND course_name=%s",
        (user_id, course_name)
    )
    visit = cursor.fetchone()

    if not visit:
        cursor.execute(
            "INSERT INTO course_visits (user_id, course_name) VALUES (%s, %s)",
            (user_id, course_name)
        )

        cursor.execute(
            "UPDATE course SET studentenrolled = studentenrolled + 1 WHERE coursename=%s",
            (course_name,)
        )

        db.commit()

    cursor.close()
    db.close()

    return render_template("backend.html", username=username)

@app.route("/course")
def course():
    coursename = session.get("coursename")
    username = session.get("user")
    return render_template("course.html",coursename=coursename,username=username)
@app.route("/profile")
def profile():
    username = session.get("user")
    email = session.get("email")
    contactno = session.get("contactno")
    return render_template("profile.html",username=username,email=email,contactno=contactno)


# Logout Route
@app.route("/logout")
def logout():
    if 'email' in session:
        email = session['email']

        db = mysql.connector.connect(
            host="localhost",
            user="root",
            password="",
            database="LHB"
        )
        cursor = db.cursor()
        # Delete that specific user
        cursor.execute("DELETE FROM users WHERE email = %s", (email,))
        db.commit()
        cursor.close()
        db.close()
        # Clear session
        session.pop('email', None)
    return redirect(url_for('login'))
if __name__ == "__main__":
    app.run(debug=True)