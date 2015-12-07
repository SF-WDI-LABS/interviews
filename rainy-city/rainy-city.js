
function water(arr){
	if (arr.length === 0){
		return 0;
	}

	var wall = arr[0];  // the height of the left wall of our current basin
	var potential = 0;  // the potential volume we have built up
	var actual = 0;  // the actual volume of water we found so far


	// we'll also need the height of the current building, but it's stored in arr
	// so no need to rename it  (like var height = arr[0];)

	var maxI = maxIndex(arr);

	// calculate the water in the first part of the buildings, 
	// from start of block up to one at maxI
	//console.log("forward half");
	for (var i=0; i<=maxI; i++){
		//console.log({wall: wall, height: arr[i], potential: potential, actual: actual})
		if (wall > arr[i]){  // wall > current height
			potential = potential + (wall-arr[i]);
		} else {
			actual = actual + potential;
			potential = 0;
			wall = arr[i];  // set wall height to match current height
		}
	}

	// calculate water in second part of buildings,
	// from the end of the block back to the one at maxI

	potential = 0;
	wall = arr[arr.length-1];
	//console.log("backward half")
	for (var i=arr.length-1; i>=maxI; i--){
		//console.log({wall: wall, height: arr[i], potential: potential, actual: actual})
		if(wall > arr[i]){
			potential = potential + (wall-arr[i]);
		} else {
			actual = actual + potential;
			potential = 0;
			wall = arr[i];  // set wall height to match current height
		}
	}

	return actual;

}

// Note that the two for loops in the solution above could be combined into one if we tracked
// two separate potential values. This would be slightly more efficient but perhaps less readable.


function maxIndex(arr){
	// solution strategy will require us to know the index of the max 
	// ahead of time, hence this helper function
	var maxI = 0, max = arr[0];
	for (var i=0; i<arr.length; i++){
		if (arr[i]>max){
			max = arr[i];
			maxI = i;
		}
	}
	return maxI;
}


var tests = [
	{input: [0,1,2], expected: 0},
	{input: [2,0], expected: 0},
	{input: [1,0,1], expected: 1},
	{input: [0,1,0], expected: 0},
	{input: [2,0,4,0,1], expected: 3},
	{input: [3,2,1,3,2,0], expected: 3},
	{input: [2,1,0,4,0,1,0,2,3], expected: 12}
];


var got;
for (var t=0; t<tests.length; t++){
	console.log("\nTesting water with input ", tests[t].input);
	console.log("\texpected: ", tests[t].expected);
	got  = water(tests[t].input);
	console.log("\tgot:      ", got);
	console.log(got===tests[t].expected ? "\tPASS!" : "\tFAIL!");
}
