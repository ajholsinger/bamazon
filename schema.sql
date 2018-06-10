drop database if exists bamazon_db;

CREATE database bamazon_db;

USE bamazon_db;

CREATE TABLE products(
	id integer(10)auto_increment not null,
	item_id varchar(30) not null,
	product_name varchar(100) not null,
	department_name varchar(30) not null,
    price varchar(10) not null,
    stock_quantity varchar(10) not null,
	primary key(id)
);

INSERT INTO products(item_id, product_name, department_name, price, stock_quantity)
values (0001, "Rubber Ducky", "Toys", 1.99, 300);

insert into products(item_id, product_name, department_name, price, stock_quantity)
values(0002, "Toothbrush", "Bathroom", 2.99, 300);

insert into products(item_id, product_name, department_name, price, stock_quantity)
values(0003, "Plates", "Kitchen", 15.99, 300);

insert into products(item_id, product_name, department_name, price, stock_quantity)
values(0004, "Plastic Knives", "Kitchen", 4.99, 300);

insert into products(item_id, product_name, department_name, price, stock_quantity)
values(0005, "Xbox One", "Entertainment", 299.99, 200);

insert into products(item_id, product_name, department_name, price, stock_quantity)
values(0006, "Playstation 4", "Entertainment", 299.99, 200);

insert into products(item_id, product_name, department_name, price, stock_quantity)
values(0007, "Hammer", "Tools", 19.99, 300);

insert into products(item_id, product_name, department_name, price, stock_quantity)
values(0008, "Callaway Chrome Soft", "Sports", 44.99, 300);

insert into products(item_id, product_name, department_name, price, stock_quantity)
values(0009, "Dove Men's Shampoo and Conditioner 2in1", "Bathroom", 11.99, 300);

insert into products(item_id, product_name, department_name, price, stock_quantity)
values(0010, "LG 4k OLED TV Display 75inch", "Electronics", 399.99, 200);

SELECT * FROM products;
