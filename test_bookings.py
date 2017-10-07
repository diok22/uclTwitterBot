"""Run this script to test the bookings endpoint."""

import requests

body = {
  "service": "roombookings",
  "name": "bookings_changed",
  "verification_secret": "bc35f27d47742f7-c3bd7768defb2c2-1c556d86859419a-897b8dc9273691a",
  "content": {
    "bookings_added": [
      {
        "phone": None,
        "contact": "Jane Smith - UCL Whatever Society",
        "weeknumber": 52,
        "description": "Rm. Closed",
        "start_time": "2017-08-27T23:00:00+01:00",
        "roomid": "G08",
        "siteid": "013",
        "roomname": "Chadwick Building G08",
        "slotid": 907872,
        "end_time": "2017-08-27T23:30:00+01:00"
      }
        ]
  }
}

requests.post("https://abb44d08.ngrok.io", json=body)