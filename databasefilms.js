const filmes = new Map();


//Função para criar um filme
function adicionarFilme(id, tipo, nome, img, direcao, roteirista, artista, trailer, sinopse) {

    if (filmes.has(id)) { //confere se o filme já foi adicionado
        return "ID de filme existente!";
    }

    const filme = { //objeto onde as propriedades recebem os parâmetros
        id: id,
        tipo: tipo,
        nome: nome,
        img: img,
        direcao: direcao,
        roteirista: roteirista,
        artista: artista,
        trailer: trailer,
        sinopse: sinopse,
    };

    filmes.set(id, filme); // settando o parâmetro id e o objeto filme
    return "filme adicionado com sucesso!";
}


//Função para verificar se o filme existe pelo nome
function verificarFilme(nome) {
    for (const [id, filme] of filmes.entries()) {
        if (filme.nome === nome) {
            return `Filme encontrado! ID: ${id}`;
        }
    }
    return "Filme não encontrado";
}


//Função para Deletar através do ID
function deletarFilme(id) { // função que servirá para deletar o filme
    if (filmes.delete(id)) {

        return "filme deletado com sucesso!";
    }
}

//Fução para pesquisar toda a lista
function imprimirLista() { //função para pesquisar toda a lista pelo id e pelo nome
    let lista = "";

    for (const [id, filme] of filmes.entries()) { // retorna um objeto iterável que consiste em pares chave-valor
        lista += ` ID: ${id} - Nome: ${filme.nome}\n`;
    }

    return lista;
}



////////////////////////////////////////// CHAMANDO AS FUNÇÕES \\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\\
adicionarFilme("001", "acao", "As Marvels", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/sPmmgdmApfjX9x2mg02bo0aUOU9.jpg", "Nia DaCosta", "Megan McDonnell", "Brie Larson Teyonah Parris Iman Vallani", "https://www.youtube.com/embed/GjSmKaCSCPw?si=5tiHLxlA935lQV-w", "Quando suas obrigações a levam a uma fenda espacial anômala ligada a um revolucionário Kree, os poderes de Carol Danvers, a Capitã Marvel, se entrelaçam aos de Kamala Khan, a Ms. Marvel, e aos da sobrinha de Carol, astronauta da S.A.B.E.R., Capitã Monica Rambeau. Juntas, esse trio improvável deve ser unir para salvar o universo como 'As Marvels'.");
adicionarFilme("002", "acao", "Velozes & Furiosos 10", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/wDWAA5QApz5L5BKfFaaj8HJCAQM.jpg", "Louis Leterrier", "Zach Dean", "Vin Diesel Tyrese Gibson John Cena", "https://www.youtube.com/embed/ByGA7aWSxW4?si=WavZvpPuGOHn75sc", "Ao longo de muitas missões e lutando contra todos os obstáculos impossíveis, Dom Toretto (Vin Diesel) e sua família foram mais espertos, mais furiosos e mais rápidos do que todos os inimigos em seu caminho. Agora, eles enfrentam o seu oponente mais letal: uma ameaça terrível das sombras do passado, alimentada por sede de vingança e determinada a destruir esta família.");
adicionarFilme("003", "acao", "Besouro Azul", "https://image.tmdb.org/t/p/w600_and_h900_bestv2/y5sdkgO4IJMTnkjh9PG7kREPWrP.jpg", "Ángel Manuel Soto", "Gareth Dunnet-Alcocer", "Xolo Mariduena Bruna Marquezine" , "https://www.youtube.com/embed/IZw2slPIoGs?si=YiYEqdwnpn73n8Mm", "Jaime Reyes, um adolescente de origem mexicana que encontra um artefato alienígena que lhe dá um exoesqueleto mecanizado e poderes, tornando-o no Besouro Azul.");
adicionarFilme("004", "acao", "Megatubarão 2", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/klGKGITBYYyTiHrph1VDSgGULOR.jpg", "Ben Wheatley", "Steve Alten" , "Jason Statham Wu Jing", "https://www.youtube.com/embed/7Hkedrl3xeE?si=6GYz9L3Bb4z8yK1_", "Um mergulho exploratório nas profundezas do oceano de uma ousada equipe de pesquisa se transforma em caos quando uma operação de mineração malévola ameaça sua missão e os força a uma batalha de alto risco pela sobrevivência.");
adicionarFilme("005", "acao", "Resistência", "https://www.themoviedb.org/t/p/w600_and_h900_bestv2/187OBBT5oMQ2XPXgx9F8JhlycvK.jpg", "Gareth Edwards", "Gareth Edwards", "John David Madeleine Yuna", "https://www.youtube.com/embed/UmXARrHrW30?si=R_v94CQnCyG8SHQQ", "Em meio a uma futura guerra entre a raça humana e as forças da inteligência artificial, Joshua, um endurecido ex-agente das forças especiais que lamenta o desaparecimento de sua esposa, é recrutado para caçar e matar o Criador, o indescritível arquiteto da IA avançada que desenvolveu uma arma misteriosa com o poder de acabar com a guerra - e a própria humanidade.");
adicionarFilme("006", "acao", "Dezesseis Facadas", "https://www.themoviedb.org/t/p/w300_and_h450_bestv2/o5tWAiHfxEvu2z1qkJKU4gW1uPY.jpg", "Nahnatchka Khan", "David MatalonSasha", "Kiernan ShipkaOlivia HoltCharlie Gillespie", "https://www.youtube.com/embed/mYCzbELmVy4?si=k6cUg-FWnO4aFRGU", "Quando o infame 'Sweet Sixteen Killer' retorna 35 anos após sua primeira onda de assassinatos para fazer outra vítima, Jamie, de 17 anos, acidentalmente viaja de volta no tempo para 1987, determinada a deter o assassino.");

const verificarporNome = "As Marvels";
const verificacao = verificarFilme(verificarporNome);

const deletarPorID = "";// informar o id a ser deletado
const resultado = deletarFilme(deletarPorID);

const listaCompleta = imprimirLista();

export {filmes}; // exportando filmes para usar em outro código