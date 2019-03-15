const request = require('request');
const pagination = require('pagination');

module.exports = function (app) {
    app.get('/', (req, res) => {

        request('https://randomuser.me/api/', function (error, response, body) {

            if (!error && response.statusCode == 200) {

                return res.send(body);
            }
        })
    })

    app.get('/paginations', (req, res) => {
       request('https://randomuser.me/api/', function (error, response, body) {

            const paginator = pagination.create('search', {
                prelink: '/',
                current: 1,
                rowsPerPage: 10,
                totalResult: 100
            });
            res.send(paginator.render());
            console.log(paginator.render());
        })
    })

    

}