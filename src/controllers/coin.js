// The files in this directory contain functions that handle requests coming to different routes
function coinFlip() {
    var result;
    var random = Math.random();
    if (random < 0.5) {
      result = "heads";
    } else {
      result = "tails";
    }
    return result;
  }
  
  function coinFlips(flips) {
    let flipList = [];
    let i = 0; 
    for (let i=0; i < flips; i++) {
      flipList.push(coinFlip());
    }
    return flipList;
  }
  
  function countFlips(array) {
    var count;
    var heads = 0;
    var tails = 0;
    var i = 0;
    for (let i=0; i < array.length; i++) {
      if (array[i] === "tails") {
        tails += 1;
      } else {
        heads += 1;
      }
    }
    if (heads == 0) {
      count = { tails };
    } else if (tails == 0) {
      count = { heads };
    } else {
      count = { tails, heads };
    }
    return count;
  }
  
  function flipACoin(call) {
    var statement = {
      call,
      flip: coinFlip(), 
      result: "", 
    };
    if (statement.call === statement.flip) { 
      statement.result = "win";  
    } else {
      statement.result = "lose"; 
    }
    return statement;
  }