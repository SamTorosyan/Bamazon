DROP DATABASE IF EXISTS bamazon_db;
CREATE DATABASE bamazon_db;
USE bamazon_db;

  CREATE TABLE products(
    item_id INTEGER NOT NULL AUTO_INCREMENT,
    product_name VARCHAR(100),
    department_name VARCHAR(100),
    price DECIMAL(5,2) NOT NULL,
    stock_quantity INTEGER NOT NULL,
    PRIMARY KEY (item_id)
  );

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Speck iPhone Case", "cellphone_items", 20.00, 300);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Dreaming Tree", "Liquor", 12.50, 54);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Otterbox iPhone Case", "cellphone_items", 50.00, 180);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Ray Bans", "optics", 179.99, 40);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("American Eagle Jeans", "cloths", 20.00, 50);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Nike", "shoes", 90.00, 79);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Yoga Pants", "cloths", 22.99, 43);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Fire Stick", "electronics", 34.99, 1000);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("Poster Picture Frame", "homegoods", 9.99, 15);

INSERT INTO products (product_name, department_name, price, stock_quantity)
VALUES ("JavaScript for Dummies", "books", 17.99, 10);