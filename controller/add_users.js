const knex = require('../helpers/knex');

module.exports = function (app) {

   
    app.get(function (req, res, next) {

        res.header('Access-Control-Allow-Origin', '*');
        res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
        res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

        if ("OPTIONS" === req.method) {
            res.sendStatus(200)

        } else {
            next();
        }

    })

    app.post('/addusers', async function (req, res) {
        console.log(JSON.stringify(req.body));
        try {

            const result = await knex("public.users")
                .insert(
                    {
                        name:req.body.name, 
                        gender:req.body.gender,
                        email: req.body.email,
                        password:req.body.password 

                     
                    
                 })
                .returning('*');

            console.log(`result ${JSON.stringify(result)}`);
            res
                .sendStatus(200)
                .send(result);

        } catch (error) {

            console.error(error);
        }

    })

}