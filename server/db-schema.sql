CREATE TABLE users (
    id int NOT NULL AUTO_INCREMENT PRIMARY KEY,
    name varchar(255) NOT NULL,
    email varchar(255) NOT NULL,
    companyName varchar(255) NOT NULL,
    companyCatchPhrase varchar(255) NOT NULL
);

INSERT INTO users (name, email, companyName, companyCatchPhrase) VALUES (?, ?, ?, ?); 
