from flask import Flask, jsonify, request
from flask_cors import CORS

app = Flask(__name__)
CORS(app)

@app.route("/api/home", methods={"GET"})
def return_home():
    return jsonify({
        "message": "Hello World"
    })

@app.route("/submit/data", methods={"POST"})
def submit_data():
    try:
        data = request.get_json()
        print(data)

        return jsonify({
            "message": "Successfully received you data",
            "ok": True
        }), 200
    
    except Exception as e:
        return jsonify({
            "error": str(e),
            "message": "There was an error getting your data"
        }), 400


if __name__ == "__main__":
    app.run(port=5328, debug=True)