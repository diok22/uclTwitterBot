import json
import tweepy
import re
import os
from flask import Flask, request
from tweepy import TweepError

from make_string import tweet_text, next_booking, epoch

app = Flask(__name__)

auth = tweepy.OAuthHandler(
    os.environ['TWITTER_CONSUMER_KEY'],
    os.environ['TWITTER_CONSUMER_SECRET']
)
auth.set_access_token(
    os.environ['TWITTER_ACCESS_TOKEN_KEY'],
    os.environ['TWITTER_ACCESS_TOKEN_SECRET']
)

twitter = tweepy.API(auth)


def is_society(str):
    return bool(re.search(
        r"(Club|Society|Application of Psychedelics|Chinese Students and Scholars Association|Christian Union|Effective Altruism|European Law Students Association|Guild|Hiking & Walking|Kinesis Magazine|Law for All|Pi Media|Pole Fitness|Red Star FC|SAVAGE Journal|Snooker and Pool|Student Action for Refugees|TherouxSoc)",
        str))


@app.route("/", methods=["POST"])
def index():
    request_data = json.loads(request.get_data())

    if (
        request_data["verification_secret"] !=
        os.environ["UCLAPI_VERIFICATION_SECRET"]
    ):
        return "invalid verification_secret"

    if request_data["name"] == "challenge":
        print("Responding to challenge")
        challenge = json.loads(request.get_data())["challenge"]
        return json.dumps({"challenge": challenge})

    elif request_data["name"] == "bookings_changed":
        with open("tweets.json", "r") as f:
            tweets = json.load(f)

        try:
            for x in request_data["content"]["bookings_added"]:
                if is_society(x["contact"]):
                    try:
                        twitter.update_status(tweet_text(x))
                    except TweepError as e:
                        raise Warning(e)
                    tweets.append({"booking": next_booking(x), "society": x["contact"].split("- ")[1],
                                   "time": epoch(x['start_time'])})
        except KeyError:
            print("No bookings to be added...")

        try:
            for x in request_data["content"]["bookings_removed"]:
                if is_society(x["contact"]):
                    tweets.remove({"booking": next_booking(x), "society": x["contact"].split("- ")[1],
                                   "time": epoch(x['start_time'])})
        except KeyError:
            print("No bookings to be removed...")

        with open("tweets.json", "w") as f:
            json.dump(tweets, f)

    return ""


if __name__ == "__main__":
    app.run()
