DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers_db;

CREATE TABLE burgers (
    id INT AUTO_INCREMENT,
    burger_name VARCHAR(75) NULL,
    devoured boolean,
    PRIMARY KEY(ID)
);

SELECT * FROM burgers;
