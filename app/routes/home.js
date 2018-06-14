module.exports = function(app){// esse arquivo tem como objetivo fazer com que o site abra na home
	app.get('/',function(req,res){//pega a rota home
		app.app.controllers.home.index(app, req, res);//renderiza a rota home
	})
}