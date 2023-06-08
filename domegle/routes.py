from flask import Flask, render_template
import os
import sys

app = Flask(__name__, static_url_path='/static') #  we set the static_url_path parameter to '/static', which tells Flask to serve static files from a directory named static in the root directory of our application.


@app.route('/')
def home():
    return render_template('index.html')

@app.route('/settings')
def settings():
    return render_template('index.html')

@app.route('/chat')
def chat():
    return render_template('chat.html')