var smartSubstring = function(str){
	// if str is already 40 or less, just return it
	if (str.length<=40){
		return str;
	}
	// if 41 happened to be a whitespace, just return the first 40
	// since we're not breaking a word
	if (/\s/.test(str[41])){
	// note /\s/.test(str[41]) checks if str[41] is any kind of whitespace
	// including space, tab, newline, etc
	// could just uses regex \s to check if str[41] is " " for a similar test
		// return first 40 characters as a new string
		return str.slice(0, 40);
	}
	// in any other situation, move back 
	// until we find the most recent whitespace,
	// and return the slice from 0 to the most recent whitespace
	for(var i=40; i>=0; i--){
		if (/\s/.test(str[i])){
			return str.slice(0, i+1);
		}
	}

	// if we get to this point and haven't returned,
	// it means the string has one word stretching 
	// from index 0 to index 41... and possibly beyond

	// we'll return an empty string
	return "";
};

var tests = [
	{input: "", expected: ""},
	{input: "supercalifrigilisticexpialidociousfourtypluscharacterword", expected: ""},
	{input: "A star is a luminous sphere of plasma held together by its own gravity. The nearest star to Earth is the Sun. Other stars, mostly in the Milky Way, are visible from Earth during the night, appearing as a multitude of fixed luminous points in the sky due to their immense distance from Earth.\n- Wikipedia", expected: "A star is a luminous sphere of plasma "},
	{input: "Hello World!", expected: "Hello World!"},
	{input: "                                               ", expected: "                                        "},
	{input: "   a  ", expected: "   a  "}
];


var got;
for (var t=0; t<tests.length; t++){
	console.log("\nTesting smartSubstring with input \""+tests[t].input+"\"");
	console.log("\texpected: \""+tests[t].expected+"\"");
	got  = smartSubstring(tests[t].input);
	console.log("\tgot:      \""+got+"\"");
	console.log(got===tests[t].expected ? "\tPASS!" : "\tFAIL!");
}