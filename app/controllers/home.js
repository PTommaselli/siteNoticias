module.exports.index = (app, req, res) =>{ //exporta o index com os parametros do app, requisicao e resposta
	
	const connection = app.config.dbConnection();//cria uma variavel de configuracao da conexao
	let noticiasModel = new app.app.models.NoticiasDAO(connection);//faz a conexao

	noticiasModel.get5UltimasNoticias((error, result) =>{//pega o metodo do NoticiasDAO e faz a busca das 5 ultimas noticias
		res.render("home/index", {noticias: result});//renderiza na home/index	
	});
	
}

