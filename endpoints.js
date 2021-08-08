const express = require('express')
const app = express()
const port = 3000
var bodyParser = require('body-parser')

const module_js = require('./module.js');

app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

//we're used as callbacks


/*

add_block_to_chain('localhost', '/suyash', '&Ilike=3&Istuff=4','GET')

curl localhost:3000/

curl localhost:3000/api/v1.0/getVars/prevBlock

curl localhost:3000/api/v1.0/getVars/blockchain

curl -X POST localhost:3000/api/v1.0/addBlock -H 'Content-Type: application/json' -d '{ "ip": "localhost:3500", "api_endpt": "/suyashSucks", "query_string": "&IlikePie=sdsd&hello=me", "method_type": "GET", "status_code": 200}'
*/

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/api/v1.0/getVars/prevBlock', (req, res) => {
  res.send(JSON.parse(localStorage.getItem("prev_block")));
})

app.get('/api/v1.0/getVars/blockchain', (req, res) => {
  res.send(JSON.parse(localStorage.getItem("blockchain")));
})

app.post('/api/v1.0/fakePost',(req, res) => {
	var user_name = req.body.username;
	var password = req.body.password;
	console.log(user_name+ password);
	res.end("yes");
});

app.post('/api/v1.0/addBlock',(req, res) => {
	var request_body = req.body;
	var ip = request_body.ip;
	var api_endpt = request_body.api_endpt;
	var query_string = request_body.query_string;
	var method_type = request_body.method_type;
	var status_code = request_body.status_code;
	module_js.add_block_to_chain(ip, api_endpt, query_string, method_type, status_code);

	//make method call to add_block_to_chain here
	res.end("yes");
});


app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})