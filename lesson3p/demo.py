a = 60

if a > 40:
    print("a is greater than 40")
    if a/40 == 2:
        print("a is exactly 80")
elif a > 50:
    print("a is less than 50")
    if a == 120:
        print("a is exactly 60")
    else:
        print("opps")

elif a > 50:
    print("a is less than 50")
else:
    print(a*20)
    print("a is not greater than 40")   

import datetime

currentime = datetime.datetime.now()

print(currentime)

import calendar
print(calendar.calendar(2026))
