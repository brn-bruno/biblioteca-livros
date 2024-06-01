CREATE SCHEMA `biblioteca` DEFAULT CHARACTER SET utf8 COLLATE utf8_unicode_ci
;

USE biblioteca
;

CREATE TABLE livros (
    id INT AUTO_INCREMENT,
    titulo VARCHAR(250),
    num_paginas INT,
    isbn VARCHAR(80),
    editora VARCHAR(250)
    data_criacao DATETIME DEFAULT CURRENT_TIMESTAMP,
    data_atualizacao DATETIME DEFAULT CURRENT_TIMESTAMP ON UPDATE CURRENT_TIMESTAMP,
    PRIMARY KEY (id)
)
;

INSERT INTO livros (titulo, num_paginas, isbn, editora) 
VALUES ('Expressões Regulares - Uma abordagem divertida 5ª Edição', 248, '978-85-7522-474-8', 'Novatec')
        ,('Estruturas de Dados e Algoritmos com JavaScript', 408, '978-85-7522-693-3', 'Novatec')
;

SELECT *
FROM livros
;