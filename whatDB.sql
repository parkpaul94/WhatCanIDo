DROP DATABASE IF EXISTS activityDB;
CREATE DATABASE activityDB;
USE activityDB;

CREATE TABLE doTable (
	item_id INTEGER AUTO_INCREMENT NOT NULL,
	Category VARCHAR(40) NOT NULL,
	Activity VARCHAR(40) NOT NULL,
    Price INTEGER(10) NOT NULL,
    Description VARCHAR(500) NOT NULL,
	Rating INTEGER(10) NOT NULL,
	primary key (item_id)
);

INSERT INTO doTable(Category, Activity, Price, Description, Rating)
VALUES ("Outdoor", "Riding", 200, "xxxxxxx", 6),
    ("Outdoor", "Shopping", 100, "xxxxxxx", 8),
        ("Outdoor", "Eating", 200, "xxxxxxx", 6);