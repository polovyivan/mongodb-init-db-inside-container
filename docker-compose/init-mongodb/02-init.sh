#!/bin/bash

echo "########### Loading data to Mongo DB ###########"
mongoimport --jsonArray --db customer --collection customer_transaction --file /tmp/data/data.json