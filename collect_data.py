import requests
import json
from make_string import next_booking, epoch, is_after_today

"""Fetches all the bookings for societies from UCL API and stores appropriate messages in tweets.json.
These are used when responding to tweets."""

with open("secret.json", 'r') as f:
    secret = json.load(f)

with open("weird_socs.json", 'r') as f:
    weird_socs = json.load(f)

bookings = []

for search_term in weird_socs + ["Society", "Club"]:

    params = {
        "token": secret['uclapikey'],
        "results_per_page": "1000",
        "contact": search_term
    }

    req = requests.get(
        "https://uclapi.com/roombookings/bookings",
        params=params
    )
    resp = req.json()

    print(resp)

    bookings += resp["bookings"]

    next_page = resp["next_page_exists"]
    counter = 0
    while next_page:
        page_token = resp["page_token"]
        params = {
            "token": secret['uclapikey'],
            "page_token": page_token
        }
        pagination_req = requests.get(
            "https://uclapi.com/roombookings/bookings",
            params=params
        )
        pagination_resp = pagination_req.json()
        bookings += pagination_resp["bookings"]
        if pagination_resp["next_page_exists"] and counter < 11:
            next_page = True
            counter += 1
        else:
            next_page = False

    with open('tweets.json', 'w') as f:
        f.write(
            json.dumps([{"society": x["contact"].split("- ")[1], "booking": next_booking(x),
                         "time": epoch(x["start_time"])} for x in bookings if is_after_today(x["start_time"])],
                       sort_keys=True, indent=4)
        )
