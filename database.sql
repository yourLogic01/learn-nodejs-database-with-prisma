CREATE TABLE sample (
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) engine innodb;

CREATE TABLE customers (
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    email VARCHAR(100) NOT NULL,
    phone VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),
    constraint customers_email_unique unique (email),
    constraint customers_phone_unique unique (phone)
) engine innodb;


CREATE TABLE products (
    id VARCHAR(100) NOT NULL,
    name VARCHAR(100) NOT NULL,
    price INT NOT NULL,
    stock INT NOT NULL,
    category VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) engine innodb;

select * FROM products

INSERT into products (id, name, price, stock, category) VALUES 
('P0001', 'A', 1000, 100, 'K1'),
('P0002', 'B', 2000, 200, 'K2'),
('P0003', 'C', 3000, 300, 'K3'),
('P0004', 'D', 4000, 400, 'K4'),
('P0005', 'E', 5000, 500, 'K5');

CREATE TABLE categories (
    id INT NOT NULL AUTO_INCREMENT,
    name VARCHAR(100) NOT NULL,
    PRIMARY KEY (id)
) engine innodb;

CREATE TABLE wallet (
    id VARCHAR(100) NOT NULL,
    balance INT NOT NULL,
    customer_id VARCHAR(100) NOT NULL,
    PRIMARY KEY (id),

    constraint wallet_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
    constraint wallet_customer_id_unique unique (customer_id)
) engine innodb;

SELECT * FROM wallet

CREATE TABLE comments (
    id INT NOT NULL AUTO_INCREMENT,
    customer_id VARCHAR(100) NOT NULL,
    title VARCHAR(100) NOT NULL,
    description TEXT,
    PRIMARY KEY (id),

    constraint comments_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id)
) engine innodb;

INSERT INTO comments(customer_id, title, description) VALUES
('maulana', 'Comment 1', 'Belajar NodeJS dan Prisma'),
('maulana', 'Comment 2', 'Sample comment'),
('asyifa', 'Comment 1', 'Belajar NodeJS dan Prisma asik'),
('asyifa', 'Comment 2', 'Sample comment asik');

CREATE TABLE likes (
    customer_id VARCHAR(100) NOT NULL,
    product_id VARCHAR(100) NOT NULL,
    PRIMARY KEY (customer_id, product_id),

    constraint likes_customer_id_fk FOREIGN KEY (customer_id) REFERENCES customers (id),
    constraint likes_product_id_fk FOREIGN KEY (product_id) REFERENCES products (id)
)engine innodb;
CREATE TABLE _loves (
    A VARCHAR(100) NOT NULL,
    B VARCHAR(100) NOT NULL,
    PRIMARY KEY (A, B),

    constraint customer_loves_fk FOREIGN KEY (A) REFERENCES customers (id),
    constraint product_loves_fk FOREIGN KEY (B) REFERENCES products (id)
)engine innodb;