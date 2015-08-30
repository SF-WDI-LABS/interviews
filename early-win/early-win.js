var CYOATree = function (firstSection){
	this.head = firstSection;
}


CYOATree.prototype.findEarlyWin = function(){
	// set up the queue of nodes to  check for happy ending
	var queue = [{node: this.head, numDecisions: 0}]; 
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
	// we'll adopt a js-array-like convention of returning -1
	return -1;
}

var CYOANode = function (storySection, choices){
	this.data = storySection; // the section of the story starting at this page
	// "Once upon a time... "
	this.children = choices;	// the choices of pages/CYOANodes that we can go to from here
	// {43: CYOANode@2987293423, 89: CYOANode@298432923842, 200: CYOANode@203492390432}
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

// var pg67 = new CYOANode("You open the door, and find the Sword of Truth! Congratulations!", []);
// var pg13 = new CYOANode("As you lift the jar to bring her with you, the fairy spins out, and you spin in. You are trapped in the jar. YOU HAVE LOST.", [])
// var pg43 = new CYOANode("The fairy pouts, but then she waves her hand, and a golden door appears in the tree next to you.", [pg67, pg13]);
// var pg89 = new CYOANode("*You* are now trapped inside the jar! The fairy blows you a kiss as she flies away.  YOU HAVE LOST.", []);
// var pg1 = new CYOANode("Once upon a time...", [pg43, pg89]);

var pg67 = new CYOANode("pg67 Congratulations!", []);
var pg13 = new CYOANode("pg13", [])
var pg43 = new CYOANode("pg43", [pg67, pg13]);
var pg89 = new CYOANode("pg89", []);
var pg1 = new CYOANode("pg1", [pg43, pg89]);
var book = new CYOATree(pg1);
// 		89L
// 	/ 
// 1 			67W
// 	\		/
// 		43 
// 			\
// 				13L

console.log(book.findEarlyWin())  //2

var loserBook = new CYOATree(pg13);
console.log(loserBook.findEarlyWin());  // -1

var immediateWinBook = new CYOATree(pg67);
console.log(immediateWinBook.findEarlyWin()); // 0
