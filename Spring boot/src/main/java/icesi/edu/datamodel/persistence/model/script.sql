-- Creación de las tablas
CREATE TABLE Author (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    name VARCHAR(255),
    nacionality VARCHAR(255)
);

CREATE TABLE Book (
    id BIGINT AUTO_INCREMENT PRIMARY KEY,
    title VARCHAR(255),
    publicationDate DATE,
    author_id BIGINT,
    FOREIGN KEY (author_id) REFERENCES Author(id)
);

-- Insertando datos iniciales en las tablas
-- Autores
INSERT INTO Author (name, nacionality) VALUES ('Suzanne Collins', 'Americana');
INSERT INTO Author (name, nacionality) VALUES ('James Clear', 'Americano');
INSERT INTO Author (name, nacionality) VALUES ('C.S. Lewis', 'Britanico');
INSERT INTO Author (name, nacionality) VALUES ('Gabriel Garcia Marquez', 'Colombiano papa');

-- Libros
INSERT INTO Book (title, publicationDate, author_id) VALUES ('The Hunger Games', '2008-09-14', 1);
INSERT INTO Book (title, publicationDate, author_id) VALUES ('Atomic Habits', '2018-10-16', 2);
INSERT INTO Book (title, publicationDate, author_id) VALUES ('The Chronicles of Narnia', '1950-10-16', 3);
INSERT INTO Book (title, publicationDate, author_id) VALUES ('Cien Años de Soledad', '1967-05-30', 4);