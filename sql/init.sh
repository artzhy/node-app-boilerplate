DATABASENAME='pgdatabase'
USERNAME='pguser'
PASSWORD='pgpassword'

psql -U postgres << EndOfSql

create user root with password 'root';
create user $USERNAME with password $PASSWORD;
create user reader with password 'reader';

create database $DATABASENAME template template0 owner root
	encoding 'utf8'
	lc_collate = 'en_US.UTF-8'
	lc_ctype = 'en_US.UTF-8';

\\connect $USERNAME

set role root;

grant connect on database $DATABASENAME to $USERNAME;
grant connect on database $DATABASENAME to reader;

EndOfSql
