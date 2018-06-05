DROP DATABASE IF EXISTS users;
CREATE DATABASE users;
USE users;

CREATE TABLE activity (
	item_id INTEGER AUTO_INCREMENT NOT NULL,
	Category VARCHAR(40) NOT NULL,
	Activity VARCHAR(40) NOT NULL,
    Price INTEGER(10) NOT NULL,
    Description VARCHAR(500) NOT NULL,
	Rating INTEGER(10) NOT NULL,
	primary key (item_id)
);

-- INSERT INTO doTable(Category, Activity, Price, Description, Rating)
-- VALUES ("Outdoor", "Riding", 200, "xxxxxxx", 6),
--     ("Outdoor", "Shopping", 100, "xxxxxxx", 8),
--         ("Outdoor", "Eating", 200, "xxxxxxx", 6);



CREATE TABLE userInfo (
	user_id INTEGER AUTO_INCREMENT NOT NULL,
	Email VARCHAR(40) NOT NULL,
	Password VARCHAR(40) NOT NULL,
    FirstName VARCHAR(20) NOT NULL,
    LastName VARCHAR(20) NOT NULL,
	primary key (item_id)
);