module.exports = function(app){//funcao em que busca o app exportado pelo module
	app.get('/formulario_inclusao_noticia',(req,res) =>{ //busca a conexao e pega a rota da pasta e inclui uma funcao de requisicao e respostas
		res.render('admin/form_add_noticia', {validacao: {}, noticia: {}});//renderiza o ejs da rota admim
	});
	app.post('/noticias/salvar',(req, res) => {//busca o app e cria um metodo para postar buscando a rota e executando uma funcao de requisicao e resposta
		//console.log("chegou na rota")
		app.app.controllers.admin.noticias_salvar(app, req, res); //busca o metodo da rota de noticias_salvar
	});
}