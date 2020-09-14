DROP DATABASE IF EXISTS burgers_db

CREATE DATABASE burger_db

USE burgers_db

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(20) NULL,
    devoured boolean,
    PRIMARY KEY (id)
);

SELECT * FROM burgers;
