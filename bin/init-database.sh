#!/bin/bash

set -e

DIR=$(dirname "$0")/..

if [ "$(docker ps -a | grep database-psql)" ]; then
	exit 0
fi

docker build --tag database-psql $DIR/sql
docker run --detach --restart always --name database-psql -p 5432:5432 database-psql
