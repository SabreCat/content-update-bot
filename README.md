# Habitica Content Bot for Twitter

Node.js Twitter bot that spits out announcements of goofy hypothetical [Habitica](https://github.com/HabitRPG/habitica) content.

Currently just posts once, as a proof of concept; you can put it in a crontab for repeated tweeting.

## Setup

Copy config.json.example to config.json and fill in the consumer key, consumer secret, access token, and access token secret for the Twitter account you want your bot to post to.

Then add "node /path/to/bot.js" to your crontab on the desired schedule, and off you go.
