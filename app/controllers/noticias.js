module.exports.noticias = (app, req, res) =>{// essa funcao chama o metodo do getNoticias do NoticiasDAO
	const connection = app.config.dbConnection();
	const noticiasModel = new app.app.models.NoticiasDAO(connection);

	noticiasModel.getNoticias((error, result) =>{
		res.render("noticias/noticias", {noticias: result});//renderiza o resultado do metodo na rota noticias
	});
}

module.exports.noticia = (app, req, res)=>{//essa funcao trata a noticia do banco de dados e manda para um arquivo que padronisa o formato da noticia
	const connection = app.config.dbConnection();
	const noticiasModel = new app.app.models.NoticiasDAO(connection);

	let id_noticia;
	if(req.query.id_noticia){ //tratamento de erro para caso a notica nao exista
		id_noticia = req.query;
	}else{
		res.redirect("/noticias")
		return;
	}
	noticiasModel.getNoticia(id_noticia, (error, result) =>{
		res.render("noticias/noticia", {noticia: result});//renderiza o resultado na rota noticia
	});
}

module.exports.busca = (app, req, res) =>{//essa funcao chama o metodo da busca do NoticiasDAO
	const pesquisa = req.body.pesquisa;
	const connection = app.config.dbConnection();
	const noticiasModel = new app.app.models.NoticiasDAO(connection);
	

	noticiasModel.buscaNoticias(pesquisa, (error, result) =>{
		res.render("noticias/noticias", {noticias: result});//renderiza o metodo da busca na rota noticias
	});
}


module.exports.excluir = (app, req, res) => {//essa funcao chama o metodo de excluir do NoticiasDAO
	const pesquisa = req.body.pesquisa;
	const connection = app.config.dbConnection();
	const noticiasModel = new app.app.models.NoticiasDAO(connection);

	let id_noticia;
	if(req.query.id_noticia){ //trataento de erro caso a noticia ja tenha sido excluida ou n existia
		id_noticia = req.query;
	}else{
		res.redirect("/noticias")
		return;
	}

	noticiasModel.excluirNoticia(id_noticia, (error, result) =>{
		res.redirect("/noticias");//apos a exclusao, redireciona para a rota noticias
	});
}
