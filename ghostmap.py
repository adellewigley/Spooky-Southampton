from flask import Flask
from flask import render_template

app = Flask(__name__)

@app.route("/")
def index():
	return render_template('index.html')

@app.route("/404")
def page2():
	return render_template('page2.html')

if __name__ == "__main__":
	app.run()




