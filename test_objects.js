const objects = require('./objects.js');

const ex_ip = "localhost:3000";
const ex_api_endpt="/api/v1.0/getThis";
//some additional testing for Post?
const ex_query_string = "&this=me&blah=blooh";
const ex_method_type = "GET";
const ex_prev_block = null;
const ex_next_block = null;

//global vars for prev_block

//Stack for reverse traversal

//Genesis Step
var genesis_block = new objects.Block(ex_ip, ex_api_endpt, ex_query_string, ex_method_type, null, null);
genesis_block.print_obj();
var curr_blockchain = new objects.Blockchain(genesis_block, null, 1);
curr_blockchain.print_obj();

console.log("----------------------------------");
console.log("-----------SUYASH+SUCKS-----------");
console.log("----------------------------------");

//each subsequent step
var second_block = new objects.Block(ex_ip, ex_api_endpt, ex_query_string, ex_method_type, genesis_block, null);
second_block.print_obj();
curr_blockchain.add_block(second_block)
curr_blockchain.print_obj();

console.log("----------------------------------");
console.log("-----------SUYASH+SUCKS-----------");
console.log("----------------------------------");

//make new block, then force previous block to connect (next) to new block
var third_block = new objects.Block(ex_ip, ex_api_endpt, ex_query_string, ex_method_type, second_block, null);
third_block.print_obj();
curr_blockchain.add_block(third_block)
curr_blockchain.print_obj();

console.log("----------------------------------");
console.log("-----------SUYASH+SUCKS-----------");
console.log("----------------------------------");
