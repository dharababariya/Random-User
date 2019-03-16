const request = require('request');
const pagination = require('pagination');


module.exports = function (app) {

    //get user
    app.get('/', (req, res) => {

        request('https://randomuser.me/api/', function (error, response, body) {

            if (!error && response.statusCode == 200) {

                return res.send(body);
            }
        })
    })
    //paginations
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
    //sorting

    app.get('/sorting', (req, res) => {
        request('https://randomuser.me/api/', function (error, response, body) {
            

        })
        
    })
    

}