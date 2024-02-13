from flask import Flask, request, render_template, redirect

app = Flask(__name__, template_folder="templates")

@app.route('/')
def index():
    render_template('index.html')