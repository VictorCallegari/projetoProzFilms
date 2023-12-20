--ADICIONANDO FILMES 

INSERT INTO Filmes (Nome, Imagem, Sinopse, Trailer, Diretor_ID, Roteirista_ID, Genero_ID)
VALUES 
  ('As Marvels', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sPmmgdmApfjX9x2mg02bo0aUOU9.jpg', 'Quando suas obrigações a levam a uma fenda espacial anômala ligada a um revolucionário Kree, os poderes de Carol Danvers, a Capitã Marvel, se entrelaçam aos de Kamala Khan, a Ms. Marvel, e aos da sobrinha de Carol, astronauta da S.A.B.E.R., Capitã Monica Rambeau. Juntas, esse trio improvável deve se unir para salvar o universo como ''As Marvels''.', 'https://www.youtube.com/embed/GjSmKaCSCPw?si=5tiHLxlA935lQV-w', 1, 1, 1);

INSERT INTO Filmes (Nome, Imagem, Sinopse, Trailer, Diretor_ID, Roteirista_ID, Genero_ID)
VALUES 
  ('Velozes & Furiosos 10', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wDWAA5QApz5L5BKfFaaj8HJCAQM.jpg', 'Ao longo de muitas missões e lutando contra todos os obstáculos impossíveis, Dom Toretto (Vin Diesel) e sua família foram mais espertos, mais furiosos e mais rápidos do que todos os inimigos em seu caminho. Agora, eles enfrentam o seu oponente mais letal: uma ameaça terrível das sombras do passado, alimentada por sede de vingança e determinada a destruir esta família.', 'https://www.youtube.com/embed/ByGA7aWSxW4?si=WavZvpPuGOHn75sc', 2, 2, 1);

INSERT INTO Filmes (Nome, Imagem, Sinopse, Trailer, Diretor_ID, Roteirista_ID, Genero_ID)
VALUES 
  ('Besouro Azul', 'https://image.tmdb.org/t/p/w600_and_h900_bestv2/y5sdkgO4IJMTnkjh9PG7kREPWrP.jpg', 'Jaime Reyes, um adolescente de origem mexicana que encontra um artefato alienígena que lhe dá um exoesqueleto mecanizado e poderes, tornando-o no Besouro Azul.', 'https://www.youtube.com/embed/IZw2slPIoGs?si=YiYEqdwnpn73n8Mm', 3, 3, 1);

INSERT INTO Filmes (Nome, Imagem, Sinopse, Trailer, Diretor_ID, Roteirista_ID, Genero_ID)
VALUES 
  ('Megatubarão 2', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/klGKGITBYYyTiHrph1VDSgGULOR.jpg', 'Um mergulho exploratório nas profundezas do oceano de uma ousada equipe de pesquisa se transforma em caos quando uma operação de mineração malévola ameaça sua missão e os força a uma batalha de alto risco pela sobrevivência.', 'https://www.youtube.com/embed/7Hkedrl3xeE?si=6GYz9L3Bb4z8yK1_', 4, 4, 1);

INSERT INTO Filmes (Nome, Imagem, Sinopse, Trailer, Diretor_ID, Roteirista_ID, Genero_ID)
VALUES 
  ('Resistência', 'https://www.themoviedb.org/t/p/w600_and_h900_bestv2/187OBBT5oMQ2XPXgx9F8JhlycvK.jpg', 'Em meio a uma futura guerra entre a raça humana e as forças da inteligência artificial, Joshua, um endurecido ex-agente das forças especiais que lamenta o desaparecimento de sua esposa, é recrutado para caçar e matar o Criador, o indescritível arquiteto da IA avançada que desenvolveu uma arma misteriosa com o poder de acabar com a guerra - e a própria humanidade.', 'https://www.youtube.com/embed/UmXARrHrW30?si=R_v94CQnCyG8SHQQ', 5, 5, 1);

INSERT INTO Filmes (Nome, Imagem, Sinopse, Trailer, Diretor_ID, Roteirista_ID, Genero_ID)
VALUES 
  ('Dezesseis Facadas', 'https://www.themoviedb.org/t/p/w300_and_h450_bestv2/o5tWAiHfxEvu2z1qkJKU4gW1uPY.jpg', 'Quando o infame ''Sweet Sixteen Killer'' retorna 35 anos após sua primeira onda de assassinatos para fazer outra vítima, Jamie, de 17 anos, acidentalmente viaja de volta no tempo para 1987, determinada a deter o assassino.', 'https://www.youtube.com/embed/mYCzbELmVy4?si=k6cUg-FWnO4aFRGU', 6, 6, 1);


--Como os filmes podem ter vários artistas temos que modelar essa relação muitos-para-muitos entre as tabelas Filmes e Artista. Isso foi feito por meio de uma tabela de junção:

CREATE TABLE FilmeArtista (
    Filme_ID INT,
    Artista_ID INT,
    PRIMARY KEY (Filme_ID, Artista_ID),
    FOREIGN KEY (Filme_ID) REFERENCES Filmes(ID),
    FOREIGN KEY (Artista_ID) REFERENCES Artista(ID)
);


INSERT INTO FilmeArtista (Filme_ID, Artista_ID) VALUES
  (4, 1), -- As Marvels - Brie Larson
  (4, 2), -- As Marvels - Teyonah Parris
  (4, 3), -- As Marvels - Iman Vallani
  (5, 4), -- Velozes & Furiosos 10 - Vin Diesel
  (5, 5), -- Velozes & Furiosos 10 - Tyrese Gibson
  (5, 6), -- Velozes & Furiosos 10 - John Cena
  (6, 7), -- Besouro Azul - Xolo Mariduena
  (6, 8), -- Besouro Azul - Bruna Marquezine
  (7, 9), -- Megatubarão 2 - Jason Statham
  (7, 10), -- Megatubarão 2 - Wu Jing
  (8, 11), -- Resistência - John David
  (8, 12), -- Resistência - Madeleine Yuna
  (9, 13), -- Dezesseis Facadas - Kiernan Shipka
  (9, 14), -- Dezesseis Facadas - Olivia Holt
  (9, 15); -- Dezesseis Facadas - Charlie Gillespie