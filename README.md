### `Connecting the Components`

POC
 
FE
https://github.com/radityopradana1/simple-front
 
build & run:
npm install
npm start
 
<setup BE pointing in PostForm.js>
 
====================
 
BE
https://github.com/radityopradana1/node-topostgre
 
build & run:
npm install
node server.js
 
<setup allow cors from FE in server.js>
<setup DB pointing in db.js>
 
====================
 
DB
scripts:
CREATE DATABASE <db-name>;
 
CREATE TABLE people (
ID SERIAL PRIMARY KEY,
firstname VARCHAR(255),
lastname VARCHAR(255),
location VARCHAR(255));
 
test insert:
INSERT INTO people (firstname, lastname, location)
VALUES ('John', 'Doe', 'New York');
 
SELECT * FROM people