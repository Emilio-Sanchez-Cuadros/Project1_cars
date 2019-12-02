CREATE database cars;

use cars;

CREATE TABLE brand(
	brand_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    name varchar(50) NOT NULL,
    logo varchar(450)
);

CREATE TABLE model (
	model_id INTEGER PRIMARY KEY NOT NULL AUTO_INCREMENT,
    brand_id INT NOT NULL,
    model varchar(10),
    photo varchar(450),
    year varchar(4),
    kms varchar(10),
    price varchar(10),
    country varchar(50),
    description varchar(450),
    CONSTRAINT fk_brand_1 FOREIGN KEY (brand_id)
		REFERENCES brand(brand_id)
        ON DELETE NO ACTION ON UPDATE NO ACTION
);