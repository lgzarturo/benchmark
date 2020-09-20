from flask import Flask

app = Flask(__name__)


@app.route('/hello/<username>')
def hello(username):
	return {
		"greeting": f'Hello, {username}!'
	}
