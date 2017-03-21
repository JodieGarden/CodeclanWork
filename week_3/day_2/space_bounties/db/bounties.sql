DROP TABLE IF EXISTS  bounties;

CREATE TABLE space_bounties(
id SERIAL8 primary key,
name varchar(255) not null,
species varchar(255) not null,
danger_level varchar(255) not null,
favourite_weapon varchar(255) not null
);
