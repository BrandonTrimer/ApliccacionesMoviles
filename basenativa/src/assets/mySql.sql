DROP TABLE IF EXISTS autor;
DROP TABLE IF EXISTS obra;

CREATE TABLE IF NOT EXISTS autor(id INTEGER PRIMARY KEY AUTOINCREMENT, nombre TEXT, genero TEXT, img TEXT);
INSERT or IGNORE INTO autor VALUES (1, 'Isabel Allende', 'novela', 'https://lgfstatic.com/2921/conversions/frases-isabel-allende-large.jpg');
INSERT or IGNORE INTO autor VALUES (2, 'Laura Gallego', 'novela', 'https://m1.paperblog.com/i/340/3401769/autora-32-laura-gallego-garcia-L-uUktRU.jpeg');
INSERT or IGNORE INTO autor VALUES (3, 'Carlos Cuatemoc', 'autoayuda', 'https://pbs.twimg.com/profile_images/623143767000813568/Vjh3dgr3.jpg');

CREATE TABLE IF NOT EXISTS obra(id INTEGER PRIMARY KEY AUTOINCREMENT, titulo TEXT, autorId INTEGER);
INSERT or IGNORE INTO obra(id, titulo, autorId) VALUES (1, 'La casa de los espiritus', 1);
INSERT or IGNORE INTO obra(id, titulo, autorId) VALUES (2, 'Inés del alma mía', 1);
INSERT or IGNORE INTO obra(id, titulo, autorId) VALUES (3, 'Donde los árboles cantan', 2);