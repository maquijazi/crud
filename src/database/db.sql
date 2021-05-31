-- creating database
CREATE DATABASE crud;

-- using database
use crud;

-- creating table

CREATE TABLE customer(
    id INT(6) UNSIGNED AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(50) NOT NULL,
    adress VARCHAR(100) NOT NULL,
    phone VARCHAR(15)
);

-- tp show all tables
SHOW TABLES;

-- to describe table

describe customer;