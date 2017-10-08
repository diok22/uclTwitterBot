"""Run this script to simulate something being sent by the bookings endpoint."""

import requests

body = {
  "service": "roombookings",
  "name": "bookings_changed",
  "verification_secret": "bc35f27d47742f7-c3bd7768defb2c2-1c556d86859419a-897b8dc9273691a",
  "content": {
    "bookings_added": [
      {
        "phone": None,
        "contact": "Jane Smith - Excessive Roombooking Society",
        "weeknumber": 52,
        "description": "Rm. Closed",
        "start_time": "2017-10-05T23:00:00+01:00",
        "roomid": "G08",
        "siteid": "013",
        "roomname": "Chadwick Building G08",
        "slotid": 907872,
        "end_time": "2017-08-27T23:30:00+01:00"
      },

      {
        "phone": None,
        "contact": "Jane Smith - JavaScript Appreciation Society",
        "weeknumber": 52,
        "description": "Rm. Closed",
        "start_time": "2017-10-25T23:00:00+01:00",
        "roomid": "G08",
        "siteid": "013",
        "roomname": "Main Quad",
        "slotid": 907872,
        "end_time": "2017-08-27T23:30:00+01:00"
      },

      {
        "phone": None,
        "contact": "Jane Smith - Walking Football Club",
        "weeknumber": 52,
        "description": "Rm. Closed",
        "start_time": "2017-10-15T07:00:00+01:00",
        "roomid": "G08",
        "siteid": "013",
        "roomname": "Wilkins Garden Room",
        "slotid": 907872,
        "end_time": "2017-08-27T23:30:00+01:00"
      }
    ]
  }
}

requests.post("https://a6bdcce2.ngrok.io", json=body)