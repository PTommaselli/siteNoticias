class NoticiasDAO {//cria-se uma classe
    constructor(connection){//constroi uma conexao
        this._connection = connection;//cria uma variavel para conexao
    }

    getNoticias(callback){//metodo de pegar todas as noticias
        this._connection.query('select * from noticias order by data_criacao desc', callback);//insere essa string para filtar dados

    }

    getNoticia(id_noticia, callback){//metodo para selecianar uma notica
        this._connection.query('select * from noticias where id_noticia = ' + id_noticia.id_noticia, callback);//insere essa string para filtar dados

    }

    salvarNoticia(noticia,callback){//metodo para salvar uma notica        
        this._connection.query('insert into noticias set ?', noticia, callback);//insere essa string para filtar dados

    }

    get5UltimasNoticias(callback){//motodo para buscar as 5 ultimas noticias
        this._connection.query('select * from noticias order by data_criacao desc limit 5', callback);

    }

    buscaNoticias(pesquisa, callback){//metodo de pegar todas as noticias
        this._connection.query("select * from noticias where titulo like '%" + pesquisa + "%' order by data_criacao desc", callback);//insere essa string para filtar dados

    }

     excluirNoticia(id_noticia, callback){//metodo para excluir uma notica
        this._connection.query('delete from noticias where id_noticia = ' + id_noticia.id_noticia, callback);//insere essa string para deletar dados

    }
}

module.exports = function(){//executa a classe
    return NoticiasDAO;// retorna a classe
}