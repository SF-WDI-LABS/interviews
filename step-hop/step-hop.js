// SUPER INEFFICIENT RECURSION
// each number of stairs is calculated many times
var waysToHop = function(stairs){
	if (stairs <= 1){
		return 1;
	} else {
		return waysToHop(stairs-1) + waysToHop(stairs-2);
	}
}

for (var i=0; i<5; i++){
	console.log(waysToHop(i)+" ways to hop "+i+" stairs");
}

// WAY MORE EFFICIENT DYNAMIC PROGRAMMING
// each number of stairs is calculated only once
var waysToHopDP = function(stairs){
	// "memoize" (store) previous values
	// so we don't have to calculate them over and over!
	var memo = {0:1, 1:1}; 
	for (var i=2; i<=stairs; i++){
		memo[i] = memo[i-1] + memo[i-2];
	}
	return memo[stairs];
}

for (var i=0; i<5; i++){
	console.log(waysToHopDP(i)+" ways to hop "+i+" stairs");
}

