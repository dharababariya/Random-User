const knex = require('../helpers/knex');

module.exports = function (app) {

    app
        .get(function (req, res, next) {

            res.header('Access-Control-Allow-Origin', '*');
            res.header('Access-Control-Allow-Methods', 'GET, PUT, POST, DELETE, OPTIONS');
            res.header('Access-Control-Allow-Headers', 'Content-Type, Authorization, Content-Length, X-Requested-With');

            if ("OPTIONS" === req.method) {
                res.sendStatus(200)

            } else {
                next();
            }

        });

    app.post('/api/addusers', async function (req, res) {
        console.log(JSON.stringify(req.body));
        try {

            const result = await knex("public.randomuser")
                .insert({gender: req.body.gender, title: req.body.title, first: req.body.first, last: req.body.last, email: req.body.email})
                .returning('*');

            console.log(`result ${JSON.stringify(result)}`);
            res
                .sendStatus(200)
                .send(result);

        } catch (error) {

            console.error(error);
        }

    });

    app.get('/api/getusers', async(req, res) => {
        const result = await knex("public.randomuser").select("*");
        if (req.query.user_id) {
            query.where("id", "=", req.query.user_id);
        }
        if (req.query.user_id) {
            query.where("first", "=", req.query.first);
        }
        if (req.query.user_id) {
            query.where("gender", "=", req.query.gender);
        }
        const result = await query;
        return res
            .status(200)
            .send({status: 'SUCCESS', data: result});

    })
    app.put('/api/updateuser', async(req, res) => {
        const result = await knex("public.randomuser")
            .update("first", "=", req.query.name)
            .where("id", "=", req.query.user_id)
        return res
            .status(200)
            .send({status: 'SUCCESS', data: result});

    });

    app.delete('/api/deleteuser', async(req, res) => {
        const result = await knex("public.randomuser")
            .delete()
            .where("id", "=", req.query.user_id)
        return res
            .status(200)
            .send({status: 'Successfully Deteted'});
    });

}