var smartSubstring = function(str){
	if (str.length === 0){
		return str;
	}
	var currentWordStart = 0;
	var currentWord;
	var output = [];
	var charCount = 0;
	var i=0;
	while(i<str.length){
		if (/\s/.test(str[i])){
			foundWhiteSpace = true;
			// we're at the end of the current word
			currentWord = str.slice(currentWordStart, i);
			if (currentWord.trim() === "and"){
				currentWord = currentWord.replace(/and/, "&");
			}
			if (charCount + currentWord.length <= 40){
				output.push(currentWord);
				charCount = charCount + currentWord.length;
				currentWordStart = i;
			} else {
				return output.join("");
			}
		} else if (i > 40 && output.length === 0){
			// we've reached the end of the alotted characters without finding any whitespace
			return "";
		}
		i++;
	} 
	// at this point, we must have gone through the whole string,
	// found at least one word, and ended with a letter

	// check if the last word can fit in our 40 chars
	currentWord = str.slice(currentWordStart, i);
	if (currentWord.trim() === "and"){
		currentWord = currentWord.replace(/and/, "&");
	}
	if (charCount + currentWord.length <= 40){
		output.push(currentWord);
	} 
	return output.join("");
}

var tests = [
	{input: "", expected: ""},
	{input: "vegans eat tofu and most candy, and lots of salads filled with delicious greens", expected: "vegans eat tofu & most candy, & lots of"},
	{input: "and", expected: "&"},
	{input: "   andand  and  ", expected: "   andand  &  "}
];


var got;
for (var t=0; t<tests.length; t++){
	console.log("\nTesting smartSubstring with input \""+tests[t].input+"\"");
	console.log("\texpected: \""+tests[t].expected+"\"");
	got  = smartSubstring(tests[t].input);
	console.log("\tgot:      \""+got+"\"");
	console.log(got===tests[t].expected ? "\tPASS!" : "\tFAIL!");
}
