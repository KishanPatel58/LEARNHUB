from flask import Flask, render_template, session, redirect, url_for, request, flash

app = Flask(__name__)
app.secret_key = 'university_project_secure_key_2026'

# Dummy User Database (In a real app, these would be in SQLite/MySQL)
USER_DB = {
    "student@college.edu": "password123",
    "admin@college.edu": "admin789"
}

# ... (Keep your COURSES list here from the previous code) ...
@app.route('/')
def index():  # <--- This name is what url_for('index') looks for
    return render_template('index.html')

@app.route('/login', methods=['GET', 'POST'])
def login():
    if request.method == 'POST':
        email = request.form.get('email')
        password = request.form.get('password')
        # Check if email exists and password matches
        if email in USER_DB and USER_DB[email] == password:
            session['user'] = email  # Store user in session
            return redirect(url_for('index'))
        else:
            # Send an error message back to the page
            return render_template('signin.html', error="Invalid Email or Password")
            
    return render_template('signin.html')

@app.route('/logout')
def logout():
    session.pop('user', None)  # Clear the session
    return redirect(url_for('index'))

# Ensure your Index and Details routes are still there...
if __name__ == '__main__':
    app.run(debug=True, port=8000)