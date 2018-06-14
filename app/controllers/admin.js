module.exports.noticias_salvar = (app, req, res) =>{//busca o app e cria um metodo para postar buscando a rota e executando uma funcao de requisicao e resposta
	
	const noticia = req.body;//requisicao do body
	
	req.assert('titulo','Titilo é obrigatório').notEmpty(); //tratamento de erro para o formulario de inclusao de noticias
	req.assert('resumo','Resumo é obrigatório').notEmpty(); //tratamento de erro para o formulario de inclusao de noticias
	req.assert('resumo','Resumo dever conter entre 10 a 100 caracteres').len(10,100); //tratamento de erro para o formulario de inclusao de noticias
	req.assert('autor','Autor é obrigatório').notEmpty(); //tratamento de erro para o formulario de inclusao de noticias
	req.assert('data_noticia','Data é obrigatório').notEmpty(); //tratamento de erro para o formulario de inclusao de noticias
	req.assert('noticia','Notícia é obrigatório').notEmpty(); //tratamento de erro para o formulario de inclusao de noticias
	const erros =  req.validationErrors();

//	console.log(noticia);

	if (erros) { // tratamento de erro de validacao de envio do formulario
		res.render("admin/form_add_noticia", {validacao: erros, noticia: noticia});
		return;
	}
	let connection =  app.config.dbConnection();//cria uma variavel de configuracao da conexao

	let noticiasModel = new app.app.models.NoticiasDAO(connection);//chama a class com a conexao

	noticiasModel.salvarNoticia(noticia,function(error, result){//executa um tratamento de erro para verificar o funcionamento dos paramentros acima
		
		res.redirect('/noticias');//retorna e renderiza a rota noticias
	});	
}
