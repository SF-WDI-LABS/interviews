// SUPER INEFFICIENT RECURSION
// each number of stairs is calculated many times
var waysToHop = function(stairs){
	if (stairs <= 1){
		return 1;
	} else {
		return waysToHop(stairs-1) + waysToHop(stairs-2);
	}
}

console.log("\nRecursive solution");
for (var i=0; i<5; i++){
	console.log(waysToHop(i)+" ways to hop "+i+" stairs");
}

// WAY MORE EFFICIENT DYNAMIC PROGRAMMING
// each number of stairs is calculated only once
var waysToHopDP = function(stairs){
	// "memoize" (store) previous values
	// so we don't have to calculate them over and over!
	var memo = {0:1}; 
	for (var i=1; i<=stairs; i++){
		memo[i] = memo[i-1] + (memo[i-2] || 0);
	}
	return memo[stairs];
}

console.log("\nDP solution");
for (var i=0; i<5; i++){
	console.log(waysToHopDP(i)+" ways to hop "+i+" stairs");
}

// 1 ways to hop 0 stairs
// 1 ways to hop 1 stairs
// 2 ways to hop 2 stairs
// 3 ways to hop 3 stairs
// 5 ways to hop 4 stairs


var waysToHop3DP = function(stairs){
	var memo = {0:1};
	for (var i=0; i<=stairs; i++){
		if (!memo[i]){
			memo[i] = memo[i-1] + (memo[i-2] || 0) + (memo[i-3] || 0);
		}
	}
	return memo[stairs];
}

console.log("\nDP with 3 step hop option");
for (var i=0; i<5; i++){
	console.log(waysToHop3DP(i)+" ways to hop "+i+" stairs");
}

// 1 ways to hop 0 stairs
// 1 ways to hop 1 stairs
// 2 ways to hop 2 stairs
// 4 ways to hop 3 stairs
// 7 ways to hop 4 stairs
