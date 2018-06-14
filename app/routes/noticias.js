module.exports = function(app){//importa uma funcao com o app

	app.get('/noticias',function(req,res){//pega a rota noticias e executa uma funcao de requisicao e resposta
		app.app.controllers.noticias.noticias(app, req, res);
	});

	app.get('/noticia',function(req,res){//pega a rota noticia e executa uma funcao de requisicao e resposta
		app.app.controllers.noticias.noticia(app, req, res);
	});

	app.post('/busca',function(req,res){//pega a rota noticias e executa uma funcao de requisicao e resposta
		app.app.controllers.noticias.busca(app, req, res);
	});

	app.get('/excluir',function(req,res){//pega a rota noticias e executa uma funcao de requisicao e resposta
		app.app.controllers.noticias.excluir(app, req, res);
	});



};