DROP TABLE IF EXISTS collection;

CREATE TABLE collection (id SERIAL PRIMARY KEY, title TEXT);
INSERT INTO collection (title) values('test1');
INSERT INTO collection (title) values('test2');

CREATE TABLE CHARACTER 
(
     id UUID PRIMARY KEY,
     name TEXT 
);

CREATE TABLE profile  
(
     id PRIMARY KEY

);

CREATE TABLE MAPPING -- 
(
    character_id for,
    profile_id 
)