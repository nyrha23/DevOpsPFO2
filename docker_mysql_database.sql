USE midb;
CREATE TABLE personas (
  id INT AUTO_INCREMENT PRIMARY KEY,
  nombre VARCHAR(30),
  apellido VARCHAR(30)
);

INSERT INTO personas (nombre, apellido) VALUES
('Juan', 'Lopez'),
('María', 'Garcia'),
('Lola','Menttos'),
('Marge','Simpson'),
('Marco','Polo'),
('Pedro', 'Picapiedra');

SELECT * FROM personas;