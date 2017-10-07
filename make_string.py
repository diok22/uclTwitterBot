import json
from datetime import datetime

with open("bookings.json", 'r') as f:
    bookings = json.load(f)

tweets = []

for booking in bookings["bookings"]:
    society = (booking["contact"].split("- ")[1])
    start = datetime.strptime(booking["start_time"][:-6], "%Y-%m-%dT%H:%M:%S")
    tweets.append("{} just booked {} for {}".format(society, booking['roomname'], start.strftime("%A %d %B at %H:%M")))

# print(tweets)
print(len(tweets))
with open("tweets.json", "w") as f:
    json.dump(tweets, f)
