module.exports = function(app){
    var listaProdutos = function(req,res){
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        produtosDAO.lista(function(erros,resultados){
            res.format({
                html: function(){
                    res.render('produtos/lista',{lista:resultados});
                },
                json: function(){
                    res.json(resultados);
                }
            });

        });
        connection.end();
    };
    
    app.get('/produtos', listaProdutos);


    app.get('/produtos/form',function(req,res){
        res.render('produtos/form');
    });

    app.get('produtos/remove',function(){
        var produtosDAO = app.infra.ProdutosDAO;
        var produto = produtosDAO.carrega(id, callback);

        if(produto){
            produtosDAO.remove(produto, callback);
        }
    });

    app.post('/produtos/salva',function(req,res){
        var produto = req.body;
        var connection = app.infra.connectionFactory();
        var produtosDAO = new app.infra.ProdutosDAO(connection);
        
        produtosDAO.salva(produto,function(erros,resultados){
            res.redirect('/produtos');
        });    
    });
}