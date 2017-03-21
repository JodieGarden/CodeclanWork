DROP TABLE jedi;

CREATE TABLE jedi (
id SERIAL8, 
name VARCHAR  (255),
age INT2,
darkside BOOLEAN
);

INSERT INTO jedi (name, age, darkside) VALUES ('Luke', 21, false);

INSERT INTO jedi (name, age, darkside) VALUES ('Vader', 100, true);

INSERT INTO jedi (name, age) VALUES ('Obiwan', 33);

INSERT INTO jedi (name, age, darkside) VALUES ('Anakin', 22, false);

UPDATE jedi SET darkside = true;

UPDATE jedi SET darkside = false WHERE name = 'Luke' OR name = 'Obiwan';

UPDATE jedi SET age = 23, darkside = true WHERE name = 'Anakin';

-- UPDATE jedi SET darkside = true WHERE name = 'Anakin';

DELETE FROM jedi WHERE name = 'Luke';

INSERT INTO  jedi (name, age, darkside) VALUES ('Obiwan', 32, false);

UPDATE jedi SET age = 33 WHERE name = 'Obiwan' AND age = 32;