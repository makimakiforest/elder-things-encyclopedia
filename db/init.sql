DROP TABLE IF EXISTS collection;

CREATE TABLE collection (id SERIAL PRIMARY KEY, title TEXT);
INSERT INTO collection (title) values('test1');
INSERT INTO collection (title) values('test2');