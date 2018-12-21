DROP DATABASE IF EXISTS bamazon;

CREATE DATABASE bamazon;

USE bamazon;

CREATE TABLE products (
  item_id INT NOT NULL AUTO_INCREMENT,
  product_name VARCHAR(45) NOT NULL,
  department_name VARCHAR(30) NOT NULL,
  price DECIMAL(10,2) NULL,
  stock_quantity INTEGER(10),


  PRIMARY KEY (item_id)
);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ('iPad Pro','electronics',1200,10),
('go pro','electronics',800,3),
('fridge','kitchen',499.99,2),
('Instant Pot','kitchen',649.99,5),
('Braun Electric Shaver','beauty',199.99,0),
('Philips Sonicare Electric Toothbrush','beauty',199.99,5),
('Quadcopter','toys',79.99,2),
('Rubic Cube','toys',16.99,7),
('Echo dot','electronics',39.99,4),
('The Lord of The Rings','books',39.99,3);



