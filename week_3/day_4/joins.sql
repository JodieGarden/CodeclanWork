-- -- SELECT l.colour FROM lightsabers l;
-- -- first declaration is left table, second is right


-- SELECT j.name, l.colour, l.hilt_metal FROM jedi j
-- INNER JOIN lightsabers l
-- ON j.id = l.owner_id;


SELECT v.name AS "Victim", z.name AS "Zombie", b.infected_on AS "Date infected" FROM victims v
INNER JOIN bitings b 
ON v.id = b.victim_id
INNER JOIN zombies z
ON z.id = b.zombie_id;