import json
import datetime
import ciso8601

with open("bookings.json", 'r') as f:
    bookings = json.load(f)

for booking in bookings["bookings"]:
    society = (booking["contact"].split("- ")[1])
    start = ciso8601.parse_datetime(booking["start_time"])

    print("{} just booked {} on {}".format(society, booking['roomname'], start.day))