from flask import Flask, render_template, request, redirect, url_for, flash

app = Flask(__name__)
app.secret_key = 'Sneha@0603'  # Replace with a strong secret key

@app.route('/')
def index():
    return render_template('index.html')

@app.route('/contact', methods=['GET', 'POST'])
def contact():
    if request.method == 'POST':
        name = request.form['name']
        email = request.form['email']
        message = request.form['message']

        # Simulate saving to a database or sending an email
        flash('Your message has been sent successfully!', 'success')
        return redirect(url_for('index'))

    return render_template('contact.html')

if __name__ == '__main__':
    app.run(debug=True)
