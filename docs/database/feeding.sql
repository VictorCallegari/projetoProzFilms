--CRIANDO CLIENTES FICTICIOS:

INSERT INTO Clientes (Nome, Sobrenome, CPF, Email, DataNascimento)
VALUES 
  ('João', 'Silva', '123.456.789-01', 'joao.silva@email.com', '1990-01-15'),
  ('Maria', 'Santos', '234.567.890-12', 'maria.santos@email.com', '1985-05-22'),
  ('Carlos', 'Oliveira', '345.678.901-23', 'carlos.oliveira@email.com', '1992-11-10'),
  ('Ana', 'Souza', '456.789.012-34', 'ana.souza@email.com', '1980-07-03'),
  ('Pedro', 'Ferreira', '567.890.123-45', 'pedro.ferreira@email.com', '1995-03-28');


--CRIANDO DADOS BANCARIOS FICTICIOS:

INSERT INTO DadosBanc (NumeroCartao, NomeCartao, DataVencimento, NumeroValidacao, TipoCartao, ID_Cliente)
VALUES 
  (1234567890123456, 'João Silva', '2023-12-31', 123, 'credito', 6),
  (2345678901234567, 'Maria Santos', '2024-06-30', 456, 'debito', 7),
  (3456789012345678, 'Carlos Oliveira', '2023-08-31', 789, 'credito', 8),
  (4567890123456789, 'Ana Souza', '2024-02-28', 012, 'debito', 9),
  (5678901234567890, 'Pedro Ferreira', '2022-11-30', 345, 'credito', 10);

--CRIANDO GENEROS PARA OS FILMES:

INSERT INTO Genero (Genero)
VALUES 
  ('Ação'),
  ('Animação'),
  ('Aventura'),
  ('Romance'),
  ('Terror');


--ADICIONANDO INFORMAÇÕES DE DIREÇÃO, ROTEIRISTA E ARTISTAS:

INSERT INTO Diretor (Nome, Sobrenome)
VALUES 
  ('Nia', 'DaCosta'),
  ('Louis', 'Leterrier'),
  ('Ángel Manuel', 'Soto'),
  ('Ben', 'Wheatley'),
  ('Gareth', 'Edwards'),
  ('Nahnatchka', 'Khan');


INSERT INTO Roteirista (Nome, Sobrenome)
VALUES 
  ('Megan', 'McDonnell'),
  ('Zach', 'Dean'),
  ('Gareth', 'Dunnet-Alcocer'),
  ('Steve', 'Alten'),
  ('Gareth', 'Edwards'),
  ('David', 'MatalonSasha');


INSERT INTO Artista (Nome, Sobrenome)
VALUES 
  ('Brie', 'Larson'),
  ('Teyonah', 'Parris'),
  ('Iman', 'Vallani'),
  ('Vin', 'Diesel'),
  ('Tyrese', 'Gibson'),
  ('John', 'Cena'),
  ('Xolo', 'Mariduena'),
  ('Bruna', 'Marquezine'),
  ('Jason', 'Statham'),
  ('Wu', 'Jing'),
  ('John', 'David'),
  ('Madeleine', 'Yuna'),
  ('Kiernan', 'Shipka'),
  ('Olivia', 'Holt'),
  ('Charlie', 'Gillespie');