DROP DATABASE IF EXISTS burgers_db;

CREATE DATABASE burgers_db;

USE burgers;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(75) NOT NULL,
    createdAt TIMESTAMP NOT NULL,
	devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);

SELECT * FROM burgers;