var CYOAGraph = function (firstSection){
	this.head = firstSection;
}


CYOAGraph.prototype.findEarlyWin = function(){
	// set up the queue of nodes to  check for happy ending
	var queue = [{node: this.head, numDecisions: 0}]; 
	// console.log("queue, ", queue)
	var current;

	// THIS TIME WE'LL ALSO NEED TO KEEP TRACK OF WHETHER WE'VE 
	// ALREADY SEEN A NODE
	// we'll store a hashset of pages we've seen to make it easy to check
		// a hash is better than an array because we want to be able to 
		// quickly see whether a particular page is in there already
	var seen = {};

	while (queue.length !== 0){
		current = queue.shift(); // removes and returns first element of array
		// check if current node is happy ending
		if (current.node.isHappyEnding()){
			return current.numDecisions;
		} else {
			if (current.node.children){
				for(var i=0; i<current.node.children.length; i++){
					if (!seen[current.node.children[i].page]){
						// only add child page to queue if we haven't already added it
						queue.push({node:current.node.children[i], numDecisions: current.numDecisions+1});
						seen[current.node.page] = true;  // just need to store anything truthy in here 
					}
				}
			}
		}
	}
	// we've gone through the entire story tree, and there are no happy endings
	// interviewees should ask what to do here
	// we'll adopt a js-array-like convention of returning -1
	return -1;
}

var CYOANode = function (storySection, choices, page){
	this.page = page; // to help us keep track of if we've seen this node
	this.data = storySection; // the section of the story starting at this page
	// "Once upon a time... "
	this.children = choices;	// the choices of pages/CYOANodes that we can go to from here
	// {255: CYOANode@2987293423, 216: CYOANode@2982552923842, 200: CYOANode@2034923902552}
}

CYOANode.prototype.isHappyEnding = function(){
	// check if the string "Congratulations!" appears in this section of story
	// return /Congratulations!/.test(this.data);  //regex version
	return this.data.indexOf("Congratulations!") !== -1;  // indexOf version
}


// ////////////////Testing

CYOANode.prototype.addChoice = function(choiceNode){
	this.children.push(choiceNode);
}

var pg
var pg220 = new CYOANode("pg220 Congratulations!", [], 220);
var pg234 = new CYOANode("pg234 Congratulations!", [], 234);
var pg260 = new CYOANode("pg260", [], 260);
var pg204 = new CYOANode("pg204", [pg220, pg234], 204);
var pg255 = new CYOANode("pg255", [pg204, pg260], 255);
var pg216 = new CYOANode("pg216", [pg204, pg220], 216);
var pg201 = new CYOANode("pg201", [pg255, pg216], 201);
var book = new CYOAGraph(pg201);
//			 ------- 
//			/		\
// 		216  		  220W
// 	/ 		\		/ 
// 201 			204  
// 	\		/		\
// 		255 		  234W	
// 			\
// 				260L

console.log(book.findEarlyWin())  // 2

var loserBook = new CYOAGraph(pg260);
console.log(loserBook.findEarlyWin());  // -1

var immediateWinBook = new CYOAGraph(pg220);
console.log(immediateWinBook.findEarlyWin()); // 0
