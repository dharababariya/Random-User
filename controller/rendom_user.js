const request = require('request');
const rp = require('request-promise-native');

module.exports = function (app) {

    app.get('/api/randomusers', (req, res, next) => {

        // console.log(`req params ${JSON.stringify(req.query)}`);

        const options = {
            uri: 'https://randomuser.me/api/',
            qs: {
                results: req.query.count,
                page: req.query.page,
                nat: 'us'
            },
            headers: {
                'User-Agent': 'Request-Promise'
            },
            json: true // Automatically parses the JSON string in the response
        };

        rp(options).then(function (repos) {

            console.log('User has %d repos', repos.length);

            return res
                .status(200)
                .send({
                    status: 'SUCCESS',
                    data: sortCollection(repos.results, 'email')
                });

        })
            .catch(function (err) {

                // console.error(err.message); API call failed...
                return res
                    .status(500)
                    .send({status: 'FAILURE'});

            });

    })

}

const sortCollection = (data, sort_by) => {

    return data.sort(function (a, b) {
        var nameA = a[sort_by].toUpperCase(); // ignore upper and lowercase
        var nameB = b[sort_by].toUpperCase(); // ignore upper and lowercase
        if (nameA < nameB) {
            return -1;
        }
        if (nameA > nameB) {
            return 1;
        }

        // names must be equal
        return 0;
    })
}