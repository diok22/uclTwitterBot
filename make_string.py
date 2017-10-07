import json
from datetime import datetime

with open("bookings.json", 'r') as f:
    bookings = json.load(f)

tweets = []


def tweet_text(booking):
    society = (booking["contact"].split("- ")[1])
    start = datetime.strptime(booking["start_time"][:-6], "%Y-%m-%dT%H:%M:%S")
    return "{} just booked {} for {}".format(society, booking['roomname'], start.strftime("%A %d %B at %H:%M"))

for booking in bookings["bookings"]:
    tweets.append(tweet_text(booking))



# print(tweets)
print(len(tweets))
with open("tweets.json", "w") as f:
    json.dump(tweets[:5], f)
