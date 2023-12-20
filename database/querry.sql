-- CRIANDO CONSULTAS SQL


--Selecionar todos os filmes com detalhes de diretores e artistas:

SELECT Filmes.Nome, Diretor.Nome AS Diretor, Artista.Nome AS Artista
FROM Filmes
JOIN Diretor ON Filmes.Diretor_ID = Diretor.ID
JOIN FilmeArtista ON Filmes.ID = FilmeArtista.Filme_ID
JOIN Artista ON FilmeArtista.Artista_ID = Artista.ID;

--Selecionar todos os filmes com seus gêneros:

SELECT Filmes.Nome, Genero.Genero
FROM Filmes
JOIN Genero ON Filmes.Genero_ID = Genero.ID;


--Selecionar clientes ordenados por nome:

SELECT * FROM Clientes
ORDER BY Nome, Sobrenome;


--Selecionar clientes e seus dados bancários:

SELECT c.*, db.NumeroCartao, db.NomeCartao, db.DataVencimento, db.NumeroValidacao, db.TipoCartao
FROM Clientes c
JOIN DadosBanc db ON c.ClienteID = db.ID_Cliente;