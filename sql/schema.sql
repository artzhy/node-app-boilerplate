\connect pgdatabase

--
-- PostgreSQL database schema
--
-- Dumped from database version 9.5.5

set statement_timeout = 0;
set lock_timeout = 0;
set client_encoding = 'UTF8';
set standard_conforming_strings = on;
set check_function_bodies = false;
set client_min_messages = warning;
set row_security = off;

set role root;

create table if not exists users (
	id bigserial primary key,
	login text not null,
	email text not null,
	password text not null,
	status smallint not null default 0,
	roles text[],
	created_at timestamp with time zone not null
);



create table if not exists roles (
	id smallserial primary key,
	parent_id smallint,
	name text not null default 'root',
  created_at timestamp with time zone not null
);
