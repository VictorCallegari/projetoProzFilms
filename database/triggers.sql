-- CRIANDO FUNÇÕES E TRIGGERS

--Atualiza automaticamente a data de modificação sempre que uma linha na tabela Filmes é atualizada:

-- Criar a função para a trigger
CREATE OR REPLACE FUNCTION atualizar_data_modificacao()
RETURNS TRIGGER AS $$
BEGIN
    NEW.data_modificacao := NOW();
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Criar a trigger
CREATE TRIGGER trig_atualizar_data_modificacao
BEFORE UPDATE ON Filmes
FOR EACH ROW
EXECUTE FUNCTION atualizar_data_modificacao();

--Trigger para Validar Dados em Inserções na Tabela Clientes


-- Criar a função para a trigger
CREATE OR REPLACE FUNCTION validar_email()
RETURNS TRIGGER AS $$
BEGIN
    IF NEW.email !~ '^[A-Za-z0-9._%+-]+@[A-Za-z0-9.-]+\.[A-Z|a-z]{2,}$' THEN
        RAISE EXCEPTION 'Formato de e-mail inválido!';
    END IF;
    RETURN NEW;
END;
$$ LANGUAGE plpgsql;

-- Criar a trigger
CREATE TRIGGER trig_validar_email
BEFORE INSERT OR UPDATE ON Clientes
FOR EACH ROW
EXECUTE FUNCTION validar_email();


--Trigger para Evitar Exclusão de Diretores Relacionados a Filmes

-- Criar a função PL/pgSQL para a trigger

CREATE OR REPLACE FUNCTION impedir_exclusao_diretor()
RETURNS TRIGGER AS $$
BEGIN
    IF EXISTS (SELECT 1 FROM Filmes WHERE Diretor_ID = OLD.ID) THEN
        RAISE EXCEPTION 'Não é possível excluir este diretor, pois ele está associado a filmes!';
    END IF;
    RETURN OLD;
END;
$$ LANGUAGE plpgsql;

-- Criar a trigger
CREATE TRIGGER trig_impedir_exclusao_diretor
BEFORE DELETE ON Diretor
FOR EACH ROW
EXECUTE FUNCTION impedir_exclusao_diretor();