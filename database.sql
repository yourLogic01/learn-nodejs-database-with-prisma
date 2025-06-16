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