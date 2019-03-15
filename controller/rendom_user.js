const request = require('request');

module.exports = function(app){
    app.get('/',(req,res)=>{

        request('https://randomuser.me/api/', function(error , response,body){

         if(!error && response.statusCode == 200){
             return res.send(body);
         }
        })

    })

}