from datetime import datetime


def epoch(time_string):
    return (datetime.strptime(time_string[:-6], "%Y-%m-%dT%H:%M:%S") - datetime(2017, 1, 1)).total_seconds()


def is_after_today(time_string):
    return 0. < ((datetime.strptime(time_string[:-6], "%Y-%m-%dT%H:%M:%S") - datetime.today()).total_seconds())


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
    print(is_after_today("2018-08-27T23:00:00+01:00"))
    dtsecs = (datetime.strptime("2017-08-27T23:00:00+01:00"[:-6], "%Y-%m-%dT%H:%M:%S") - datetime.today()).total_seconds()
    print(dtsecs)
    print(bool(int(dtsecs)))
