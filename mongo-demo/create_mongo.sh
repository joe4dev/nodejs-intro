#!/usr/bin/env sh

mongo animals --eval "db.createCollection('mammals')"
mongo animals --eval "db.mammals.insert([{name: 'goat'},{name: 'monkey', comment: 'MyMonkey'}])"
