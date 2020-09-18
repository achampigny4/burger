USE y3a9r3nap7da1f9o;

CREATE TABLE burgers (
    id INT NOT NULL AUTO_INCREMENT,
    burger_name VARCHAR(75) NOT NULL,
    createdAt TIMESTAMP NOT NULL,
	 devoured BOOLEAN DEFAULT false,
    PRIMARY KEY(id)
);

SELECT * FROM burgers;