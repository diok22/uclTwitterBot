import json
from datetime import datetime


def epoch(time_string):
    return (datetime.strptime(time_string[:-6], "%Y-%m-%dT%H:%M:%S") - datetime(2017, 1, 1)).total_seconds()


def tweet_text(booking):
    society = (booking["contact"].split("- ")[1])
    start = datetime.strptime(booking["start_time"][:-6], "%Y-%m-%dT%H:%M:%S")
    return "{} just booked {} for {}".format(society, booking['roomname'], start.strftime("%A %d %B at %H:%M"))


def next_booking(booking):
    society = (booking["contact"].split("- ")[1])
    start = datetime.strptime(booking["start_time"][:-6], "%Y-%m-%dT%H:%M:%S")
    return "The next booking for {} is on {} in {}".format(society, start.strftime("%A %d %B at %H:%M"),
                                                           booking['roomname'])


if __name__ == "__main__":
    with open("bookings.json", 'r') as f:
        bookings = json.load(f)

    tweets = []

    for booking in bookings["bookings"]:
        tweets.append(tweet_text(booking))

    # print(tweets)
    print(len(tweets))
    with open("tweets.json", "w") as f:
        json.dump(tweets[:5], f)
