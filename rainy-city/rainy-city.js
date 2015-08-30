
function waterVolume(arr){
	if (arr.length === 0){
		return 0;
	}

	var wall = arr[0];  // the height of the left wall of our current basin
	var potential = 0;  // the potential volume we have built up
	var actual = 0;  // the actual volume of water we found so far


	// we'll also need the height of the current building, but it's stored in arr
	// so no need to rename it
	// var height = arr[0];

	var maxI = maxIndex(arr);
	for (var i=0; i<maxI; i++){
		if (wall > height){
			potential = potential + (wall-height);
		} else {
			actual = actual + potential;
			potential = 0;
			wall = height;
		}
	}
	
	return actual;

}


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
