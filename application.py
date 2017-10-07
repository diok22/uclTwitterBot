import json

from flask import Flask, request
from make_string import tweet_text

app = Flask(__name__)

with open("secret.json", "r") as f:
    webhook_secret = json.load(f)["webhook_secret"]


@app.route("/", methods=["POST"])
def index():
    request_data = json.loads(request.get_data())

    if request_data["name"] == "challenge":
        print("Responding to challenge")
        challenge = json.loads(request.get_data())["challenge"]
        return json.dumps({"challenge": challenge})

    elif request_data["name"] == "bookings_changed":
        with open("tweets.json", "r") as f:
            bookings = json.load(f)

        for x in request_data["content"]["bookings_added"]:
            if "Society" in x["contact"]:
                bookings.append(tweet_text(x))

        with open("tweets.json", "w") as f:
            json.dump(bookings, f)

    return ""
