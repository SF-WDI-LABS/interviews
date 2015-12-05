var CYOATree = function (storySection, choices){
	this.data = storySection; 	// a string, the section of the story starting at this page
	this.children = choices;	// an array, holds the CYOATrees that we can go to directly from here
};

CYOATree.prototype.isHappyEnding = function(){
	// check if the string "Congratulations!" appears in this section of story
	// return /Congratulations!/.test(this.data);  //regex version
	return this.data.indexOf("Congratulations!") !== -1;  // indexOf version
};


// implements breadth first search, with depth tracking, 
// to find the depth of the earliest win
CYOATree.prototype.findEarlyWin = function(){
	// set up the queue of nodes to  check for happy ending
	var queue = [{node: this, numDecisions: 0}]; 
	// console.log("queue, ", queue)
	var current;
	while (queue.length !== 0){
		current = queue.shift(); // removes and returns first element of array
		// check if current node is happy ending
		if (current.node.isHappyEnding()){
			return current.numDecisions;
		} else {
			if (current.node.children){
				for(var i=0; i<current.node.children.length; i++){
					queue.push({node:current.node.children[i], numDecisions: current.numDecisions+1});
				}
			}
		}
	}
	// we've gone through the entire story tree, and there are no happy endings
	// interviewees should ask what to do here
	// we'll adopt a convention of returning -1
	return -1;
};




//////////////////Testing

CYOATree.prototype.addChoice = function(choiceNode){
	this.children.push(choiceNode);
};

var pg67 = new CYOATree("pg67 text -- Congratulations!", []);
var pg13 = new CYOATree("pg13 text -- You have died.", []);
var pg43 = new CYOATree("pg43 text", [pg67, pg13]);
var pg89 = new CYOATree("pg89 text -- You have died.", []);
var pg1 = new CYOATree("pg1 text -- Once upon a time...", [pg43, pg89]);
var book = pg1;

// 	   89L
// 	/ 
// 1 		  67W
// 	\	/
// 	   43 
// 		\
// 	  	  13L

console.log(book.findEarlyWin());  //2

var loserBook = pg13;
console.log(loserBook.findEarlyWin());  // -1

var immediateWinBook = pg67;
console.log(immediateWinBook.findEarlyWin()); // 0
