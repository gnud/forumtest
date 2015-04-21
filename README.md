# APP_NAME - (TODO: needs a catchy name)

## Goal
An attempt to revolutionise the forum platform.

## Technologies
* Node.js
* NOSQL database, maybe mongodb

## Platform Plans
* Forum alike system - categories, posts, answers, search
* Advanced AJAX or WebSockets messaging system that monitors for post updates
* Fully automated layout refresh i.e messaging system command that will update
the page from ground up if needed
* Maintains mode, will disable most or all features
* Each section of the platform will be splited in several apps, based on a feature
* Mobile ready
* Advanced search engine using FTS (full text search)

## Interfaces
* Web
* Mobile
* Desktop
* Cli (curses library maybe, GNU/Linux / MacOS only)
* Command line tool

## Development
### Ubuntu
In the root directory of the project:
mkdir data # For primary server
mkdir data2 # For sharding server1
mkdir dataconfig # For sharding config server

Note, that the database directory location will change.

install mongodb ...

Single database (without horizontal scaling):
cd {to the root of the project}
mongod --dbpath data --port 9999


## Reason for the project
Because I'm felling bored :P.