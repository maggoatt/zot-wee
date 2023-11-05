from flask import Flask

app = Flask(__name__)

@app.route("/")
def zot_wee():
    return "<p>Zot Wee!</p>"
