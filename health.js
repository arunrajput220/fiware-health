const express = require('express')
const bodyParser = require("body-parser");
const app = express()
const port = 3002
var request = require('request');
var cors = require('cors')
app.use(bodyParser.json());
app.use(cors());
app.use(bodyParser.urlencoded({ extended: true }));

orionip = "localhost"



app.get('/fiware/contextbroker/health',function(req,res){
  var options = {
    'method': 'GET',
    'url': 'http://'+orionip+':1026/version',
    'headers': {
    }
  };
    request(options, function (error, response) {
    //  if (error) throw new Error(error);
    if (error){
      console.log(error)
      res.status(200).json({orion_status: 'Not Available'})
    }else{
      values = JSON.parse(response.body);
      console.log(values)
      res.status(200).json({orion_status: 'Available'})
    }
    });
    });


    app.get('/fiware/cygnus/health',function(req,res){

      var options = {
        'method': 'GET',
        'url': 'http://'+orionip+':5080/v1/version',
        'headers': {
        }
      };
        request(options, function (error, response) {
        //  if (error) throw new Error(error);
        if (error){
          console.log(error)
          res.status(200).json({cygnus_status: 'Not Available'})
        }else{
          values = JSON.parse(response.body);
          console.log(values)
          res.status(200).json({cygnus_status: 'Available'})
        }
        });
        });


        app.get('/fiware/keyrock/health',function(req,res){

          var options = {
            'method': 'GET',
            'url': 'http://'+orionip+':3005/version',
            'headers': {
            }
          };
            request(options, function (error, response) {
            //  if (error) throw new Error(error);
            if (error){
              console.log(error)
              res.status(200).json({keyrock_status: 'Not Available'})
            }else{
              values = JSON.parse(response.body);
              console.log(values)
              res.status(200).json({keyrock_status: 'Available'})
            }
            });
            });

            app.get('/fiware/pep_proxy/health',function(req,res){

              var options = {
                'method': 'GET',
                'url': 'http://'+orionip+':1027/version',
                'headers': {
                }
              };
                request(options, function (error, response) {
                //  if (error) throw new Error(error);
                if (error){
                  console.log(error)
                  res.status(200).json({pep_proxy_status: 'Not Available'})
                }else{
                  values = JSON.parse(response.body);
                  console.log(values)
                  res.status(200).json({pep_proxy_status: 'Available'})
                }
                });
                });

                app.get('/fiware/mongodb/health',function(req,res){

                  var options = {
                    'method': 'GET',
                    'url': 'http://'+orionip+':27017',
                    'headers': {
                    }
                  };
                    request(options, function (error, response) {
                    //  if (error) throw new Error(error);
                    if (error){
                      console.log(error)
                      res.status(200).json({mongodb_status: 'Not Available'})
                    }else{
                      values = JSON.parse(response.body);
                      console.log(values)
                      res.status(200).json({mongodb_status: 'Available'})
                    }
                    });
                    });





app.get('/', (request, response) => {
  response.json({ info: 'Fiware Health Server Running Fine' })
})


app.listen(port, () => {
  console.log(`App running on port ${port}.`)
})
