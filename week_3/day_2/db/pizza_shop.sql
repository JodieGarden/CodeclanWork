
DROP TABLE IF EXISTS pizza_orders;
DROP TABLE IF EXISTS customers;

CREATE TABLE customers (
id SERIAL4 primary key,
name varchar(255)
);


CREATE TABLE pizza_orders (
id serial4 primary key, 
topping varchar(255),
quantity int2,
customer_id INT4 references customers(id)
);

