CREATE DATABASE example_crud_with_java_intellij;

USE example_crud_with_java_intellij;

CREATE TABLE user (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    first_name VARCHAR(255),
    last_name VARCHAR(255),
    email VARCHAR(255)
);

select * from user;

