const uuid = require('uuid');

class Block {
  constructor(ip, api_endpt, query_string, method_type, prev_block) {
  	this.block_id = uuid.v4();
    this.ip = ip;
    this.api_endpt = api_endpt;
    this.query_string = query_string;
    this.method_type = method_type; 
    this.timestmp = Date.now();
    this.prev_block = prev_block;
    this.add_metadata = new Map();
  }
  /*
  make_connection_prev(prev_block)
  {
    this.prev_block = prev_block;
  }

  make_connection_next(new_block)
  {
    this.next_block = new_block;
  }
  */
  print_obj()
  {
    console.log(JSON.stringify(this, null, 4));
  }
  
}

//no deleting blocks 
class Blockchain {
	constructor(genesis_block, last_block, num_blocks){
   	this.genesis_block = genesis_block;
    this.last_block = last_block;
    this.num_blocks = num_blocks;
    this.add_metadata = new Map();
  }

  add_block(new_block)
  {
    //new_block.prev_block === this.last_block;
    this.last_block = new_block;
    this.num_blocks+=1
  }


  
  print_obj()
  {
    console.log(JSON.stringify(this, null, 4));
  }

}

module.exports.Block=Block;
module.exports.Blockchain = Blockchain;