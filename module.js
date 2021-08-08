const objects = require('./objects.js');

//Add Additional params method for block

/*
Function name: genesis_step
Purpose: Create the genesis block and create the blockchain object 
Input: all the variables needed for the block constructor 
Output: none (global variables for previous block and blockchain are updated )
*/
function genesis_step(ip, api_endpt, query_string, method_type, status_code) {
    //create genesis block (prev_block)
    prev_block = new objects.Block(ip, api_endpt, query_string, method_type, null, status_code);
    blockchain = new objects.Blockchain(prev_block, null, 1);
    return [prev_block, blockchain];
}

/* Function name: add_block
Purpose: Build a new block to be added, add it to the chain, and return newly created block 
Input: blockchain element, and all the variables needed for the block constructor 
Output: new block that was added (global variable for previous block gets updated )
*/
function add_block_to_chain(ip, api_endpt, query_string, method_type, status_code){
    var prev_block_temp_1 = JSON.parse(localStorage.getItem("prev_block"));

    var next_block_1 = new objects.Block(ip, api_endpt, query_string, method_type, prev_block_temp_1, status_code);

    var blockchain = JSON.parse(localStorage.getItem("blockchain"));

    blockchain.last_block = next_block_1;
    blockchain.num_blocks+=1;
    blockchain.last_block.prev_block = prev_block_temp_1;
    localStorage.setItem("blockchain", JSON.stringify(blockchain));

    localStorage.setItem("prev_block", JSON.stringify(next_block_1));

    return next_block_1;
}


/* Function name: latest_to_oldest_traversal 
Purpose: Traverse the entire RYOB chain from back to front and print things out in latest to oldest format 
Input: Blockchain element
Output: none (blockchain element are printed )
function latest_to_oldest_traversal(blockchain){
    let iterator = blockchain.last_block;
    while(iterator != null){
        iterator.print_obj();
        iterator = iterator.prev_block; 
    }
}
*/

/* Function name: oldest_to_latest_traversal
Purpose: Traverse the entire RYOB chain from front to back and print it out (using a stack )
Input: Blockchain element 
Output: none (blockchain elements are printed)
function oldest_to_latest_traversal(blockchain){
    let stack = []
    let iterator = blockchain.last_block
    while(iterator!= null){
        stack.unshift(iterator);
        iterator = iterator.prev_block;
    }
    for(let i = 0; i < stack.length; i++){
        stack[i].print_obj();
    }

}
*/


function setInitialVariables()
{
    // global variables
    var prev_block = null; // global variable for the previous block when creating new
    var blockchain = null; // global variable storing the blockchain
    var genesis_step_results = genesis_step(null, null, null, "GENESIS", 000);

    localStorage.setItem('prev_block', JSON.stringify(genesis_step_results[0]));
    localStorage.setItem('blockchain', JSON.stringify(genesis_step_results[1]));

    localStorage.setItem("setup", "complete");
}


/*

// all statements calling functions 
// sample data for the genesis_step (and printing out the results)

// testing for part 1
const ip = "localhost:3000";
const api_endpt="/api/v1.0/getThis";
const query_string = "&this=me&blah=blooh";
const method_type = "GET";
const prev_block_temp = null;

genesis_step(ip, api_endpt, query_string, method_type, prev_block_temp);

// testing for part 2
const ip1 = "localhost:3000";
const api_endpt1="/api/v1.0/getThis";
const query_string1 = "&this=me&blah=blooh";
const method_type1 = "GET";
const prev_block_temp_1 = null;


build_chain(blockchain, ip1, api_endpt1, query_string1, method_type1, prev_block_temp_1);
// testing for part 3
const ip2 = "localhost:3000";
const api_endpt2="/api/v1.0/getThis";
const query_string2 = "&this=me&blah=blooh";
const method_type2 = "GET";
const prev_block_temp_2 = null;


build_chain(blockchain, ip2, api_endpt2, query_string2, method_type2, prev_block_temp_2);



//latest_to_oldest_traversal(blockchain);
//oldest_to_latest_traversal(blockchain);

*/

module.exports.add_block_to_chain=add_block_to_chain;